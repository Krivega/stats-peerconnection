import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
} from '../constants';

const resolveIsStatOfType = (result) => {
  return (mediaType, type) => {
    return result.mediaType === mediaType && result.type === type;
  };
};

export const getTypeStatistic = (result) => {
  const isStatOfType = resolveIsStatOfType(result);

  if (isStatOfType('audio', 'outbound-rtp')) {
    return OUTBOUND_AUDIO_TYPE;
  }

  if (isStatOfType('audio', 'inbound-rtp')) {
    return INBOUND_AUDIO_TYPE;
  }

  if (isStatOfType('video', 'outbound-rtp')) {
    return OUTBOUND_VIDEO_TYPE;
  }

  if (isStatOfType('video', 'inbound-rtp')) {
    return INBOUND_VIDEO_TYPE;
  }

  return undefined;
};

const statsReportToArray = (results: RTCStatsReport) => {
  return [...results.keys()].map((key) => {
    return results.get(key);
  });
};

export const findInResultById = (results: RTCStatsReport, id: string) => {
  return statsReportToArray(results).find((value) => {
    return value.id === id;
  });
};
export const findInResultByType = (results: RTCStatsReport, type: string) => {
  return statsReportToArray(results).find((value) => {
    return value.type === type;
  });
};

export const forEachResults = (results: RTCStatsReport, callback) => {
  statsReportToArray(results).forEach((result) => {
    const { id } = result;

    callback(
      {
        result,
        id,
      },
      results
    );
  });
};
