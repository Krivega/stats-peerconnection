import { isChrome, isSafari } from './uaParser';

const hasAvailableStats = (): boolean => {
  return isChrome || isSafari;
};

export default hasAvailableStats;
