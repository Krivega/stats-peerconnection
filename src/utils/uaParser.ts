import UAParser from 'ua-parser-js';

const uaParser = new UAParser();

export const { name: browserName, version: browserVersion } = uaParser.getBrowser();

const { type } = uaParser.getDevice();

const { name: osName, version } = uaParser.getOS();
export const osVersion = version;

export const isEdge = browserName === 'Edge';
export const isYandexBrowser = browserName === 'YaBrowser';
export const isSafari = browserName === 'Safari';
export const isMobileSafari = browserName === 'Mobile Safari';
export const isChrome = browserName === 'Chrome';
export const isFirefox = browserName === 'Firefox';
export const isOpera = browserName === 'Opera';
export const isMobileDevice = type === 'mobile';
export const isTabletDevice = type === 'tablet';
export const isMacOS = osName === 'Mac OS';
export const isIOS = osName === 'iOS';
export const isLinux = osName === 'Linux' || osName === 'Ubuntu' || osName === 'CentOS';
export const isWindows = osName === 'Windows';
export const isAndroid = osName === 'Android';

export default uaParser;
