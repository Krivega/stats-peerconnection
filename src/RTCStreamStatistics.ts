import omitBy from 'lodash/omitBy';
import mapValues from 'lodash/mapValues';
import flow from 'lodash/flow';
import curryRight from 'lodash/curryRight';
import isUndefined from 'lodash/isUndefined';
import { isSafari } from './utils/uaParser';
import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
  INTERVAL_COLLECT_STATISTICS,
} from './constants';

const calcPercentagePacketsLostValue = ({
  total,
  lost,
}: {
  total: number;
  lost: number;
}): number => {
  if (total === 0) {
    return 0;
  }

  // "+" for 0.0 => 0
  return +((lost / total) * 100).toFixed(1);
};

const calcPercentagePacketsLost = ({ total, lost }: { total: number; lost: number }): string => {
  const percentagePacketsLost = calcPercentagePacketsLostValue({ total, lost });

  return `${percentagePacketsLost}%`;
};

const calcResolution = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): string | undefined => {
  if (!width || !height) {
    return undefined;
  }

  return `${width}x${height}`;
};

const calcBitrate = ({
  currentTimestamp,
  lastTimestamp,
  currentBytes,
  lastBytes,
}: {
  currentTimestamp: number;
  lastTimestamp: number;
  currentBytes: number;
  lastBytes: number;
}): string => {
  const bytes = +currentBytes - +lastBytes;

  let time = currentTimestamp - lastTimestamp;

  let kbps = 0;

  if (isSafari && time > 500000) {
    // Safari is in milliseconds
    time /= 1000;
  }

  if (lastTimestamp > 0 && time > 0) {
    kbps = Math.round((bytes * 8) / time);
  }

  return `${kbps}kbps`;
};

const resolveGetStatProp = (item?: Object) => {
  return <T = number | string | boolean | undefined>(key: string): T => {
    return item && item[key];
  };
};

const hasInvalidValueInfo = (value?: string): boolean => {
  return isUndefined(value) || value === '';
};

const getOnlyValidInfo = curryRight<object, object>(omitBy)(hasInvalidValueInfo);
const parseInfo = flow(
  // @ts-ignore
  getOnlyValidInfo,
  curryRight<object, string>(mapValues)((value) => {
    return value;
  })
);
const emptyInfoStats = {};

type TInfo = {
  timestamp?: number;
  packetsReceived?: number;
  packetsSent?: number;
  packetsLost?: number;
  percentagePacketsLost?: string;
  percentagePacketsLostRecent?: string;
  codec?: string;
  bitrate?: string;
  resolution?: string;
  decodeDelay?: string;
  estimatedPlayoutTimestamp?: number;
  lastPacketReceivedTimestamp?: number;
  framesReceived?: number;
  framesDropped?: number;
  jitter?: number;
  packetsDiscarded?: number;
  totalSamplesReceived?: number;
  insertedSamplesForDeceleration?: number;
  removedSamplesForAcceleration?: number;
  retransmittedBytesSent?: number;
  retransmittedPacketsSent?: number;
  qualityLimitationReason?: string;
  qualityLimitationResolutionChanges?: number;
  bandwidth?: number;
  encoderImplementation?: string;
  totalPacketSendDelay?: number;
  totalEncodedBytesTarget?: number;
  totalEncodeTime?: number;
};

export default class RTCStreamStatistics {
  id: string | number;

  type: string;

  trackIdentifier?: string;

  lastPackets?: number;

  lastLost?: number;

  lastBytes?: number;

  lastTimestamp?: number | null;

  prevTimestamp?: number | null;

  recentTotal: number = 0;

  recentLost: number = 0;

  samples: any[] = [];

  info: TInfo = {};

  getStatProp?: ReturnType<typeof resolveGetStatProp>;

  getStatCodecProp?: ReturnType<typeof resolveGetStatProp>;

  getStatTrackProp?: ReturnType<typeof resolveGetStatProp>;

  constructor({
    id,
    type,
    trackIdentifier,
  }: {
    id: string | number;
    type: string;
    trackIdentifier?: string;
  }) {
    this.id = id;
    this.type = type;
    this.trackIdentifier = trackIdentifier;
    this.init();
  }

  init() {
    this.lastPackets = 0;
    this.lastLost = 0;
    this.lastBytes = 0;
  }

  getStats() {
    if (
      this.lastTimestamp === null ||
      this.lastTimestamp === undefined ||
      (this.prevTimestamp && this.lastTimestamp - this.prevTimestamp === 0) ||
      this.isEmptyInfo()
    ) {
      return emptyInfoStats;
    }

    return { ...this.info };
  }

  isEmptyInfo() {
    return (
      this.info &&
      Object.values(this.info).filter((item) => {
        return (
          item !== 0 &&
          item !== '0' &&
          item !== '0kbps' &&
          item !== '0%' &&
          item !== '0x0' &&
          item !== 'unavailable' &&
          item !== '0ms'
        );
      }).length === 0
    );
  }

  hasUpdatedResult(result) {
    return (
      result.timestamp !== this.lastTimestamp &&
      Date.now() - result.timestamp < INTERVAL_COLLECT_STATISTICS
    );
  }

  update(result) {
    if (this.hasUpdatedResult(result)) {
      this.getStatProp = resolveGetStatProp(result);
      this.getStatCodecProp = resolveGetStatProp(result.codec);
      this.getStatTrackProp = resolveGetStatProp(result.track);

      switch (this.type) {
        case OUTBOUND_AUDIO_TYPE:
        case OUTBOUND_VIDEO_TYPE:
          this.updateOutbound(result);
          break;
        case INBOUND_AUDIO_TYPE:
        case INBOUND_VIDEO_TYPE:
          this.updateInbound(result);
          break;
        default:
          break;
      }
    }

    this.updateStateTimestamp(result.timestamp);
  }

  updateInfo(info: TInfo) {
    const {
      timestamp,
      packetsReceived,
      packetsSent,
      packetsLost,
      percentagePacketsLost,
      percentagePacketsLostRecent,
      codec,
      bitrate,
      resolution,
      decodeDelay,
      estimatedPlayoutTimestamp,
      lastPacketReceivedTimestamp,
      framesDropped,
      framesReceived,
      jitter,
      packetsDiscarded,
      totalSamplesReceived,
      insertedSamplesForDeceleration,
      removedSamplesForAcceleration,
      retransmittedBytesSent,
      retransmittedPacketsSent,
      qualityLimitationReason,
      qualityLimitationResolutionChanges,
      bandwidth,
      encoderImplementation,
      totalPacketSendDelay,
      totalEncodedBytesTarget,
      totalEncodeTime,
    } = info;

    return Object.assign(
      this.info,
      parseInfo({
        timestamp,
        packetsReceived,
        packetsSent,
        packetsLost,
        percentagePacketsLost,
        percentagePacketsLostRecent,
        codec,
        bitrate,
        resolution,
        decodeDelay,
        estimatedPlayoutTimestamp,
        lastPacketReceivedTimestamp,
        framesDropped,
        framesReceived,
        jitter,
        packetsDiscarded,
        totalSamplesReceived,
        insertedSamplesForDeceleration,
        removedSamplesForAcceleration,
        retransmittedBytesSent,
        retransmittedPacketsSent,
        qualityLimitationReason,
        qualityLimitationResolutionChanges,
        bandwidth,
        encoderImplementation,
        totalPacketSendDelay,
        totalEncodedBytesTarget,
        totalEncodeTime,
      })
    );
  }

  updateStateTimestamp(timestamp) {
    this.prevTimestamp = this.lastTimestamp;
    this.lastTimestamp = timestamp;
  }

  updatePacketLossStats(currentTotal?: number, currentLost?: number) {
    if (currentTotal === undefined || currentLost === undefined) {
      return undefined;
    }

    const currentTotalParsed = currentTotal || 0;
    const currentLostParsed = currentLost || 0;
    const lastPacketsParsed = this.lastPackets || 0;
    const lastLostParsed = this.lastLost || 0;

    this.updateInfo({
      percentagePacketsLost: calcPercentagePacketsLost({
        total: currentTotalParsed,
        lost: currentLostParsed,
      }),
    });

    let sample;

    if (this.samples.length >= 2) {
      sample = this.samples.shift();
      this.recentLost -= sample[0];
      this.recentTotal -= sample[1];
    }

    sample = [
      Math.max(currentLostParsed - lastLostParsed, 0),
      currentTotalParsed - lastPacketsParsed,
    ];
    this.recentLost += sample[0];
    this.recentTotal += sample[1];
    this.samples.push(sample);

    this.updateInfo({
      percentagePacketsLostRecent: calcPercentagePacketsLost({
        total: this.recentTotal,
        lost: this.recentLost,
      }),
    });

    return undefined;
  }

  updateInbound(result) {
    this.updateInfo({
      packetsReceived: this.getStatProp!<number>('packetsReceived'),
      packetsLost: this.getStatProp!<number>('packetsLost'),
      bitrate: 'unavailable',
    });

    const { packetsReceived, packetsLost } = this.info!;

    let decodeDelay = this.getStatProp!<string>('googDecodeMs');

    if (decodeDelay) {
      decodeDelay = `${decodeDelay}ms`;
    }

    this.updatePacketLossStats(packetsReceived, packetsLost);

    this.updateInfo({
      decodeDelay,
      timestamp: result.timestamp,
      estimatedPlayoutTimestamp: result.estimatedPlayoutTimestamp,
      lastPacketReceivedTimestamp: result.lastPacketReceivedTimestamp,
      framesDropped: result.framesDropped,
      framesReceived: result.framesReceived,
      jitter: result.jitter,
      packetsDiscarded: result.packetsDiscarded,
      totalSamplesReceived: result.totalSamplesReceived,
      insertedSamplesForDeceleration: result.insertedSamplesForDeceleration,
      removedSamplesForAcceleration: result.removedSamplesForAcceleration,
      bitrate: calcBitrate({
        currentTimestamp: result.timestamp,
        lastTimestamp: this.lastTimestamp!,
        currentBytes: this.getStatProp!<number>('bytesReceived'),
        lastBytes: this.lastBytes!,
      }),
      resolution: calcResolution({
        width: this.getStatTrackProp!<number>('frameWidth'),
        height: this.getStatTrackProp!<number>('frameHeight'),
      }),
      codec: this.getStatCodecProp!<string>('mimeType'),
    });

    this.lastBytes = this.getStatProp!<number>('bytesReceived');
    this.lastPackets = packetsReceived;
    this.lastLost = packetsLost;
  }

  updateOutbound(result) {
    this.updateInfo({
      packetsSent: this.getStatProp!<number>('packetsSent'),
      packetsLost: this.getStatProp!<number>('packetsLost'),
      bitrate: 'unavailable',
    });

    const { packetsSent, packetsLost } = this.info!;

    this.updatePacketLossStats(packetsSent, packetsLost);

    this.updateInfo({
      timestamp: result.timestamp,
      retransmittedBytesSent: result.retransmittedBytesSent,
      retransmittedPacketsSent: result.retransmittedPacketsSent,
      qualityLimitationReason: result.qualityLimitationReason,
      qualityLimitationResolutionChanges: result.qualityLimitationResolutionChanges,
      bandwidth: result.bandwidth,
      encoderImplementation: result.encoderImplementation,
      totalPacketSendDelay: result.totalPacketSendDelay,
      totalEncodedBytesTarget: result.totalEncodedBytesTarget,
      totalEncodeTime: result.totalEncodeTime,
      bitrate: calcBitrate({
        currentTimestamp: result.timestamp,
        lastTimestamp: this.lastTimestamp!,
        currentBytes: this.getStatProp!<number>('bytesSent'),
        lastBytes: this.lastBytes!,
      }),
      resolution: calcResolution({
        width: this.getStatTrackProp!<number>('frameWidth'),
        height: this.getStatTrackProp!<number>('frameHeight'),
      }),
      codec: this.getStatCodecProp!<string>('mimeType'),
    });

    this.lastBytes = this.getStatProp!<number>('bytesSent');
    this.lastPackets = packetsSent;
    this.lastLost = packetsLost;
  }
}
