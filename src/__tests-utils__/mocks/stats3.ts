import time from './time';
import prepareStatsItem from './prepareStatsItem';

export const statsResult3OutboundAudio = prepareStatsItem({
  timestamp: time(5),
  type: 'outbound-rtp',
  id: 'ssrc_2350413758_send',
  ssrc: '2350413758',
  transportId: 'Channel-audio-1',
  codecId: 'codec',
  codec: { mimeType: 'opus' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier1' },
  mediaType: 'audio',
  packetsSent: '3909',
  packetsLost: '50',
  bytesSent: '703620',
});

export const statsResult3OutboundVideo = prepareStatsItem({
  timestamp: time(5),
  type: 'outbound-rtp',
  id: 'ssrc_3192304097_send',
  ssrc: '3192304097',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier2' },
  qpSum: '18134',
  mediaType: 'video',
  packetsSent: '10938',
  packetsLost: '100',
  bytesSent: '12656609',
  framesEncoded: '736',
});

export const statsResult3InboundAudio = prepareStatsItem({
  timestamp: time(5),
  type: 'inbound-rtp',
  id: 'ssrc_2137350348_recv',
  ssrc: '2137350348',
  transportId: 'Channel-audio-1',
  codecId: 'codec',
  codec: { mimeType: 'opus' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier3' },
  mediaType: 'audio',
  packetsReceived: '3906',
  packetsLost: '300',
  bytesReceived: '687456',
});

export const statsResult3InboundVideo = prepareStatsItem({
  timestamp: time(5),
  type: 'inbound-rtp',
  id: 'ssrc_991275806_recv',
  ssrc: '991275806',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier4' },
  qpSum: '19347',
  mediaType: 'video',
  packetsReceived: '15547',
  packetsLost: '990',
  framesDecoded: '2305',
  bytesReceived: '9362172',
});

export const statsResult3 = [
  statsResult3OutboundAudio,
  statsResult3OutboundVideo,
  statsResult3InboundAudio,
  statsResult3InboundVideo,
];

export const stats3OutboundAudio = {
  id: 'ssrc_2350413758_send',
  type: 'OUTBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier1',
  values: {
    timestamp: statsResult3OutboundAudio.timestamp,
    packetsSent: '3909',
    packetsLost: '50',
    percentagePacketsLost: '1.3%',
    percentagePacketsLostRecent: '1.3%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats3OutboundVideo = {
  id: 'ssrc_3192304097_send',
  type: 'OUTBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier2',
  values: {
    timestamp: statsResult3OutboundVideo.timestamp,
    packetsSent: '10938',
    packetsLost: '100',
    percentagePacketsLost: '0.9%',
    percentagePacketsLostRecent: '0.9%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats3InboundAudio = {
  id: 'ssrc_2137350348_recv',
  type: 'INBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier3',
  values: {
    timestamp: statsResult3InboundAudio.timestamp,
    packetsReceived: '3906',
    packetsLost: '300',
    percentagePacketsLost: '7.7%',
    percentagePacketsLostRecent: '7.7%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats3InboundVideo = {
  id: 'ssrc_991275806_recv',
  type: 'INBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier4',
  values: {
    timestamp: statsResult3InboundVideo.timestamp,
    packetsReceived: '15547',
    packetsLost: '990',
    percentagePacketsLost: '6.4%',
    percentagePacketsLostRecent: '6.4%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats3 = [
  stats3OutboundAudio,
  stats3OutboundVideo,
  stats3InboundAudio,
  stats3InboundVideo,
];
