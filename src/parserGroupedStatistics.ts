import groupBy from 'lodash/groupBy';
import isUndefined from 'lodash/isUndefined';
import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
} from './constants';
import type { TStatistics, TSynchronizationSources } from './typings';

const resolveParserPropsStatistics = (availableStatistics: string[]) => {
  return ({
    id,
    type,
    trackIdentifier,
    values,
  }: {
    id: string;
    type: string;
    trackIdentifier: string;
    values: { key: string; value: string | number }[];
  }) => {
    const parsedValues = availableStatistics

      .map((key) => {
        return {
          key,
          value: values[key],
        };
      })
      .filter((stats) => {
        return stats.value !== undefined;
      });

    if (parsedValues.length === 0) {
      return undefined;
    }

    return {
      id,
      type,
      trackIdentifier,
      _values: parsedValues,
    };
  };
};

const parserInboundStatistics = resolveParserPropsStatistics([
  'timestamp',
  'packetsReceived',
  'packetsLost',
  'percentagePacketsLost',
  'percentagePacketsLostRecent',
  'codec',
  'bitrate',
  'resolution',
  'estimatedPlayoutTimestamp',
  'lastPacketReceivedTimestamp',
  'framesReceived',
  'framesDropped',
  'jitter',
  'packetsDiscarded',
  'totalSamplesReceived',
  'insertedSamplesForDeceleration',
  'removedSamplesForAcceleration',
]);

const parserOutboundStatistics = resolveParserPropsStatistics([
  'timestamp',
  'packetsSent',
  'packetsLost',
  'percentagePacketsLost',
  'percentagePacketsLostRecent',
  'codec',
  'bitrate',
  'resolution',
]);

/**
 * parserGroupedStatisticsItem
 * @param {array} items items
 * @param {function} parser parser
 * @returns {array} parserGroupedStatisticsItem
 */
const parserGroupedStatisticsItem = (items, parser) => {
  if (!items) {
    return [];
  }

  return items
    .map((item) => {
      return parser(item);
    })
    .filter((item) => {
      return !isUndefined(item);
    });
};

const parserGroupedStatistics = (
  statistics,
  synchronizationSources: TSynchronizationSources
): TStatistics => {
  if (!statistics || statistics.length === 0) {
    return undefined;
  }

  const groupedStatistics = groupBy(statistics, 'type');

  return {
    [OUTBOUND_AUDIO_TYPE]: {
      groupedStatistics: parserGroupedStatisticsItem(
        groupedStatistics[OUTBOUND_AUDIO_TYPE],
        parserOutboundStatistics
      ),
    },
    [INBOUND_AUDIO_TYPE]: {
      groupedStatistics: parserGroupedStatisticsItem(
        groupedStatistics[INBOUND_AUDIO_TYPE],
        parserInboundStatistics
      ),
      synchronizationSources: synchronizationSources.audio,
    },
    [OUTBOUND_VIDEO_TYPE]: {
      groupedStatistics: parserGroupedStatisticsItem(
        groupedStatistics[OUTBOUND_VIDEO_TYPE],
        parserOutboundStatistics
      ),
    },
    [INBOUND_VIDEO_TYPE]: {
      groupedStatistics: parserGroupedStatisticsItem(
        groupedStatistics[INBOUND_VIDEO_TYPE],
        parserInboundStatistics
      ),
      synchronizationSources: synchronizationSources.video,
    },
  };
};

export default parserGroupedStatistics;
