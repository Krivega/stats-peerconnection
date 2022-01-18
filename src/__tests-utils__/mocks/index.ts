import { isChrome } from '../../utils/uaParser';
import {
  statsResult0 as _statsResult0,
  stats0 as _stats0,
  statsResult0OutboundAudio as _statsResult0OutboundAudio,
  statsResult0OutboundVideo as _statsResult0OutboundVideo,
  statsResult0InboundAudio as _statsResult0InboundAudio,
  statsResult0InboundVideo as _statsResult0InboundVideo,
  stats0OutboundAudio as _stats0OutboundAudio,
  stats0OutboundVideo as _stats0OutboundVideo,
  stats0InboundAudio as _stats0InboundAudio,
  stats0InboundVideo as _stats0InboundVideo,
} from './stats0';
import {
  statsResult1 as _statsResult1,
  stats1 as _stats1,
  statsResult1OutboundAudio as _statsResult1OutboundAudio,
  statsResult1OutboundVideo as _statsResult1OutboundVideo,
  statsResult1InboundAudio as _statsResult1InboundAudio,
  statsResult1InboundVideo as _statsResult1InboundVideo,
  stats1OutboundAudio as _stats1OutboundAudio,
  stats1OutboundVideo as _stats1OutboundVideo,
  stats1InboundAudio as _stats1InboundAudio,
  stats1InboundVideo as _stats1InboundVideo,
} from './stats1';
import {
  statsResult2 as _statsResult2,
  stats2 as _stats2,
  statsResult2OutboundAudio as _statsResult2OutboundAudio,
  statsResult2OutboundVideo as _statsResult2OutboundVideo,
  statsResult2InboundAudio as _statsResult2InboundAudio,
  statsResult2InboundVideo as _statsResult2InboundVideo,
  stats2OutboundAudio as _stats2OutboundAudio,
  stats2OutboundVideo as _stats2OutboundVideo,
  stats2InboundAudio as _stats2InboundAudio,
  stats2InboundVideo as _stats2InboundVideo,
} from './stats2';
import {
  statsResult3 as _statsResult3,
  stats3 as _stats3,
  statsResult3OutboundAudio as _statsResult3OutboundAudio,
  statsResult3OutboundVideo as _statsResult3OutboundVideo,
  statsResult3InboundAudio as _statsResult3InboundAudio,
  statsResult3InboundVideo as _statsResult3InboundVideo,
  stats3OutboundAudio as _stats3OutboundAudio,
  stats3OutboundVideo as _stats3OutboundVideo,
  stats3InboundAudio as _stats3InboundAudio,
  stats3InboundVideo as _stats3InboundVideo,
} from './stats3';

/* eslint-disable no-param-reassign */
/**
 *parseStatsResultItem
 * @param {Object} statItem statItem
 * @returns {Object} statItem
 */
const parseStatsResultItem = (statItem) => {
  statItem.stat = (key) => {
    return statItem[key];
  };

  return statItem;
};
/* eslint-enable no-param-reassign */

/**
 * parseStatsResult
 * @param {array} statsResult statsResult
 * @returns {array} statsResult
 */
const parseStatsResult = (statsResult) => {
  if (isChrome) {
    return {
      /**
       * result
       * @returns {array} statsResult
       */
      result() {
        return statsResult;
      },
    };
  }

  return statsResult;
};

export const statsResult0OutboundAudio = parseStatsResultItem(_statsResult0OutboundAudio);
export const statsResult0OutboundVideo = parseStatsResultItem(_statsResult0OutboundVideo);
export const statsResult0InboundAudio = parseStatsResultItem(_statsResult0InboundAudio);
export const statsResult0InboundVideo = parseStatsResultItem(_statsResult0InboundVideo);
export const stats0OutboundAudio = _stats0OutboundAudio;
export const stats0OutboundVideo = _stats0OutboundVideo;
export const stats0InboundAudio = _stats0InboundAudio;
export const stats0InboundVideo = _stats0InboundVideo;

export const statsResult1OutboundAudio = parseStatsResultItem(_statsResult1OutboundAudio);
export const statsResult1OutboundVideo = parseStatsResultItem(_statsResult1OutboundVideo);
export const statsResult1InboundAudio = parseStatsResultItem(_statsResult1InboundAudio);
export const statsResult1InboundVideo = parseStatsResultItem(_statsResult1InboundVideo);
export const stats1OutboundAudio = _stats1OutboundAudio;
export const stats1OutboundVideo = _stats1OutboundVideo;
export const stats1InboundAudio = _stats1InboundAudio;
export const stats1InboundVideo = _stats1InboundVideo;

export const statsResult2OutboundAudio = parseStatsResultItem(_statsResult2OutboundAudio);
export const statsResult2OutboundVideo = parseStatsResultItem(_statsResult2OutboundVideo);
export const statsResult2InboundAudio = parseStatsResultItem(_statsResult2InboundAudio);
export const statsResult2InboundVideo = parseStatsResultItem(_statsResult2InboundVideo);
export const stats2OutboundAudio = _stats2OutboundAudio;
export const stats2OutboundVideo = _stats2OutboundVideo;
export const stats2InboundAudio = _stats2InboundAudio;
export const stats2InboundVideo = _stats2InboundVideo;

export const statsResult3OutboundAudio = parseStatsResultItem(_statsResult3OutboundAudio);
export const statsResult3OutboundVideo = parseStatsResultItem(_statsResult3OutboundVideo);
export const statsResult3InboundAudio = parseStatsResultItem(_statsResult3InboundAudio);
export const statsResult3InboundVideo = parseStatsResultItem(_statsResult3InboundVideo);
export const stats3OutboundAudio = _stats3OutboundAudio;
export const stats3OutboundVideo = _stats3OutboundVideo;
export const stats3InboundAudio = _stats3InboundAudio;
export const stats3InboundVideo = _stats3InboundVideo;

export const statsResult0 = parseStatsResult(_statsResult0.map(parseStatsResultItem));
export const statsResult1 = parseStatsResult(_statsResult1.map(parseStatsResultItem));
export const statsResult2 = parseStatsResult(_statsResult2.map(parseStatsResultItem));
export const statsResult3 = parseStatsResult(_statsResult3.map(parseStatsResultItem));

export const stats0 = _stats0;
export const stats1 = _stats1;
export const stats2 = _stats2;
export const stats3 = _stats3;

// let rawStats;

// try {
//   switch (i) {
//     case 1:
//       rawStats = statsResult1;
//       break;
//     case 2:
//       rawStats = statsResult2;
//       break;
//     case 3:
//       rawStats = statsResult3;
//       break;
//     default:
//       break;
//   }

//   i++;

//   return rawStats;
