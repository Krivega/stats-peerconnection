import time from './time';
import prepareStatsItem from './prepareStatsItem';

export const statsResult2OutboundAudio = prepareStatsItem({
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
  packetsSent: '1320',
  packetsLost: '0',
  bytesSent: '237600',
});

export const statsResult2OutboundVideo = prepareStatsItem({
  timestamp: time(5),
  type: 'outbound-rtp',
  id: 'ssrc_3192304097_send',
  ssrc: '3192304097',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier2' },
  qpSum: '8388',
  mediaType: 'video',
  packetsSent: '2212',
  packetsLost: '0',
  bytesSent: '2431975',
  framesEncoded: '337',
});

export const statsResult2InboundAudio = prepareStatsItem({
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
  packetsReceived: '1319',
  packetsLost: '0',
  bytesReceived: '232144',
});

export const statsResult2InboundVideo = prepareStatsItem({
  timestamp: time(5),
  type: 'inbound-rtp',
  id: 'ssrc_991275806_recv',
  ssrc: '991275806',
  transportId: 'Channel-video-1',
  codecId: 'codec',
  codec: { mimeType: 'H264' },
  trackId: 'identifier',
  identifier: { trackIdentifier: 'identifier4' },
  qpSum: '4828',
  mediaType: 'video',
  packetsReceived: '5424',
  packetsLost: '0',
  framesDecoded: '763',
  bytesReceived: '3329931',
});

export const statsResult2 = [
  statsResult2OutboundAudio,
  statsResult2OutboundVideo,
  statsResult2InboundAudio,
  statsResult2InboundVideo,
];

export const stats2OutboundAudio = {
  id: 'ssrc_2350413758_send',
  type: 'OUTBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier1',
  values: {
    timestamp: statsResult2OutboundAudio.timestamp,
    packetsSent: '1320',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats2OutboundVideo = {
  id: 'ssrc_3192304097_send',
  type: 'OUTBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier2',
  values: {
    timestamp: statsResult2OutboundVideo.timestamp,
    packetsSent: '2212',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats2InboundAudio = {
  id: 'ssrc_2137350348_recv',
  type: 'INBOUND_AUDIO_TYPE',
  trackIdentifier: 'identifier3',
  values: {
    timestamp: statsResult2InboundAudio.timestamp,
    packetsReceived: '1319',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'opus',
  },
};

export const stats2InboundVideo = {
  id: 'ssrc_991275806_recv',
  type: 'INBOUND_VIDEO_TYPE',
  trackIdentifier: 'identifier4',
  values: {
    timestamp: statsResult2InboundVideo.timestamp,
    packetsReceived: '5424',
    packetsLost: '0',
    percentagePacketsLost: '0%',
    percentagePacketsLostRecent: '0%',
    bitrate: '0kbps',
    codec: 'H264',
  },
};

export const stats2 = [
  stats2OutboundAudio,
  stats2OutboundVideo,
  stats2InboundAudio,
  stats2InboundVideo,
];
