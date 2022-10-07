import ParserStatsPeerConnection from './ParserStatsPeerConnection';
import parserGroupedStatistics from './parserGroupedStatistics';
import type { TStatistics, TSynchronizationSources } from './typings';

const parserStatsPeerConnection = new ParserStatsPeerConnection();

export const reset = () => {
  return parserStatsPeerConnection.reset();
};

const parseStatsReports = (
  statsReports: RTCStatsReport[],
  synchronizationSources: TSynchronizationSources
): TStatistics => {
  const statistics = parserStatsPeerConnection.getStats(statsReports);

  return parserGroupedStatistics(statistics, synchronizationSources);
};

export default parseStatsReports;
