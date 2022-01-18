import RTCStreamStatistics from '../RTCStreamStatistics';
import {
  statsResult0OutboundAudio,
  statsResult0OutboundVideo,
  statsResult0InboundAudio,
  statsResult0InboundVideo,
  stats0OutboundAudio,
  stats0OutboundVideo,
  stats0InboundAudio,
  stats0InboundVideo,
  statsResult1OutboundAudio,
  statsResult1OutboundVideo,
  statsResult1InboundAudio,
  statsResult1InboundVideo,
  stats1OutboundAudio,
  stats1OutboundVideo,
  stats1InboundAudio,
  stats1InboundVideo,
  statsResult2OutboundAudio,
  statsResult2OutboundVideo,
  statsResult2InboundAudio,
  statsResult2InboundVideo,
  stats2OutboundAudio,
  stats2OutboundVideo,
  stats2InboundAudio,
  stats2InboundVideo,
  statsResult3OutboundAudio,
  statsResult3OutboundVideo,
  statsResult3InboundAudio,
  statsResult3InboundVideo,
  stats3OutboundAudio,
  stats3OutboundVideo,
  stats3InboundAudio,
  stats3InboundVideo,
} from '../__tests-utils__/mocks';

import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
} from '../constants';

test('RTCStreamStatistics OUTBOUND_AUDIO empty', () => {
  const statsOutboundAudio = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_AUDIO_TYPE,
  });

  expect(statsOutboundAudio.getStats()).toEqual({});
});

test('RTCStreamStatistics OUTBOUND_AUDIO 0', () => {
  const statsOutboundAudio = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_AUDIO_TYPE,
  });

  statsOutboundAudio.update(statsResult0OutboundAudio);
  expect(statsOutboundAudio.getStats()).toEqual(stats0OutboundAudio.values);
});

test('RTCStreamStatistics OUTBOUND_AUDIO 1', () => {
  const statsOutboundAudio = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_AUDIO_TYPE,
  });

  statsOutboundAudio.update(statsResult1OutboundAudio);
  expect(statsOutboundAudio.getStats()).toEqual(stats1OutboundAudio.values);
});

test('RTCStreamStatistics OUTBOUND_AUDIO 2', () => {
  const statsOutboundAudio = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_AUDIO_TYPE,
  });

  statsOutboundAudio.update(statsResult2OutboundAudio);
  expect(statsOutboundAudio.getStats()).toEqual(stats2OutboundAudio.values);
});

test('RTCStreamStatistics OUTBOUND_AUDIO 3', () => {
  const statsOutboundAudio = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_AUDIO_TYPE,
  });

  statsOutboundAudio.update(statsResult3OutboundAudio);
  expect(statsOutboundAudio.getStats()).toEqual(stats3OutboundAudio.values);
});

test('RTCStreamStatistics INBOUND_AUDIO empty', () => {
  const statsInboundAudio = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_AUDIO_TYPE,
  });

  expect(statsInboundAudio.getStats()).toEqual({});
});

test('RTCStreamStatistics INBOUND_AUDIO 0', () => {
  const statsInboundAudio = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_AUDIO_TYPE,
  });

  statsInboundAudio.update(statsResult0InboundAudio);
  expect(statsInboundAudio.getStats()).toEqual(stats0InboundAudio.values);
});

test('RTCStreamStatistics INBOUND_AUDIO 1', () => {
  const statsInboundAudio = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_AUDIO_TYPE,
  });

  statsInboundAudio.update(statsResult1InboundAudio);
  expect(statsInboundAudio.getStats()).toEqual(stats1InboundAudio.values);
});

test('RTCStreamStatistics INBOUND_AUDIO 2', () => {
  const statsInboundAudio = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_AUDIO_TYPE,
  });

  statsInboundAudio.update(statsResult2InboundAudio);
  expect(statsInboundAudio.getStats()).toEqual(stats2InboundAudio.values);
});

test('RTCStreamStatistics INBOUND_AUDIO 3', () => {
  const statsInboundAudio = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_AUDIO_TYPE,
  });

  statsInboundAudio.update(statsResult3InboundAudio);
  expect(statsInboundAudio.getStats()).toEqual(stats3InboundAudio.values);
});

test('RTCStreamStatistics OUTBOUND_VIDEO empty', () => {
  const statsOutboundVideo = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_VIDEO_TYPE,
  });

  expect(statsOutboundVideo.getStats()).toEqual({});
});

test('RTCStreamStatistics OUTBOUND_VIDEO 0', () => {
  const statsOutboundVideo = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_VIDEO_TYPE,
  });

  statsOutboundVideo.update(statsResult0OutboundVideo);
  expect(statsOutboundVideo.getStats()).toEqual(stats0OutboundVideo.values);
});

test('RTCStreamStatistics OUTBOUND_VIDEO 1', () => {
  const statsOutboundVideo = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_VIDEO_TYPE,
  });

  statsOutboundVideo.update(statsResult1OutboundVideo);
  expect(statsOutboundVideo.getStats()).toEqual(stats1OutboundVideo.values);
});

test('RTCStreamStatistics OUTBOUND_VIDEO 2', () => {
  const statsOutboundVideo = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_VIDEO_TYPE,
  });

  statsOutboundVideo.update(statsResult2OutboundVideo);
  expect(statsOutboundVideo.getStats()).toEqual(stats2OutboundVideo.values);
});

test('RTCStreamStatistics OUTBOUND_VIDEO 3', () => {
  const statsOutboundVideo = new RTCStreamStatistics({
    id: 1,
    type: OUTBOUND_VIDEO_TYPE,
  });

  statsOutboundVideo.update(statsResult3OutboundVideo);
  expect(statsOutboundVideo.getStats()).toEqual(stats3OutboundVideo.values);
});

test('RTCStreamStatistics INBOUND_VIDEO empty', () => {
  const statsInboundVideo = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_VIDEO_TYPE,
  });

  expect(statsInboundVideo.getStats()).toEqual({});
});

test('RTCStreamStatistics INBOUND_VIDEO 0', () => {
  const statsInboundVideo = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_VIDEO_TYPE,
  });

  statsInboundVideo.update(statsResult0InboundVideo);
  expect(statsInboundVideo.getStats()).toEqual(stats0InboundVideo.values);
});

test('RTCStreamStatistics INBOUND_VIDEO 1', () => {
  const statsInboundVideo = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_VIDEO_TYPE,
  });

  statsInboundVideo.update(statsResult1InboundVideo);
  expect(statsInboundVideo.getStats()).toEqual(stats1InboundVideo.values);
});

test('RTCStreamStatistics INBOUND_VIDEO 2', () => {
  const statsInboundVideo = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_VIDEO_TYPE,
  });

  statsInboundVideo.update(statsResult2InboundVideo);
  expect(statsInboundVideo.getStats()).toEqual(stats2InboundVideo.values);
});

test('RTCStreamStatistics INBOUND_VIDEO 3', () => {
  const statsInboundVideo = new RTCStreamStatistics({
    id: 1,
    type: INBOUND_VIDEO_TYPE,
  });

  statsInboundVideo.update(statsResult3InboundVideo);
  expect(statsInboundVideo.getStats()).toEqual(stats3InboundVideo.values);
});
