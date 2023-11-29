import {defineStore} from "pinia";
import Modpack from "../domains/Modpack";
import Mod from '../domains/Mod';
import {GM} from '$';

interface State {
  modpackId: string;
  modpacks: Modpack[];
  gameVersions: string[];
  modLoaders: string[];
}

export const useManagerStore = defineStore("manager-store", {
  state: (): State => ({
    modpackId: "",
    modpacks: [], // new Map<string, Modpack>(),
    gameVersions: [
      "1.20.1",
      "1.16.5",
      "1.12.2",
      "1.7.10",
    ],
    modLoaders: [
      "forge",
      "fabric",
      "quilt",
      "neo-forge",
    ]
  }),

  getters: {
    modpack(state) {
      const index = state.modpacks.findIndex((mp) => mp.id == state.modpackId);
      if (index < 0) return undefined;
      return state.modpacks[index];
    },

    getModpackById: (state) => (id: string) => {
      const index = state.modpacks.findIndex((mp) => mp.id == id);
      if (index < 0) return undefined;
      return state.modpacks[index];
    },
  },

  actions: {
    async load() {
      this.modpackId = await GM.getValue<string>("modpackId", "");
      this.modpacks = await GM.getValue<Modpack[]>("modpacks", []);
    },

    saveModpackId() {
      GM.setValue("modpackId", this.modpackId).then(() => {
        console.info("modpackId保存成功");
      });
    },

    saveModpacks() {
      GM.setValue("modpacks", this.modpacks).then(() => {
        console.info("modpacks保存成功");
      });
    },

    updateModpackId(modpackId: string) {
      this.modpackId = modpackId;
      this.saveModpackId();
    },

    updateModpack(modpack: Modpack) {
      const index = this.modpacks.findIndex((mp) => mp.id == modpack.id);
      if (index >= 0) {
        const exists = this.modpacks[index];
        exists.name = modpack.name;
        exists.version = modpack.version;
        exists.gameVersion = modpack.gameVersion;
        exists.modLoader = modpack.modLoader;
      }
      else {
        this.modpacks.push(modpack);
      }
      this.saveModpacks();
    },

    addMod(mod: Mod) {
      const index = this.modpacks.findIndex((mp) => mp.id == this.modpackId);
      if (index < 0) return;
      const modpack = this.modpacks[index];
      modpack.mods.push(mod);
    }
  }
});
