import { CancelableRequest } from '@krivega/cancelable-promise';
import Events from 'events-constructor';
import SetTimeoutRequest from './utils/SetTimeoutRequest';
import { INTERVAL_COLLECT_STATISTICS } from './constants';
import { EVENT_NAMES, COLLECTED_EVENT } from './eventNames';
import getStatsReports from './getStatsReports';
import parseStatsReports, { reset } from './parseStatsReports';
import type { TStatistics, TSynchronizationSources } from './typings';

const debug = (data: any) => {
  // eslint-disable-next-line no-console
  console.log('StatsPeerConnection', data);
};

export default class StatsPeerConnection {
  _events: Events<typeof EVENT_NAMES>;

  setTimeoutRequest: SetTimeoutRequest;

  cancelableGetStatsReports: CancelableRequest<
    Parameters<typeof getStatsReports>[0],
    ReturnType<typeof getStatsReports>
  >;

  constructor() {
    this._events = new Events<typeof EVENT_NAMES>(EVENT_NAMES);
    this.setTimeoutRequest = new SetTimeoutRequest();
    this.cancelableGetStatsReports = new CancelableRequest<
      Parameters<typeof getStatsReports>[0],
      ReturnType<typeof getStatsReports>
    >(getStatsReports);
  }

  start(
    peerConnection: RTCPeerConnection,
    {
      interval = INTERVAL_COLLECT_STATISTICS,
      onError = debug,
    }: {
      onError?: (error: Error) => void;
      interval?: number;
    } = {}
  ) {
    const collectStatistics = this._resolveCollectStatistics(peerConnection, {
      onError,
      interval,
    });

    this.stop();
    this.setTimeoutRequest.request(collectStatistics, interval);
  }

  reset = reset;

  stop() {
    this.setTimeoutRequest.cancelRequest();
    this.cancelableGetStatsReports.cancelRequest();
  }

  get requested(): boolean {
    return this.setTimeoutRequest.requested || this.cancelableGetStatsReports.requested;
  }

  _resolveCollectStatistics = (
    peerConnection: RTCPeerConnection,
    {
      interval,
      onError,
    }: {
      interval?: number;
      onError?: (error: Error) => void;
    }
  ) => {
    return () => {
      const senders = peerConnection.getSenders();
      const receivers = peerConnection.getReceivers();
      const synchronizationSources = receivers.reduce((acc, receiver) => {
        const items = receiver.getSynchronizationSources();
        const trackIdentifier = receiver.track.id;

        return { ...acc, [receiver.track.kind]: { trackIdentifier, items } };
      }, {} as TSynchronizationSources);

      return this.cancelableGetStatsReports
        .request({ senders, receivers })
        .then((reports) => {
          this._events.trigger(COLLECTED_EVENT, parseStatsReports(reports, synchronizationSources));
          this.start(peerConnection, {
            onError,
            interval,
          });
        })
        .catch(onError);
    };
  };

  onCollected(handler: (statistics: TStatistics) => void) {
    this._events.on(COLLECTED_EVENT, handler);
  }

  offCollected(handler: (statistics: TStatistics) => void) {
    this._events.off(COLLECTED_EVENT, handler);
  }
}
