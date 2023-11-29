<script setup lang="ts">
import {onMounted, ref} from 'vue';
import SearchResult from './SearchResult.vue';
import Mod from '../../clients/curseforge/messages/Mod';

const mods = ref<Mod[]>([]);

onMounted(() => {
  const resp = {
    "data": [
      {
        "id": 238222,
        "author": {
          "id": 17072262,
          "name": "mezz",
          "username": "mezz",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/29/69/635838945588716414.jpeg",
        "categories": [
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1448319358,
        "downloads": 270567874,
        "gameVersion": "1.18.2",
        "name": "Just Enough Items (JEI)",
        "slug": "jei",
        "summary": "View Items and Recipes",
        "updateDate": 1695591189,
        "releaseDate": 1695590832,
        "fileSize": 1085640,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4593548,
          "gameVersions": [
            "Forge",
            "Java 17",
            "1.18.2"
          ],
          "gameVersionTypeIds": [
            73250
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "jei-1.20.2-forge-16.0.0.28.jar",
                "id": 4767571,
                "dateCreated": "2023-09-24T21:27:12.143Z",
                "dateModified": "2023-09-24T21:33:09.57Z",
                "displayName": "jei-1.20.2-forge-16.0.0.28.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.20.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.20.2-fabric-16.0.0.28.jar",
                "id": 4767570,
                "dateCreated": "2023-09-24T21:26:55.9Z",
                "dateModified": "2023-09-24T21:32:46.18Z",
                "displayName": "jei-1.20.2-fabric-16.0.0.28.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.20.2",
                  "Fabric"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.20.1-forge-15.2.0.27.jar",
                "id": 4712868,
                "dateCreated": "2023-08-19T21:53:48.3Z",
                "dateModified": "2023-08-19T22:04:12.087Z",
                "displayName": "jei-1.20.1-forge-15.2.0.27.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.20.1",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "jei-1.19.4-forge-13.1.0.16.jar",
                "id": 4712556,
                "dateCreated": "2023-08-19T18:05:09.833Z",
                "dateModified": "2023-08-19T18:12:54.82Z",
                "displayName": "jei-1.19.4-forge-13.1.0.16.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.4",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.19.4-fabric-13.1.0.16.jar",
                "id": 4712553,
                "dateCreated": "2023-08-19T18:04:51.59Z",
                "dateModified": "2023-08-19T18:12:56.973Z",
                "displayName": "jei-1.19.4-fabric-13.1.0.16.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.4",
                  "Fabric"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.19.3-forge-12.4.0.22.jar",
                "id": 4455246,
                "dateCreated": "2023-03-24T17:31:26.113Z",
                "dateModified": "2023-03-24T17:31:26.113Z",
                "displayName": "jei-1.19.3-forge-12.4.0.22.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.3",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "jei-1.18.2-forge-10.2.1.1005.jar",
                "id": 4593548,
                "dateCreated": "2023-06-17T18:36:36.233Z",
                "dateModified": "2023-06-26T02:06:54.017Z",
                "displayName": "jei-1.18.2-forge-10.2.1.1005.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.18.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.18.2-fabric-10.2.1.1005.jar",
                "id": 4593546,
                "dateCreated": "2023-06-17T18:36:22.367Z",
                "dateModified": "2023-06-17T18:36:22.367Z",
                "displayName": "jei-1.18.2-fabric-10.2.1.1005.jar",
                "releaseType": 2,
                "gameVersions": [
                  "Fabric",
                  "1.18.2"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  68441,
                  73250
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "jei-1.18.1-9.4.1.276.jar",
                "id": 4060769,
                "dateCreated": "2022-11-01T00:43:30.177Z",
                "dateModified": "2022-11-01T00:43:30.177Z",
                "displayName": "jei-1.18.1-9.4.1.276.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.18.1",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      },
      {
        "id": 756990,
        "author": {
          "id": 102561807,
          "name": "Anxxitty__",
          "username": "Anxxitty__",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/698/128/638070827047320896.png",
        "categories": [
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1671485904,
        "downloads": 304946,
        "gameVersion": "1.20.1",
        "name": "Just Enough Farmer's Recipes",
        "slug": "farmers-delight-jei-plugin",
        "summary": "A JEI plugin that adds Farmer's Delight recipes.",
        "updateDate": 1691326515,
        "releaseDate": 1691326365,
        "fileSize": 39786,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4685186,
          "gameVersions": [
            "Fabric",
            "Java 17",
            "Java 18",
            "Client",
            "Server",
            "1.20",
            "1.20.1"
          ],
          "gameVersionTypeIds": [
            75125,
            75125
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "JustEnoughFarmersRecipes-1.20.1-1.0.1.jar",
                "id": 4685186,
                "dateCreated": "2023-08-06T12:52:45.917Z",
                "dateModified": "2023-08-06T12:55:15.447Z",
                "displayName": "JustEnoughFarmersRecipes-1.20.1-1.0.1.jar",
                "releaseType": 2,
                "gameVersions": [
                  "Fabric",
                  "Client",
                  "1.20.1",
                  "1.20",
                  "Server"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  68441,
                  75208,
                  75125
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "JustEnoughFarmersRecipes-1.19-1.0.1.jar",
                "id": 4357825,
                "dateCreated": "2023-01-21T16:07:08.043Z",
                "dateModified": "2023-01-21T16:07:08.043Z",
                "displayName": "JustEnoughFarmersRecipes-1.19-1.0.1.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.3",
                  "Fabric",
                  "1.19.2",
                  "1.19.1",
                  "1.19"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "JustEnoughFarmersRecipes-1.18.2-1.0.1.jar",
                "id": 4357804,
                "dateCreated": "2023-01-21T15:58:11.233Z",
                "dateModified": "2023-01-21T15:58:11.233Z",
                "displayName": "JustEnoughFarmersRecipes-1.18.2-1.0.1.jar",
                "releaseType": 2,
                "gameVersions": [
                  "1.18.1",
                  "Fabric",
                  "1.18.2",
                  "1.18"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      },
      {
        "id": 521393,
        "author": {
          "id": 32851078,
          "name": "shedaniel",
          "username": "shedaniel",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/426/650/637657380468740930.png",
        "categories": [
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1630141246,
        "downloads": 5159945,
        "gameVersion": "1.19.3",
        "name": "REI Plugin Compatibilities (REIPC)",
        "slug": "roughly-enough-items-hacks",
        "summary": "Support for JEI plugins for REI",
        "updateDate": 1699191827,
        "releaseDate": 1699014637,
        "fileSize": 460494,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4837450,
          "gameVersions": [
            "Java 8",
            "Forge",
            "Java 17",
            "1.19.3"
          ],
          "gameVersionTypeIds": [
            73407
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "REIPluginCompatibilities-forge-12.0.93.jar",
                "id": 4837449,
                "dateCreated": "2023-11-03T12:30:32.767Z",
                "dateModified": "2023-11-03T12:37:34.85Z",
                "displayName": "[Forge 1.20.1] v12.0.93",
                "releaseType": 1,
                "gameVersions": [
                  "1.20.1",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "REIPluginCompatibilities-forge-11.0.53.jar",
                "id": 4557409,
                "dateCreated": "2023-05-29T12:42:32.647Z",
                "dateModified": "2023-05-29T12:42:32.647Z",
                "displayName": "[Forge 1.19.4] v11.0.53",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.3",
                  "1.19.4",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "REIPluginCompatibilities-forge-11.0.92.jar",
                "id": 4837450,
                "dateCreated": "2023-11-03T12:30:37.773Z",
                "dateModified": "2023-11-05T13:43:47.123Z",
                "displayName": "[Forge 1.19.4] v11.0.92",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.3",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "REIPluginCompatibilities-forge-9.0.90.jar",
                "id": 4837440,
                "dateCreated": "2023-11-03T12:28:07.777Z",
                "dateModified": "2023-11-05T13:42:31.887Z",
                "displayName": "[Forge 1.19-1.19.2] v9.0.90",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.2",
                  "Forge",
                  "1.19.1",
                  "1.19"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "REIPluginCompatibilities-forge-8.0.89.jar",
                "id": 4837418,
                "dateCreated": "2023-11-03T12:14:18.06Z",
                "dateModified": "2023-11-05T13:43:02.453Z",
                "displayName": "[Forge 1.18.2] v8.0.89",
                "releaseType": 1,
                "gameVersions": [
                  "1.18.1",
                  "1.18.2",
                  "Forge",
                  "1.18"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-jei-internals-workaround-7.4.456.jar",
                "id": 3768219,
                "dateCreated": "2022-04-25T09:07:46.543Z",
                "dateModified": "2022-04-25T09:07:46.543Z",
                "displayName": "[Forge 1.18(.1)] v7.4.456",
                "releaseType": 2,
                "gameVersions": [
                  "1.18.1",
                  "Forge",
                  "1.18"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-jei-internals-workaround-7.0.343.jar",
                "id": 3545881,
                "dateCreated": "2021-12-02T23:09:24.59Z",
                "dateModified": "2021-12-02T23:09:24.59Z",
                "displayName": "[Forge 1.18] v7.0.343",
                "releaseType": 2,
                "gameVersions": [
                  "Forge",
                  "1.18"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  68441,
                  73250
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      },
      {
        "id": 580555,
        "author": {
          "id": 100436320,
          "name": "EmilyPloszaj",
          "username": "EmilyPloszaj",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/545/351/637878590194850929.png",
        "categories": [
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1644978393,
        "downloads": 1082519,
        "gameVersion": "1.20.2",
        "name": "EMI",
        "slug": "emi",
        "summary": "Featureful and accessible modern item and recipe viewer with JEI compatibility",
        "updateDate": 1699236297,
        "releaseDate": 1699235985,
        "fileSize": 971305,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4844250,
          "gameVersions": [
            "Forge",
            "1.20.2"
          ],
          "gameVersionTypeIds": [
            75125
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "emi-1.0.24+1.20.2+forge.jar",
                "id": 4844250,
                "dateCreated": "2023-11-06T01:59:45.46Z",
                "dateModified": "2023-11-06T02:03:45.313Z",
                "displayName": "emi-1.0.24+1.20.2+forge",
                "releaseType": 1,
                "gameVersions": [
                  "1.20.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "emi-1.0.24+1.20.2+fabric.jar",
                "id": 4844249,
                "dateCreated": "2023-11-06T01:59:43.53Z",
                "dateModified": "2023-11-06T02:04:57.063Z",
                "displayName": "emi-1.0.24+1.20.2+fabric",
                "releaseType": 1,
                "gameVersions": [
                  "1.20.2",
                  "Fabric",
                  "Quilt"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "emi-1.0.24+1.20.1+forge.jar",
                "id": 4844242,
                "dateCreated": "2023-11-06T01:57:44.933Z",
                "dateModified": "2023-11-06T02:03:07.873Z",
                "displayName": "emi-1.0.24+1.20.1+forge",
                "releaseType": 1,
                "gameVersions": [
                  "1.20.1",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "emi-1.0.24+1.19.4+forge.jar",
                "id": 4844237,
                "dateCreated": "2023-11-06T01:56:37.087Z",
                "dateModified": "2023-11-06T02:01:05.557Z",
                "displayName": "emi-1.0.24+1.19.4+forge",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.4",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "emi-1.0.24+1.19.4+fabric.jar",
                "id": 4844236,
                "dateCreated": "2023-11-06T01:56:36.463Z",
                "dateModified": "2023-11-06T02:01:03.333Z",
                "displayName": "emi-1.0.24+1.19.4+fabric",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.4",
                  "Fabric",
                  "Quilt"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "emi-1.0.24+1.19.3+forge.jar",
                "id": 4844248,
                "dateCreated": "2023-11-06T01:59:29.667Z",
                "dateModified": "2023-11-06T02:03:47.733Z",
                "displayName": "emi-1.0.24+1.19.3+forge",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.3",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "emi-0.7.3+1.18.2.jar",
                "id": 4466710,
                "dateCreated": "2023-03-31T03:33:11.277Z",
                "dateModified": "2023-03-31T03:33:11.277Z",
                "displayName": "emi-0.7.3+1.18.2",
                "releaseType": 1,
                "gameVersions": [
                  "Fabric",
                  "1.18.2",
                  "Quilt"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  68441,
                  73250
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      },
      {
        "id": 310111,
        "author": {
          "id": 32851078,
          "name": "shedaniel",
          "username": "shedaniel",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/282/25/637287701215436754.png",
        "categories": [
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1546173809,
        "downloads": 27233243,
        "gameVersion": "1.20.2",
        "name": "Roughly Enough Items Fabric/Forge (REI)",
        "slug": "roughly-enough-items",
        "summary": "Clean and Customizable. An easy way to browse recipes. Alternative to JEI Just Enough Items.",
        "updateDate": 1700338054,
        "releaseDate": 1700337257,
        "fileSize": 2276678,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4878207,
          "gameVersions": [
            "Java 8",
            "Fabric",
            "Java 17",
            "1.20.2-Snapshot",
            "1.20.2"
          ],
          "gameVersionTypeIds": [
            75125,
            75125
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "RoughlyEnoughItems-13.0.678.jar",
                "id": 4878207,
                "dateCreated": "2023-11-18T19:54:17.69Z",
                "dateModified": "2023-11-18T20:07:34.467Z",
                "displayName": "[Fabric 1.20.2] v13.0.678",
                "releaseType": 1,
                "gameVersions": [
                  "1.20.2",
                  "1.20.2-Snapshot",
                  "Fabric"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-13.0.678.jar",
                "id": 4878204,
                "dateCreated": "2023-11-18T19:53:57.203Z",
                "dateModified": "2023-11-18T20:02:39.05Z",
                "displayName": "[NeoForge 1.20.2] v13.0.678",
                "releaseType": 2,
                "gameVersions": [
                  "1.20.2",
                  "NeoForge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-13.0.678.jar",
                "id": 4878200,
                "dateCreated": "2023-11-18T19:53:34.623Z",
                "dateModified": "2023-11-18T20:02:34.373Z",
                "displayName": "[Forge 1.20.2] v13.0.678",
                "releaseType": 2,
                "gameVersions": [
                  "1.20.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "RoughlyEnoughItems-11.0.673.jar",
                "id": 4834392,
                "dateCreated": "2023-11-02T08:07:31.037Z",
                "dateModified": "2023-11-02T08:12:26.937Z",
                "displayName": "[Forge 1.19.4] v11.0.673",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.4",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-11.0.673.jar",
                "id": 4834391,
                "dateCreated": "2023-11-02T08:07:23.267Z",
                "dateModified": "2023-11-02T08:12:24.627Z",
                "displayName": "[Fabric 1.19.4] v11.0.673",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.4",
                  "Fabric",
                  "1.19-Snapshot"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-10.0.646.jar",
                "id": 4732051,
                "dateCreated": "2023-09-01T09:01:00.797Z",
                "dateModified": "2023-09-01T09:03:22.003Z",
                "displayName": "[Forge 1.19.3] v10.0.646",
                "releaseType": 2,
                "gameVersions": [
                  "1.19.3",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "RoughlyEnoughItems-8.3.667.jar",
                "id": 4812880,
                "dateCreated": "2023-10-23T13:59:03.437Z",
                "dateModified": "2023-10-23T14:03:50.91Z",
                "displayName": "[Forge 1.18.2] v8.3.667",
                "releaseType": 2,
                "gameVersions": [
                  "1.18.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-8.3.667.jar",
                "id": 4812879,
                "dateCreated": "2023-10-23T13:58:54.933Z",
                "dateModified": "2023-10-23T14:03:58.633Z",
                "displayName": "[Fabric 1.18.2] v8.3.667",
                "releaseType": 1,
                "gameVersions": [
                  "Fabric",
                  "1.18.2",
                  "1.18-Snapshot"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  68441,
                  73250
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "RoughlyEnoughItems-7.4.456.jar",
                "id": 3768218,
                "dateCreated": "2022-04-25T09:07:45.09Z",
                "dateModified": "2022-04-25T09:07:45.09Z",
                "displayName": "[Fabric 1.18(.1)] v7.4.456",
                "releaseType": 1,
                "gameVersions": [
                  "1.18.1",
                  "Fabric",
                  "1.18",
                  "1.18-Snapshot"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      },
      {
        "id": 444941,
        "author": {
          "id": 28095189,
          "name": "MelanX",
          "username": "MelanX",
          "isEarlyAccessAuthor": false
        },
        "avatarUrl": "https://media.forgecdn.net/avatars/499/180/637815670928581576.png",
        "categories": [
          {
            "id": 426,
            "dateModified": "2014-05-08T17:09:48.63Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/5/998/635351477886290676.png",
            "name": "Addons",
            "slug": "mc-addons",
            "url": "https://www.curseforge.com/minecraft/mc-mods/mc-addons",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 421,
            "dateModified": "2014-05-23T03:21:44.06Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/36/635351496947765531.png",
            "name": "API and Library",
            "slug": "library-api",
            "url": "https://www.curseforge.com/minecraft/mc-mods/library-api",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          },
          {
            "id": 423,
            "dateModified": "2014-05-08T17:42:23.74Z",
            "gameId": 432,
            "iconUrl": "https://media.forgecdn.net/avatars/6/38/635351497437388438.png",
            "name": "Map and Information",
            "slug": "map-information",
            "url": "https://www.curseforge.com/minecraft/mc-mods/map-information",
            "classId": 6,
            "isClass": false,
            "parentCategoryId": 6
          }
        ],
        "class": {
          "id": 6,
          "dateModified": "2023-08-05T12:43:53.26Z",
          "gameId": 432,
          "iconUrl": "https://media.forgecdn.net/avatars/52/101/636111139584399357.png",
          "name": "Mods",
          "slug": "mc-mods",
          "url": "https://www.curseforge.com/minecraft/mc-mods",
          "classId": null,
          "displayIndex": 1,
          "isClass": true,
          "parentCategoryId": null
        },
        "creationDate": 1612881835,
        "downloads": 453495,
        "gameVersion": "1.20.1",
        "name": "Just Enough Advancements (JEA)",
        "slug": "jea",
        "summary": "An addon for JEI which let you search for advancements. This is pronounced like \"yeah\".",
        "updateDate": 1688826585,
        "releaseDate": 1688826047,
        "fileSize": 37823,
        "isClientCompatible": true,
        "latestFileDetails": {
          "id": 4631663,
          "gameVersions": [
            "Forge",
            "Client",
            "Server",
            "1.20.1"
          ],
          "gameVersionTypeIds": [
            75125
          ]
        },
        "hasEarlyAccessFiles": false,
        "hasLocalization": false,
        "status": 4,
        "websiteRecentFiles": [
          {
            "gameVersion": {
              "id": 75125,
              "name": "Minecraft 1.20"
            },
            "files": [
              {
                "fileName": "JustEnoughAdvancements-1.20.1-5.0.1.jar",
                "id": 4631663,
                "dateCreated": "2023-07-08T14:20:47.647Z",
                "dateModified": "2023-07-08T14:20:47.647Z",
                "displayName": "JustEnoughAdvancements-1.20.1-5.0.1.jar",
                "releaseType": 1,
                "gameVersions": [
                  "Client",
                  "1.20.1",
                  "Forge",
                  "Server"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  75208,
                  75125,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73407,
              "name": "Minecraft 1.19"
            },
            "files": [
              {
                "fileName": "JustEnoughAdvancements-1.19.4-4.2.0.jar",
                "id": 4503435,
                "dateCreated": "2023-04-23T10:56:45.593Z",
                "dateModified": "2023-04-23T10:56:45.593Z",
                "displayName": "JustEnoughAdvancements-1.19.4-4.2.0.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.4",
                  "Client",
                  "Forge",
                  "Server"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  75208,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "JustEnoughAdvancements-1.19.3-4.1.0.jar",
                "id": 4424689,
                "dateCreated": "2023-03-06T15:07:00.463Z",
                "dateModified": "2023-03-06T15:07:00.463Z",
                "displayName": "JustEnoughAdvancements-1.19.3-4.1.0.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.3",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "JustEnoughAdvancements-1.19-4.0.2.jar",
                "id": 3874017,
                "dateCreated": "2022-07-13T18:54:29.22Z",
                "dateModified": "2022-07-13T18:54:29.22Z",
                "displayName": "JustEnoughAdvancements-1.19-4.0.2.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.19.2",
                  "Forge",
                  "1.19.1",
                  "1.19"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73407,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          },
          {
            "gameVersion": {
              "id": 73250,
              "name": "Minecraft 1.18"
            },
            "files": [
              {
                "fileName": "JustEnoughAdvancements-1.18.2-3.2.0.jar",
                "id": 3680036,
                "dateCreated": "2022-03-06T21:42:40.79Z",
                "dateModified": "2022-03-06T21:42:40.79Z",
                "displayName": "JustEnoughAdvancements-1.18.2-3.2.0.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.18.2",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              },
              {
                "fileName": "JustEnoughAdvancements-1.18.1-3.1.0.jar",
                "id": 3576063,
                "dateCreated": "2021-12-21T22:45:33.43Z",
                "dateModified": "2021-12-21T22:45:33.43Z",
                "displayName": "JustEnoughAdvancements-1.18.1-3.1.0.jar",
                "releaseType": 1,
                "gameVersions": [
                  "1.18.1",
                  "Forge"
                ],
                "earlyAccessEndDate": null,
                "gameVersionTypeIds": [
                  73250,
                  68441
                ],
                "isEarlyAccessContent": false
              }
            ]
          }
        ]
      }
    ],
    "pagination": {
      "index": 0,
      "pageSize": 50,
      "totalCount": 6
    }
  };

  mods.value = resp.data as Mod[];
});
</script>

<template>
  <div class="results-container">
    <search-result v-for="mod in mods" :key="mod.id" :mod="mod" />
  </div>
</template>

<style scoped lang="less">

</style>