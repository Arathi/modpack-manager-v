import {defineStore} from 'pinia';
import {SortField} from '../clients/curseforge/CurseForgeClient';
import {unsafeWindow} from '$';

interface GameVersion {
  id: number;
  version: string;
  name: string;
}

interface ModLoader {
  id: number;
  loader: string;
  slug: string;
}

class Conditions {
  page?: number = 1;
  pageSize?: number = 50;
  sortType?: number = SortField.Relevancy;
  class?: string = "mc-mods";
  categories?: string;
  search?: string;
  gameVersion?: string;
  gameFlavorsIds?: string;

  get categoryList(): string[] {
    if (this.categories == undefined) return [];
    return this.categories.split(",");
  }

  get modLoaderList(): string[] {
    if (this.gameFlavorsIds == undefined) return [];
    return this.gameFlavorsIds.split(",");
  }

  fromSearchParams(params: URLSearchParams) {
    params.forEach((value, key) => {
      switch (key) {
        case "page":
          this.page = Number(value);
          break;
        case "pageSize":
          this.pageSize = Number(value);
          break;
        case "sortType":
          this.sortType = Number(value);
          break;
        case "class":
          this.class = value;
          break;
        case "categories":
          this.categories = value;
          break;
        case "search":
          this.search = value;
          break;
        case "gameVersion":
          this.gameVersion = value;
          break;
        case "gameFlavorsIds":
          this.gameFlavorsIds = value;
          break;
      }
    });
  }
}

interface State {
  gameVersions: GameVersion[];
  modLoaders: ModLoader[];
  href: string;
}

export const useCurseForgeStore = defineStore("curseforge-store", {
  state: (): State => ({
    gameVersions: [],
    modLoaders: [],
    href: unsafeWindow.location.href,
  }),

  getters: {
    getGameVersion: (state) => {
      return (version: string) => {
        return state.gameVersions.find((gv) => gv.version == version);
      };
    },

    getModLoader: (state) => {
      return (loader: string) => {
        return state.modLoaders.find((ldr) => ldr.loader == loader);
      };
    },

    getModLoaderBySlug: (state) => {
      return (slug: string) => {
        return state.modLoaders.find((ldr) => ldr.slug == slug);
      };
    },

    gameVersionOptions(state) {
      const options: any = {};
      state.gameVersions.forEach(
        (gv) => options[gv.version] = gv.name
      );
      return options;
    },

    modLoaderOptions(state) {
      const options: any = {};
      state.modLoaders.forEach(
        (ldr) => options[ldr.slug] = ldr.loader
      );
      return options;
    },

    conditions(state) {
      const url = new URL(state.href);
      const conds = new Conditions();
      conds.fromSearchParams(url.searchParams);
      return conds;
    }
  },
  actions: {
    updateHref() {
      const href = unsafeWindow.location.href;
      if (this.href != href) {
        console.info("URL发生变化：", href);
        this.href = href;
      }
    },

    /**
     * 添加游戏版本
     * @param id
     * @param version
     */
    addGameVersion(id: number, version: string) {
      this.gameVersions.push({
        id,
        version,
        name: `Minecraft ${version}`,
      } as GameVersion);
    },

    /**
     * 添加模组加载器
     * @param id
     * @param loader
     */
    addModLoader(id: number, loader: string) {
      let slug = loader;
      switch (loader) {
        case "Forge":
          slug = "forge";
          break;
        case "Fabric":
          slug = "fabric";
          break;
        case "Quilt":
          slug = "quilt";
          break;
        case "NeoForge":
          slug = "neo-forge";
          break;
      }
      this.modLoaders.push({
        id,
        loader,
        slug
      } as ModLoader);
    },
  },
});
