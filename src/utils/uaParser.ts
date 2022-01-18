import UAParser from 'ua-parser-js';

const uaParser = new UAParser();

const { name: browserName } = uaParser.getBrowser();

export const isSafari = browserName === 'Safari';
export const isChrome = browserName === 'Chrome';

export default uaParser;
