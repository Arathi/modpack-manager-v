<script setup lang="ts">
import Mod, {File as ModFile} from '../../clients/curseforge/schema/Mod';
import {computed, onMounted, reactive, ref} from 'vue';
import dayjs from 'dayjs';
import {useModpackStore} from '../../stores/ModpackStore';

const GameVersionRegex = /^(\d+)\.(\d+)(\.(\d+))?$/;
const DateTimeFormat = 'YYYY-MM-DD';

const props = defineProps<{
  mod: Mod
}>();

const modpackStore = useModpackStore();

const files = ref<ModFile[]>([]);

onMounted(() => {
  const resp = {
    "data": [
      {
        "id": 4712868,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.27.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.27.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "a565f2e31fc2bbe6f297a4ca25241cbfd704ef6b",
            "algo": 1
          },
          {
            "value": "24845f7c3a6ddc59e9dcf97a2d493afa",
            "algo": 2
          }
        ],
        "fileDate": "2023-08-19T21:53:48.3Z",
        "fileLength": 1112891,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4712/868/jei-1.20.1-forge-15.2.0.27.jar",
        "gameVersions": [
          "1.20.1",
          "Forge"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          },
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 4274286325,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 4001682324
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1245972009
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4712520,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.26.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.26.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "d3dcd34db7e24100eda1de0743670719e63d53bf",
            "algo": 1
          },
          {
            "value": "ad5191a315ec32dda64572384661184a",
            "algo": 2
          }
        ],
        "fileDate": "2023-08-19T17:39:52.78Z",
        "fileLength": 1112891,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4712/520/jei-1.20.1-forge-15.2.0.26.jar",
        "gameVersions": [
          "1.20.1",
          "Forge"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          },
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 2099839094,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 203032622
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4690097,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.25.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.25.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "98334a65217d31ac48bdca838e94ef1622810003",
            "algo": 1
          },
          {
            "value": "b8411e4fd91edf8f7b0dcf31bfd15721",
            "algo": 2
          }
        ],
        "fileDate": "2023-08-09T05:19:48.867Z",
        "fileLength": 1112890,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4690/97/jei-1.20.1-forge-15.2.0.25.jar",
        "gameVersions": [
          "1.20.1",
          "Forge"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          },
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 2696503886,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 1634742760
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4690090,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.24.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.24.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "5e3117f588aa8c8ea47ecdcbb782497e480c356a",
            "algo": 1
          },
          {
            "value": "3e6b6b5cc3f396ba9213a97bfa4e1eaa",
            "algo": 2
          }
        ],
        "fileDate": "2023-08-09T05:09:57.57Z",
        "fileLength": 1112924,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4690/90/jei-1.20.1-forge-15.2.0.24.jar",
        "gameVersions": [
          "1.20.1",
          "Forge"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          },
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1944811301,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 18967675
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4644453,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.23.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.23.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "480813d80c8a32cc3d05950250f9b3390a1d931d",
            "algo": 1
          },
          {
            "value": "227343c41d400cea82e949bd411480af",
            "algo": 2
          }
        ],
        "fileDate": "2023-07-14T22:12:02.65Z",
        "fileLength": 1112923,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4644/453/jei-1.20.1-forge-15.2.0.23.jar",
        "gameVersions": [
          "1.20.1",
          "Forge"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          },
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1355995934,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 1731804188
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4609866,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.22.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.22.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "853bc081b8608629de92152a9531ae5b50c4cf5a",
            "algo": 1
          },
          {
            "value": "fbf44cd9b80449ab7bc8fa041e73e33b",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-26T01:55:35.533Z",
        "fileLength": 1112922,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4609/866/jei-1.20.1-forge-15.2.0.22.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1009320907,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 580593848
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4609768,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.21.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.21.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "f7badd1880085bb2ab94d370e7c085ec04918ed1",
            "algo": 1
          },
          {
            "value": "e2f598378b0c79723242f08ae61a3db7",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-26T00:15:41.123Z",
        "fileLength": 1112922,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4609/768/jei-1.20.1-forge-15.2.0.21.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 2684679374,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 3792488150
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4609626,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.2.0.20.jar",
        "fileName": "jei-1.20.1-forge-15.2.0.20.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "62410ab674bccf0839bbb72ad597ec3bce21ded0",
            "algo": 1
          },
          {
            "value": "93df8fefcc0b5975a7f4346c916a6e68",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-25T22:20:01.923Z",
        "fileLength": 1112920,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4609/626/jei-1.20.1-forge-15.2.0.20.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1064687916,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 2721853693
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 1720990856
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4597711,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.1.0.19.jar",
        "fileName": "jei-1.20.1-forge-15.1.0.19.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "070e1386e407f36d88ad714b133a5afa52fb0e4e",
            "algo": 1
          },
          {
            "value": "509b801b28dda9298624624fd8d589ba",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-19T22:19:23.143Z",
        "fileLength": 1112520,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4597/711/jei-1.20.1-forge-15.1.0.19.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 2291025204,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 1265480094
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 43385138
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4597461,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.1.0.18.jar",
        "fileName": "jei-1.20.1-forge-15.1.0.18.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "ee504d8e53a580a6ceddf10abdc5269f451cf327",
            "algo": 1
          },
          {
            "value": "508d275103f5c927466e61878e558160",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-19T20:10:16.343Z",
        "fileLength": 1112520,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4597/461/jei-1.20.1-forge-15.1.0.18.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 2966480963,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 318667699
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 43385138
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4595492,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.17.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.17.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "3a33de0f48aa7f7bbb18cc2d558ddec0fa3e3c49",
            "algo": 1
          },
          {
            "value": "9e2b7215d05172e6eea62d14a54ee917",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-18T18:32:57.807Z",
        "fileLength": 1107974,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4595/492/jei-1.20.1-forge-15.0.0.17.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 3655735865,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 2615150765
          },
          {
            "name": "assets",
            "fingerprint": 3290647580
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 529254314
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4595489,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.16.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.16.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "a72911523d33a8bdc657fdc525e1acec06fb6c66",
            "algo": 1
          },
          {
            "value": "59c97c3ce970c534eec870f5c0a996e1",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-18T18:32:01.017Z",
        "fileLength": 1107994,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4595/489/jei-1.20.1-forge-15.0.0.16.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1301167559,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 307924038
          },
          {
            "name": "assets",
            "fingerprint": 421527770
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 529254314
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4593536,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.15.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.15.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "be5fb84617e6041fae6828871f4ac54a1f11e4b5",
            "algo": 1
          },
          {
            "value": "47017bf346384fe9827fba5077807ccd",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-17T18:28:22.667Z",
        "fileLength": 1107994,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4593/536/jei-1.20.1-forge-15.0.0.15.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 1855087771,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 4149378110
          },
          {
            "name": "assets",
            "fingerprint": 421527770
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 529254314
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4592492,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.14.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.14.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "a53ba16bd4b6ad1aa4beced7479bf2f523e685c7",
            "algo": 1
          },
          {
            "value": "33b9014ddf81cec4a78621de9745c75c",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-17T04:03:28.847Z",
        "fileLength": 1107955,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4592/492/jei-1.20.1-forge-15.0.0.14.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 4212006220,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 1494659271
          },
          {
            "name": "assets",
            "fingerprint": 421527770
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 268420721
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4592475,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.13.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.13.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "d5dc55ae5fbe623c57bf908afcce6b3bc6a74a7c",
            "algo": 1
          },
          {
            "value": "4ca229d7028725bc11f8aa9109b4b1ea",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-17T03:36:41.373Z",
        "fileLength": 1106865,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4592/475/jei-1.20.1-forge-15.0.0.13.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 3037145904,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 2622506411
          },
          {
            "name": "assets",
            "fingerprint": 421527770
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          },
          {
            "name": "mezz",
            "fingerprint": 2453222973
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 2606738017
          }
        ]
      },
      {
        "id": 4585879,
        "gameId": 432,
        "modId": 238222,
        "isAvailable": true,
        "displayName": "jei-1.20.1-forge-15.0.0.12.jar",
        "fileName": "jei-1.20.1-forge-15.0.0.12.jar",
        "releaseType": 2,
        "fileStatus": 4,
        "hashes": [
          {
            "value": "7513cd1f0e8f585de8aeac9920a1906f9088e415",
            "algo": 1
          },
          {
            "value": "d5285d0059c38558235fc60f27d98c4e",
            "algo": 2
          }
        ],
        "fileDate": "2023-06-14T02:23:36.327Z",
        "fileLength": 1104584,
        "downloadCount": 0,
        "downloadUrl": "https://edge.forgecdn.net/files/4585/879/jei-1.20.1-forge-15.0.0.12.jar",
        "gameVersions": [
          "Forge",
          "1.20.1"
        ],
        "sortableGameVersions": [
          {
            "gameVersionName": "Forge",
            "gameVersionPadded": "0",
            "gameVersion": "",
            "gameVersionReleaseDate": "2022-10-01T00:00:00Z",
            "gameVersionTypeId": 68441
          },
          {
            "gameVersionName": "1.20.1",
            "gameVersionPadded": "0000000001.0000000020.0000000001",
            "gameVersion": "1.20.1",
            "gameVersionReleaseDate": "2023-06-12T14:26:38.477Z",
            "gameVersionTypeId": 75125
          }
        ],
        "dependencies": [],
        "alternateFileId": 0,
        "isServerPack": false,
        "fileFingerprint": 4162688330,
        "modules": [
          {
            "name": "META-INF",
            "fingerprint": 1053687125
          },
          {
            "name": "mezz",
            "fingerprint": 2453222973
          },
          {
            "name": "pack.mcmeta",
            "fingerprint": 1550930300
          },
          {
            "name": "assets",
            "fingerprint": 421527770
          },
          {
            "name": "jei-icon.png",
            "fingerprint": 2007185424
          }
        ]
      }
    ],
    "pagination": {
      "index": 0,
      "pageSize": 50,
      "resultCount": 16,
      "totalCount": 16
    }
  };

  files.value = resp.data;
});

const mainAuthor = computed(() => {
  if (props.mod.authors.length > 0) {
    return props.mod.authors[0];
  }
  return undefined;
});

const mainFile = computed(() => {
  if (files.value.length > 0) {
    return files.value[0];
  }
  return undefined;
});
const downloadURL = computed(() => {
  return mainFile.value?.downloadUrl;
})

const iconURL = computed(() => props.mod.logo.url);

const projectURL = computed(() => props.mod.links.websiteUrl);
const projectName = computed(() => props.mod.name);
const authorURL = computed(() => mainAuthor.value?.url);
const authorName = computed(() => mainAuthor.value?.name);

const description = computed(() => props.mod.summary);

const downloads = computed(() => {
  return `${mainFile.value?.downloadCount}`;
});
const createdAt = computed(() => {
  return dayjs(props.mod.dateCreated).format(DateTimeFormat);
});
const updatedAt = computed(() => {
  return dayjs(props.mod.dateModified).format(DateTimeFormat);
});
const fileSize = computed(() => {
  return `${mainFile.value?.fileLength}`;
});
const gameVersion = computed<string|undefined>(() => {
  let version = undefined;
  mainFile.value?.gameVersions.forEach((gv) => {
    const matcher = GameVersionRegex.exec(gv);
    if (matcher != null) {
      version = matcher[0];
    }
  });
  return version;
});
const modLoader = computed(() => {
  let loader = undefined;
  mainFile.value?.gameVersions.forEach((gv) => {
    switch (gv) {
      case "Forge":
        loader = gv;
        break;
      case "Fabric":
        loader = gv;
        break;
      case "Quilt":
        loader = gv;
        break;
      case "NeoForge":
        loader = gv;
        break;
    }
  });
  return loader;
});

const categories = computed<string[]>(() => []);

function addToModList() {
  modpackStore.addMod({
    id: `${props.mod.id}`,
    source: "curseforge",
    slug: props.mod.slug,
    version: `${mainFile.value.id}`,
  });
}
</script>

<template>
  <div class="project-card">
    <div class="art">
      <img
        :alt="`${projectName} project avatar`"
        :src="iconURL"
        width="108" height="108"
        decoding="async"
        data-nimg="future"
        loading="lazy"
        style="color:transparent"
      >
    </div>

    <a class="name" href="{{projectURL}}">
      <span class="ellipsis">{{projectName}}</span>
    </a>

    <span class="author">
      <div class="by-author-link">By
        <a class="author-name" href="{{authorURL}}">
          <span class="ellipsis">{{authorName}}</span>
        </a>
      </div>
    </span>

    <div class="actions-container">
      <a class="action-button btn-cta opacity download-cta" :href="downloadURL">
        <svg class="smaller-icon"><use href="/images/sprite.svg#icon-download"></use></svg>
        <span>下载</span>
      </a>
      <button class=" action-button btn-cta opacity install-cta" @click="addToModList">
        <svg class="smaller-icon"><use href="/images/sprite.svg#icon-plus"></use></svg>
        <span>添加</span>
      </button>
    </div>

    <p class="description">{{description}}</p>

    <ul class="details-list">
      <li class="detail-downloads">{{downloads}}</li>
      <li class="detail-updated"><span>{{updatedAt}}</span></li>
      <li class="detail-created"><span>{{createdAt}}</span></li>
      <li class="detail-size">{{fileSize}}</li>
      <li class="detail-game-version">{{gameVersion}}</li>
      <li class="detail-flavor">{{modLoader}}</li>
    </ul>

    <ul class="categories">
      <li><a class="class-tag">Mods</a></li>
      <li v-for="category in categories">
        <a>{{category}}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">

</style>