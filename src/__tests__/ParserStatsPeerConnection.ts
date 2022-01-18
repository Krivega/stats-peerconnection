import ParserStatsPeerConnection from '../ParserStatsPeerConnection';
import {
  statsResult0,
  statsResult1,
  statsResult2,
  statsResult3,
  stats0,
  stats1,
  stats2,
  stats3,
} from '../__tests-utils__/mocks';

test('ParserStatsPeerConnection empty', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats([])).toEqual([]);
});

test('ParserStatsPeerConnection 0', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats(statsResult0)).toEqual(stats0);
});

test('ParserStatsPeerConnection 1', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats(statsResult1)).toEqual(stats1);
});

test('ParserStatsPeerConnection 2', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats(statsResult2)).toEqual(stats2);
});

test('ParserStatsPeerConnection 3', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats(statsResult3)).toEqual(stats3);
});

test('reset stats', () => {
  const parserStatsPeerConnection = new ParserStatsPeerConnection();

  expect(parserStatsPeerConnection.getStats(statsResult0)).toEqual(stats0);
  expect(parserStatsPeerConnection.stats).not.toEqual({});

  parserStatsPeerConnection.reset();

  expect(parserStatsPeerConnection.stats).toEqual({});
});
