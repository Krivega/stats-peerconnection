import RTCStreamStatistics from './RTCStreamStatistics';
import { getTypeStatistic, findInResultById, forEachResults } from './utils';

export default class ParserStatsPeerConnection {
  stats: Object;

  constructor() {
    this.stats = {};
  }

  update(results: RTCStatsReport) {
    forEachResults(results, this.updateItemStats);
  }

  removeOldStats(rawStats) {
    Object.keys(this.stats).forEach((id) => {
      if (
        !rawStats.some((results: RTCStatsReport) => {
          return !!findInResultById(results, id);
        })
      ) {
        delete this.stats[id];
      }
    });
  }

  updateItemStats = ({ result, id }, results: RTCStatsReport) => {
    const type = getTypeStatistic(result);

    if (type) {
      let stats = this.stats[id];

      if (!stats) {
        stats = new RTCStreamStatistics({
          id,
          type,
          trackIdentifier: results.get(result.trackId).trackIdentifier,
        });
        this.stats[id] = stats;
      }

      stats.update({
        ...result,
        codec: results.get(result.codecId),
        track: results.get(result.trackId),
        transport: results.get(result.transportId),
      });
    }
  };

  reset() {
    this.stats = {};
  }

  getStats(rawStats) {
    this.removeOldStats(rawStats);

    rawStats.forEach((item) => {
      return this.update(item);
    });

    const stats = Object.values(this.stats).map((itemStats) => {
      return {
        id: itemStats.id,
        type: itemStats.type,
        trackIdentifier: itemStats.trackIdentifier,
        values: itemStats.getStats(),
      };
    });

    return stats;
  }
}
