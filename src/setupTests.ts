// @ts-ignores
jest.doMock('./utils/uaParser', () => {
  return {
    isChrome: false,
    isSafari: false,
  };
});
