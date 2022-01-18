export const RTCStats = {
  timestamp: 'DOMHighResTimeStamp',
  type: 'RTCStatsType',
  id: 'DOMString',
};

export const RTCRtpStreamStats = {
  ...RTCStats,
  ssrc: 'unsigned long',
  kind: 'DOMString',
  transportId: 'DOMString',
  codecId: 'DOMString',
  googCodecName: 'DOMString', // added manually
  firCount: 'unsigned long',
  pliCount: 'unsigned long',
  nackCount: 'unsigned long',
  sliCount: 'unsigned long',
  qpSum: 'unsigned long long',
  mediaType: 'DOMString', // added manually
};

export const RTCCodecStats = {
  ...RTCStats,
  payloadType: 'unsigned long',
  codecType: 'RTCCodecType',
  transportId: 'DOMString',
  mimeType: 'DOMString',
  clockRate: 'unsigned long',
  channels: 'unsigned long',
  sdpFmtpLine: 'DOMString',
  implementation: 'DOMString',
};

export const RTCReceivedRtpStreamStats = {
  ...RTCRtpStreamStats,
  packetsReceived: 'unsigned long',
  packetsLost: 'long',
  jitter: 'double',
  packetsDiscarded: 'unsigned long',
  packetsRepaired: 'unsigned long',
  burstPacketsLost: 'unsigned long',
  burstPacketsDiscarded: 'unsigned long',
  burstLossCount: 'unsigned long',
  burstDiscardCount: 'unsigned long',
  burstLossRate: 'double',
  burstDiscardRate: 'double',
  gapLossRate: 'double',
  gapDiscardRate: 'double',
};

export const RTCInboundRtpStreamStats = {
  ...RTCReceivedRtpStreamStats,
  trackId: 'DOMString',
  receiverId: 'DOMString',
  remoteId: 'DOMString',
  framesDecoded: 'unsigned long',
  lastPacketReceivedTimestamp: 'DOMHighResTimeStamp',
  averageRtcpInterval: 'double',
  fecPacketsReceived: 'unsigned long',
  bytesReceived: 'unsigned long long',
  packetsFailedDecryption: 'unsigned long',
  packetsDuplicated: 'unsigned long',
  perDscpPacketsReceived: 'record',
};

export const RTCRemoteInboundRtpStreamStats = {
  ...RTCReceivedRtpStreamStats,
  localId: 'DOMString',
  roundTripTime: 'double',
  fractionLost: 'double',
};

export const RTCSentRtpStreamStats = {
  ...RTCRtpStreamStats,
  packetsSent: 'unsigned long',
  packetsLost: 'long', // added manually
  packetsDiscardedOnSend: 'unsigned long',
  fecPacketsSent: 'unsigned long',
  bytesSent: 'unsigned long long',
  bytesDiscardedOnSend: 'unsigned long long',
};

export const RTCOutboundRtpStreamStats = {
  ...RTCSentRtpStreamStats,
  trackId: 'DOMString',
  senderId: 'DOMString',
  remoteId: 'DOMString',
  lastPacketSentTimestamp: 'DOMHighResTimeStamp',
  targetBitrate: 'double',
  framesEncoded: 'unsigned long',
  totalEncodeTime: 'double',
  averageRtcpInterval: 'double',
  qualityLimitationReason: 'RTCQualityLimitationReason',
  qualityLimitationDurations: 'record <DOMString, double>',
  perDscpPacketsSent: 'record <USVString, unsigned long>',
};

export const RTCRemoteOutboundRtpStreamStats = {
  ...RTCSentRtpStreamStats,
  localId: 'DOMString',
  remoteTimestamp: 'DOMHighResTimeStamp',
};

export const RTCRtpContributingSourceStats = {
  ...RTCStats,
  contributorSsrc: 'unsigned long',
  inboundRtpStreamId: 'DOMString',
  packetsContributedTo: 'unsigned long',
  audioLevel: 'double',
};

export const RTCPeerConnectionStats = {
  ...RTCStats,
  dataChannelsOpened: 'unsigned long',
  dataChannelsClosed: 'unsigned long',
  dataChannelsRequested: 'unsigned long',
  dataChannelsAccepted: 'unsigned long',
};

export const RTCMediaStreamStats = {
  ...RTCStats,
  streamIdentifier: 'DOMString',
  trackIds: 'sequence, <DOMString>',
};

export const RTCMediaHandlerStats = {
  ...RTCStats,
  trackIdentifier: 'DOMString',
  remoteSource: 'boolean',
  ended: 'boolean',
  kind: 'DOMString',
  priority: 'RTCPriorityType',
};

export const RTCVideoHandlerStats = {
  ...RTCMediaHandlerStats,
  frameWidth: 'unsigned long',
  frameHeight: 'unsigned long',
  framesPerSecond: 'double',
};

export const RTCVideoSenderStats = {
  ...RTCVideoHandlerStats,
  framesCaptured: 'unsigned long',
  framesSent: 'unsigned long',
  hugeFramesSent: 'unsigned long',
  keyFramesSent: 'unsigned long',
  googFrameWidthReceived: 'long', // added manually
  googFrameHeightReceived: 'long', // added manually
};

export const RTCSenderVideoTrackAttachmentStats = { ...RTCVideoSenderStats };

export const RTCVideoReceiverStats = {
  ...RTCVideoHandlerStats,
  estimatedPlayoutTimestamp: 'DOMHighResTimeStamp',
  jitterBufferDelay: 'double',
  jitterBufferEmittedCount: 'unsigned long long',
  framesReceived: 'unsigned long',
  keyFramesReceived: 'unsigned long',
  framesDecoded: 'unsigned long',
  framesDropped: 'unsigned long',
  partialFramesLost: 'unsigned long',
  fullFramesLost: 'unsigned long',
  googFrameWidthSent: 'long', // added manually
  googFrameHeightSent: 'long', // added manually
};

export const RTCAudioHandlerStats = {
  ...RTCMediaHandlerStats,
  audioLevel: 'double',
  totalAudioEnergy: 'double',
  voiceActivityFlag: 'boolean',
  totalSamplesDuration: 'double',
};

export const RTCAudioSenderStats = {
  ...RTCAudioHandlerStats,
  echoReturnLoss: 'double',
  echoReturnLossEnhancement: 'double',
  totalSamplesSent: 'unsigned long long',
};

export const RTCSenderAudioTrackAttachmentStats = { ...RTCAudioSenderStats };

export const RTCAudioReceiverStats = {
  ...RTCAudioHandlerStats,
  estimatedPlayoutTimestamp: 'DOMHighResTimeStamp',
  jitterBufferDelay: 'double',
  jitterBufferEmittedCount: 'unsigned long long',
  totalSamplesReceived: 'unsigned long long',
  concealedSamples: 'unsigned long long',
  concealmentEvents: 'unsigned long long',
};

export const RTCDataChannelStats = {
  ...RTCStats,
  label: 'DOMString',
  protocol: 'DOMString',
  dataChannelIdentifier: 'long',
  transportId: 'DOMString',
  state: 'RTCDataChannelState',
  messagesSent: 'unsigned long',
  bytesSent: 'unsigned long long',
  messagesReceived: 'unsigned long',
  bytesReceived: 'unsigned long long',
};

export const RTCTransportStats = {
  ...RTCStats,
  packetsSent: 'unsigned long',
  packetsReceived: 'unsigned long',
  bytesSent: 'unsigned long long',
  bytesReceived: 'unsigned long long',
  rtcpTransportStatsId: 'DOMString',
  iceRole: 'RTCIceRole',
  dtlsState: 'RTCDtlsTransportState',
  selectedCandidatePairId: 'DOMString',
  localCertificateId: 'DOMString',
  remoteCertificateId: 'DOMString',
  dtlsCipher: 'DOMString',
  srtpCipher: 'DOMString',
};

export const RTCIceCandidateStats = {
  ...RTCStats,
  transportId: 'DOMString',
  networkType: 'RTCNetworkType',
  ip: 'DOMString',
  port: 'long',
  protocol: 'DOMString',
  candidateType: 'RTCIceCandidateType',
  priority: 'long',
  url: 'DOMString',
  relayProtocol: 'DOMString',
  deleted: 'boolean',
};

export const RTCIceCandidatePairStats = {
  ...RTCStats,
  transportId: 'DOMString',
  localCandidateId: 'DOMString',
  remoteCandidateId: 'DOMString',
  state: 'RTCStatsIceCandidatePairState',
  nominated: 'boolean',
  packetsSent: 'unsigned long',
  packetsReceived: 'unsigned long',
  bytesSent: 'unsigned long long',
  bytesReceived: 'unsigned long long',
  lastPacketSentTimestamp: 'DOMHighResTimeStamp',
  lastPacketReceivedTimestamp: 'DOMHighResTimeStamp',
  firstRequestTimestamp: 'DOMHighResTimeStamp',
  lastRequestTimestamp: 'DOMHighResTimeStamp',
  lastResponseTimestamp: 'DOMHighResTimeStamp',
  totalRoundTripTime: 'double',
  currentRoundTripTime: 'double',
  availableOutgoingBitrate: 'double',
  availableIncomingBitrate: 'double',
  circuitBreakerTriggerCount: 'unsigned long',
  requestsReceived: 'unsigned long long',
  requestsSent: 'unsigned long long',
  responsesReceived: 'unsigned long long',
  responsesSent: 'unsigned long long',
  retransmissionsReceived: 'unsigned long long',
  retransmissionsSent: 'unsigned long long',
  consentRequestsSent: 'unsigned long long',
  consentExpiredTimestamp: 'DOMHighResTimeStamp',
};

export const RTCCertificateStats = {
  ...RTCStats,
  fingerprint: 'DOMString',
  fingerprintAlgorithm: 'DOMString',
  base64Certificate: 'DOMString',
  issuerCertificateId: 'DOMString',
};

const specs = {
  codec: RTCCodecStats,
  'inbound-rtp': RTCInboundRtpStreamStats,
  'outbound-rtp': RTCOutboundRtpStreamStats,
  'remote-inbound-rtp': RTCRemoteInboundRtpStreamStats,
  'remote-outbound-rtp': RTCRemoteOutboundRtpStreamStats,
  csrc: RTCRtpContributingSourceStats,
  'peer-connection': RTCPeerConnectionStats,
  'data-channel': RTCDataChannelStats,
  stream: RTCMediaStreamStats,
  track: {
    audio: RTCSenderAudioTrackAttachmentStats,
    video: RTCSenderVideoTrackAttachmentStats,
  },
  sender: {
    audio: RTCAudioSenderStats,
    video: RTCVideoSenderStats,
  },
  receiver: {
    audio: RTCAudioReceiverStats,
    video: RTCVideoSenderStats,
  },
  transport: RTCTransportStats,
  'candidate-pair': RTCIceCandidatePairStats,
  'local-candidate': RTCIceCandidateStats,
  'remote-candidate': RTCIceCandidateStats,
  certificate: RTCCertificateStats,
};

export default specs;
