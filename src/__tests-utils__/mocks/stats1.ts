import time from './time';
import prepareStatsItem from './prepareStatsItem';

export const statsResult1OutboundAudio = prepareStatsItem({
  timestamp: time(1),
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

export const statsResult1OutboundVideo = prepareStatsItem({
  timestamp: time(1),
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

export const statsResult1InboundAudio = prepareStatsItem({
  timestamp: time(1),
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

export const statsResult1InboundVideo = prepareStatsItem({
  timestamp: time(1),
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

export const statsResult1 = [
  statsResult1OutboundAudio,
  statsResult1OutboundVideo,
  statsResult1InboundAudio,
  statsResult1InboundVideo,
];

export const stats1OutboundAudio = {
  id: 'ssrc_2350413758_send',
  type: 'OUTBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier1',
  values: {
    timestamp: `${statsResult1OutboundAudio.timestamp}`,
    packetsSent: '539',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats1OutboundVideo = {
  id: 'ssrc_3192304097_send',
  type: 'OUTBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier2',
  values: {
    timestamp: `${statsResult1OutboundVideo.timestamp}`,
    packetsSent: '491',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats1InboundAudio = {
  id: 'ssrc_2137350348_recv',
  type: 'INBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier3',
  values: {
    timestamp: `${statsResult1InboundAudio.timestamp}`,
    packetsReceived: '538',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats1InboundVideo = {
  id: 'ssrc_991275806_recv',
  type: 'INBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier4',
  values: {
    timestamp: `${statsResult1InboundVideo.timestamp}`,
    packetsReceived: '1802',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats1 = [
  stats1OutboundAudio,
  stats1OutboundVideo,
  stats1InboundAudio,
  stats1InboundVideo,
];
