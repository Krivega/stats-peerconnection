import { INTERVAL_COLLECT_STATISTICS } from '../../constants';
import time from './time';
import prepareStatsItem from './prepareStatsItem';

export const statsResult0OutboundAudio = prepareStatsItem({
  timestamp: time(-2 * INTERVAL_COLLECT_STATISTICS),
  type: 'outbound-rtp',
  id: 'ssrc_2350413758_send',
  ssrc: '2350413758',
  transportId: 'Channel-audio-1',
  codecId: 'codec',
  codec: { mimeType: 'opus' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier1' },
  mediaType: 'audio',
  packetsSent: '539',
  packetsLost: '0',
  bytesSent: '97020',
});

export const statsResult0OutboundVideo = prepareStatsItem({
  timestamp: time(-2 * INTERVAL_COLLECT_STATISTICS),
  type: 'outbound-rtp',
  id: 'ssrc_3192304097_send',
  ssrc: '3192304097',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier2' },
  qpSum: '3618',
  mediaType: 'video',
  packetsSent: '491',
  packetsLost: '0',
  bytesSent: '495216',
  framesEncoded: '143',
});

export const statsResult0InboundAudio = prepareStatsItem({
  timestamp: time(-2 * INTERVAL_COLLECT_STATISTICS),
  type: 'inbound-rtp',
  id: 'ssrc_2137350348_recv',
  ssrc: '2137350348',
  transportId: 'Channel-audio-1',
  codecId: 'codec',
  codec: { mimeType: 'opus' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier3' },
  mediaType: 'audio',
  packetsReceived: '538',
  packetsLost: '0',
  bytesReceived: '94688',
});

export const statsResult0InboundVideo = prepareStatsItem({
  timestamp: time(-2 * INTERVAL_COLLECT_STATISTICS),
  type: 'inbound-rtp',
  id: 'ssrc_991275806_recv',
  ssrc: '991275806',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier4' },
  qpSum: '1997',
  mediaType: 'video',
  packetsReceived: '1802',
  packetsLost: '0',
  framesDecoded: '294',
  bytesReceived: '952207',
});

export const statsResult0 = [
  statsResult0OutboundAudio,
  statsResult0OutboundVideo,
  statsResult0InboundAudio,
  statsResult0InboundVideo,
];

export const stats0OutboundAudio = {
  // timestamp: `${statsResult0OutboundAudio.timestamp}`,
  id: 'ssrc_2350413758_send',
  type: 'OUTBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier1',
  values: {},
};

export const stats0OutboundVideo = {
  // timestamp: `${statsResult0OutboundVideo.timestamp}`,
  id: 'ssrc_3192304097_send',
  type: 'OUTBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier2',
  values: {},
};

export const stats0InboundAudio = {
  // timestamp: `${statsResult0InboundAudio.timestamp}`,
  id: 'ssrc_2137350348_recv',
  type: 'INBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier3',
  values: {},
};

export const stats0InboundVideo = {
  // timestamp: `${statsResult0InboundVideo.timestamp}`,
  id: 'ssrc_991275806_recv',
  type: 'INBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier4',
  values: {},
};

export const stats0 = [
  stats0OutboundAudio,
  stats0OutboundVideo,
  stats0InboundAudio,
  stats0InboundVideo,
];
