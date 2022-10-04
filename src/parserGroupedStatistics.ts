import groupBy from 'lodash/groupBy';
import isUndefined from 'lodash/isUndefined';
import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
} from './constants';
import type { TStatistics } from './typings';

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

/**
 * parserGroupedStatistics
 * @param {array} statistics statistics
 * @returns {Object|undefined} parserGroupedStatistics
 */
const parserGroupedStatistics = (statistics): TStatistics => {
  if (!statistics || statistics.length === 0) {
    return undefined;
  }

  const groupedStatistics = groupBy(statistics, 'type');

  return {
    [OUTBOUND_AUDIO_TYPE]: parserGroupedStatisticsItem(
      groupedStatistics[OUTBOUND_AUDIO_TYPE],
      parserOutboundStatistics
    ),
    [INBOUND_AUDIO_TYPE]: parserGroupedStatisticsItem(
      groupedStatistics[INBOUND_AUDIO_TYPE],
      parserInboundStatistics
    ),
    [OUTBOUND_VIDEO_TYPE]: parserGroupedStatisticsItem(
      groupedStatistics[OUTBOUND_VIDEO_TYPE],
      parserOutboundStatistics
    ),
    [INBOUND_VIDEO_TYPE]: parserGroupedStatisticsItem(
      groupedStatistics[INBOUND_VIDEO_TYPE],
      parserInboundStatistics
    ),
  };
};

export default parserGroupedStatistics;
