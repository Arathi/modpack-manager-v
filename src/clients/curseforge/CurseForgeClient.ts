import Axios, {AxiosInstance} from 'axios';
import Mod from './messages/Mod';
import PaginationResponse from './messages/Response';
import File from './messages/File';
import {useCurseForgeStore} from '../../stores/CurseForgeStore';

const GameIdMinecraft = 432;
const ClassIdMods = 6;

// TODO 排序，更新
// 使用CurseForgeAPI获取，__NEXT_DATA__中的有错
export const MinecraftVersions: any = {
  "1.18-Snapshot": 8633,
  "1.18.1": 8857,
  "1.18": 8830,
  "1.18.2": 9008,
  "1.8.9": 5806,
  "1.8.1": 4463,
  "1.8.6": 4480,
  "1.8.5": 4479,
  "1.8-Snapshot": 4450,
  "1.8.3": 4466,
  "1.8.7": 5642,
  "1.8.8": 5703,
  "1.8": 4455,
  "1.8.2": 4465,
  "1.8.4": 4478,
  "1.7.6": 4445,
  "1.7.3": 5912,
  "1.7.5": 4444,
  "1.7.10": 4449,
  "1.7.2": 361,
  "1.7.4": 367,
  "1.7.7": 4446,
  "1.7.9": 4448,
  "1.7.8": 4447,
  "1.15-Snapshot": 7519,
  "1.15.1": 7675,
  "1.15.2": 7722,
  "1.15": 7664,
  "1.17-Snapshot": 8282,
  "1.17.1": 8516,
  "1.17": 8152,
  "1.13-Snapshot": 6834,
  "1.13.1": 7107,
  "1.13.2": 7132,
  "1.13": 7081,
  "1.16-Snapshot": 7751,
  "1.16.3": 8056,
  "1.16.5": 8203,
  "1.16.1": 7892,
  "1.16.2": 8010,
  "1.16.4": 8134,
  "1.16": 7890,
  "1.4.6": 268,
  "1.4.4": 4460,
  "1.4.5": 4461,
  "1.4.2": 255,
  "1.4.7": 272,
  "1.5.2": 312,
  "1.5.1": 280,
  "1.5.0": 279,
  "1.5.3": 9791,
  "1.14-Snapshot": 7133,
  "1.14": 7318,
  "1.14.2": 7361,
  "1.14.3": 7413,
  "1.14.4": 7469,
  "1.14.1": 7344,
  "1.9-Snapshot": 5707,
  "1.9.3": 6085,
  "1.9.1": 5998,
  "1.9.4": 6084,
  "1.9.2": 5997,
  "1.9": 5946,
  "1.11.1": 6451,
  "1.11-Snapshot": 6239,
  "1.11.2": 6452,
  "1.11": 6317,
  "1.12-Snapshot": 6514,
  "1.12.2": 6756,
  "1.12.1": 6711,
  "1.12": 6580,
  "1.6.1": 318,
  "1.6.2": 320,
  "1.6.4": 326,
  "1.2.4": 4462,
  "1.2.5": 204,
  "1.2.3": 203,
  "1.2.2": 202,
  "1.2.1": 201,
  "1.0.0": 180,
  "1.0": 4482,
  "1.10": 6144,
  "1.10-Snapshot": 6143,
  "1.10.2": 6170,
  "1.10.1": 6160,
  "1.1": 186,
  "1.3.2": 246,
  "1.3.1": 241,
  "1.19-Snapshot": 8993,
  "1.19.1": 9259,
  "1.19.3": 9550,
  "1.19": 9186,
  "1.19.4-Snapshot": 9868,
  "1.19.3-Snapshot": 9859,
  "1.19.2": 9366,
  "1.19.4": 9776,
  "1.20-Snapshot": 9559,
  "1.20.2": 10236,
  "1.20.2-Snapshot": 10162,
  "1.20.1": 9990,
  "1.20": 9971,
  "1.20.3-Snapshot": 10266
};

export enum SortField {
  Relevancy = 1,
  Popularity = 2,
  LatestUpdate = 3,
  CreationDate = 5,
  TotalDownloads = 6,
  Alphabet = 7,
}

export class SearchModsConditions {
  gameId: number = GameIdMinecraft;
  index?: number = 1;
  classId: number = ClassIdMods;
  filterText?: string;
  gameVersion?: string;
  pageSize?: number = 50;
  sortField: SortField = SortField.Relevancy;
  categories: number[] = []; // categoryIds
  modLoaders: number[] = []; // gameFlavors %5B %5D
}

export class ModFilesParams {
  pageIndex: number = 0;
  pageSize: number = 50;
  sort: string = "dateCreated";
  sortDescending: boolean = true;
  gameVersionId?: number;
  gameVersion?: string;
  modLoader?: number;
  removeAlphas: boolean = true;
}

export default class CurseForgeClient {
  baseURL: string;
  axios: AxiosInstance;

  constructor(
    baseURL: string = "https://www.curseforge.com/api"
  ) {
    this.baseURL = baseURL;
    this.axios = Axios.create({});
  }

  async searchMods(conditions: SearchModsConditions): Promise<Mod[]> {
    const url = new URL(`${this.baseURL}/v1/mods/search`);

    url.searchParams.set("gameId", `${conditions.gameId}`);
    url.searchParams.set("classId", `${conditions.classId}`);
    url.searchParams.set("sortField", `${conditions.sortField}`);

    if (conditions.index != undefined) {
      url.searchParams.set("index", `${conditions.index}`);
    }

    if (conditions.filterText != undefined) {
      url.searchParams.set("filterText", `${conditions.filterText}`);
    }

    if (conditions.gameVersion != undefined) {
      url.searchParams.set("gameVersion", `${conditions.gameVersion}`);
    }

    if (conditions.pageSize != undefined) {
      url.searchParams.set("pageSize", `${conditions.pageSize}`);
    }

    let index = 0;
    for (const category of conditions.categories) {
      url.searchParams.set(`categoryIds[${index++}]`, `${category}`);
    }

    index = 0;
    for (const modLoader of conditions.modLoaders) {
      url.searchParams.set(`gameFlavors[${index++}]`, `${modLoader}`);
    }

    console.info(`搜索Mods`, url.href, conditions);
    const resp = await this.axios.get<PaginationResponse<Mod>>(url.href);
    if (resp.status != 200) {
      console.warn(`搜索Mods，状态码：${resp.status} (${resp.statusText})`);
      return [];
    }
    const body = resp.data;
    console.debug("搜索Mods，获取响应报文如下：", body);

    if (body.data == undefined) return [];
    return body.data;
  }

  async modFiles(modId: number, params: ModFilesParams): Promise<File[]> {
    const url = new URL(`${this.baseURL}/v1/mods/${modId}/files`);

    url.searchParams.set("pageIndex", `${params.pageIndex}`);
    url.searchParams.set("pageSize", `${params.pageSize}`);
    url.searchParams.set("sort", `${params.sort}`);
    url.searchParams.set("sortDescending", `${params.sortDescending}`);
    url.searchParams.set("removeAlphas", `${params.removeAlphas}`);

    if (params.gameVersionId != undefined) {
      url.searchParams.set("gameVersionId", `${params.gameVersionId}`);
    }
    else if (params.gameVersion != undefined) {
      const gameVersion = MinecraftVersions[params.gameVersion];
      if (gameVersion != undefined) {
        url.searchParams.set("gameVersionId", `${gameVersion.id}`);
      }
    }

    if (params.modLoader != undefined) {
      url.searchParams.set("gameFlavorId", `${params.modLoader}`);
    }

    console.info("搜索Mod文件", url.href, params);
    const resp = await this.axios.get<PaginationResponse<File>>(url.href);
    if (resp.status != 200) {
      console.warn(`搜索Mod（${modId}）文件，状态码：${resp.status} (${resp.statusText})`);
      return [];
    }
    const body = resp.data;
    console.debug(`搜索Mod（${modId}）文件，获取响应报文如下：`, body);

    if (body.data == undefined) return [];
    return body.data;
  }
}
