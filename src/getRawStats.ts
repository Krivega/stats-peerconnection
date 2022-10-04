const getRawStats = (peerConnection: RTCPeerConnection): Promise<RTCStatsReport[]> => {
  const senders = peerConnection.getSenders();
  const receivers = peerConnection.getReceivers();

  const items = [...senders, ...receivers].map((item: RTCRtpSender | RTCRtpReceiver) => {
    return item.getStats();
  });

  return Promise.all(items);
};

export default getRawStats;
