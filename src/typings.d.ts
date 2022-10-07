import {
  OUTBOUND_AUDIO_TYPE,
  INBOUND_AUDIO_TYPE,
  OUTBOUND_VIDEO_TYPE,
  INBOUND_VIDEO_TYPE,
} from './constants';

export type TSynchronizationSources = {
  audio: { trackIdentifier: string; items: RTCRtpSynchronizationSource[] };
  video: { trackIdentifier: string; items: RTCRtpSynchronizationSource[] };
};

export type TStatistics =
  | {
      [OUTBOUND_AUDIO_TYPE]: any;
      [INBOUND_AUDIO_TYPE]: any;
      [OUTBOUND_VIDEO_TYPE]: any;
      [INBOUND_VIDEO_TYPE]: any;
    }
  | undefined;
