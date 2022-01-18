import flow from 'lodash/flow';
import curryRight from 'lodash/curryRight';
import map from 'lodash/map';

const getStatsArr = flow(
  (peerConnection: RTCPeerConnection) => {
    const senders = peerConnection.getSenders();
    const receivers = peerConnection.getReceivers();

    return [...senders, ...receivers];
  },
  // @ts-ignore
  curryRight(map)((item: RTCRtpSender | RTCRtpReceiver) => {
    return item.getStats();
  }),
  (items) => {
    return Promise.all(items);
  }
);

const getRawStats = (peerConnection) => {
  return getStatsArr(peerConnection);
};

export default getRawStats;
