import {defineStore} from 'pinia';

interface State {
  gameVersions: Map<string, string>;
  modLoaders: Map<string, string>;
}

export const useSettingStore = defineStore("setting", {
  state: (): State => {
    const gameVersions = new Map<string, string>([
      ["1.20.1", "Minecraft 1.20.1"],
      ["1.16.5", "Minecraft 1.16.5"],
      ["1.12.2", "Minecraft 1.12.2"],
      ["1.7.10", "Minecraft 1.7.10"],
    ]);

    const modLoaders = new Map<string, string>([
      ["forge", "Forge"],
      ["fabric", "Fabric"],
      ["quilt", "Quilt"],
      ["neo-forge", "NeoForge"],
    ]);

    return {
      gameVersions,
      modLoaders,
    }
  },

  getters: {
    gameVersionOptions(state) {
      return Object.fromEntries(state.gameVersions.entries());
    },

    modLoaderOptions(state) {
      return Object.fromEntries(state.modLoaders.entries());
    }
  },

  actions: {},
});