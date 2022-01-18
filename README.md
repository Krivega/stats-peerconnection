# stats-peerconnection

[![npm](https://img.shields.io/npm/v/stats-peerconnection?style=flat-square)](https://www.npmjs.com/package/stats-peerconnection)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/stats-peerconnection?style=flat-square)

Call promises one by one, ignoring the state (fulfilled or rejected). and returning the collected data in the tuple `{ results, errors }`.

## Install

npm

```sh
npm install stats-peerconnection
```

yarn

```sh
yarn add stats-peerconnection
```

## Usage

```ts
import StatsPeerConnection from '@vinteo/stats-peerconnection';

const handleCollectStatistics = (statistics) => {};

const statsPeerConnection = new StatsPeerConnection();

const startCollect = (peerConnection: RTCPeerConnection) => {
  resetCollect();
  statsPeerConnection.start(peerConnection);
  statsPeerConnection.onCollected(handleCollectStatistics);
};

const resetCollect = () => {
  statsPeerConnection.reset();
};

const stopCollect = () => {
  statsPeerConnection.stop();
  statsPeerConnection.offCollected(handleCollectStatistics);
};

const restart = (peerConnection: RTCPeerConnection) => {
  stopCollect();
  resetCollect();
  startCollect(peerConnection);
};
```

### Example of received data from

```json
{
  "OUTBOUND_AUDIO_TYPE": [
    {
      "id": "RTCOutboundRTPAudioStream_7680843",
      "type": "OUTBOUND_AUDIO_TYPE",
      "trackIdentifier": "531c455c-ff2d-4001-ac80-0b336598b32a",
      "_values": [
        {
          "key": "timestamp",
          "value": "1642515711347.853"
        },
        {
          "key": "packetsSent",
          "value": "4852"
        },
        {
          "key": "codec",
          "value": "audio/opus"
        },
        {
          "key": "bitrate",
          "value": "53kbps"
        }
      ]
    }
  ],
  "INBOUND_AUDIO_TYPE": [
    {
      "id": "RTCInboundRTPAudioStream_1094410902",
      "type": "INBOUND_AUDIO_TYPE",
      "trackIdentifier": "5ef6f97b-0435-4c8b-9a7c-0b29ede244f5",
      "_values": [
        {
          "key": "timestamp",
          "value": "1642515711347.853"
        },
        {
          "key": "packetsReceived",
          "value": "4842"
        },
        {
          "key": "packetsLost",
          "value": "10"
        },
        {
          "key": "percentagePacketsLost",
          "value": "0.2%"
        },
        {
          "key": "percentagePacketsLostRecent",
          "value": "0%"
        },
        {
          "key": "codec",
          "value": "audio/opus"
        },
        {
          "key": "bitrate",
          "value": "65kbps"
        }
      ]
    }
  ],
  "OUTBOUND_VIDEO_TYPE": [
    {
      "id": "RTCOutboundRTPVideoStream_2989932149",
      "type": "OUTBOUND_VIDEO_TYPE",
      "trackIdentifier": "f9b8b710-92fc-4d01-9faf-e09f7c519f7c",
      "_values": [
        {
          "key": "timestamp",
          "value": "1642515711347.853"
        },
        {
          "key": "packetsSent",
          "value": "15985"
        },
        {
          "key": "codec",
          "value": "video/H264"
        },
        {
          "key": "bitrate",
          "value": "1123kbps"
        },
        {
          "key": "resolution",
          "value": "1280x720"
        }
      ]
    }
  ],
  "INBOUND_VIDEO_TYPE": [
    {
      "id": "RTCInboundRTPVideoStream_153525536",
      "type": "INBOUND_VIDEO_TYPE",
      "trackIdentifier": "8c643655-8ba5-438a-b3e3-0998bc154c71",
      "_values": [
        {
          "key": "timestamp",
          "value": "1642515711347.853"
        },
        {
          "key": "packetsReceived",
          "value": "1281"
        },
        {
          "key": "packetsLost",
          "value": "5"
        },
        {
          "key": "percentagePacketsLost",
          "value": "0.4%"
        },
        {
          "key": "percentagePacketsLostRecent",
          "value": "2%"
        },
        {
          "key": "codec",
          "value": "video/H264"
        },
        {
          "key": "bitrate",
          "value": "379kbps"
        },
        {
          "key": "resolution",
          "value": "1280x720"
        }
      ]
    },
    {
      "id": "RTCInboundRTPVideoStream_414471737",
      "type": "INBOUND_VIDEO_TYPE",
      "trackIdentifier": "dualvideo4",
      "_values": [
        {
          "key": "timestamp",
          "value": "1642515711347.853"
        },
        {
          "key": "packetsReceived",
          "value": "1893"
        },
        {
          "key": "packetsLost",
          "value": "0"
        },
        {
          "key": "percentagePacketsLost",
          "value": "0%"
        },
        {
          "key": "percentagePacketsLostRecent",
          "value": "0%"
        },
        {
          "key": "codec",
          "value": "video/H264"
        },
        {
          "key": "bitrate",
          "value": "851kbps"
        },
        {
          "key": "resolution",
          "value": "1280x720"
        }
      ]
    }
  ]
}
```

## Run tests

```sh
npm test
```

## Maintainer

**Krivega Dmitriy**

- Website: https://krivega.com
- Github: [@Krivega](https://github.com/Krivega)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Krivega/stats-peerconnection/issues). You can also take a look at the [contributing guide](https://github.com/Krivega/stats-peerconnection/blob/master/CONTRIBUTING.md).

## 📝 License

Copyright © 2020 [Krivega Dmitriy](https://github.com/Krivega).<br />
This project is [MIT](https://github.com/Krivega/stats-peerconnection/blob/master/LICENSE) licensed.
