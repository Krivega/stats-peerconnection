import CancelableRequest from '@krivega/cancelable-promise/dist/CancelableRequest';
import Events from 'events-constructor';
import SetTimeoutRequest from './utils/SetTimeoutRequest';
import { INTERVAL_COLLECT_STATISTICS } from './constants';
import { EVENT_NAMES, COLLECTED_EVENT } from './eventNames';
import getRawStats from './getRawStats';
import parserRawStats, { reset } from './parseRawStats';
import type { TStatistics } from './typings.d';

const debug = (data: any) => {
  // eslint-disable-next-line no-console
  console.log('StatsPeerConnection', data);
};

export default class StatsPeerConnection {
  _events: Events<typeof EVENT_NAMES>;

  setTimeoutRequest: SetTimeoutRequest;

  cancelableGetRawStats: CancelableRequest<
    Parameters<typeof getRawStats>[0],
    ReturnType<typeof getRawStats>
  >;

  constructor() {
    this._events = new Events<typeof EVENT_NAMES>(EVENT_NAMES);
    this.setTimeoutRequest = new SetTimeoutRequest();
    this.cancelableGetRawStats = new CancelableRequest<
      Parameters<typeof getRawStats>[0],
      ReturnType<typeof getRawStats>
    >(getRawStats);
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
    this.cancelableGetRawStats.cancelRequest();
  }

  get requested(): boolean {
    return this.setTimeoutRequest.requested || this.cancelableGetRawStats.requested;
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
      return this.cancelableGetRawStats
        .request(peerConnection)
        .then((rawStats) => {
          this._events.trigger(COLLECTED_EVENT, parserRawStats(rawStats));
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
