import ParserStatsPeerConnection from './ParserStatsPeerConnection';
import parserGroupedStatistics from './parserGroupedStatistics';
import type { TStatistics } from './typings.d';

const parserStatsPeerConnection = new ParserStatsPeerConnection();

export const reset = () => {
  return parserStatsPeerConnection.reset();
};

const parseRawStats = (rawStats): TStatistics => {
  const statistics = parserStatsPeerConnection.getStats(rawStats);

  return parserGroupedStatistics(statistics);
};

export default parseRawStats;
