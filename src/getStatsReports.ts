/* eslint-disable no-restricted-syntax */
const getStatsReports = ({
  senders,
  receivers,
}: {
  senders: RTCRtpSender[];
  receivers: RTCRtpReceiver[];
}): Promise<RTCStatsReport[]> => {
  const items = [...senders, ...receivers].map((item: RTCRtpSender | RTCRtpReceiver) => {
    return item.getStats();
  });

  return Promise.all(items);
};

export default getStatsReports;
