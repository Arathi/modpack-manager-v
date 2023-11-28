import {defineStore} from "pinia";
import Modpack from "../domains/Modpack";
import {GM} from '$';
import Mod from '../domains/Mod';

interface State {
  modpackId: string;
  modpacks: Map<string, Modpack>;
}

export const useModpackStore = defineStore("modpack-store", {
  state: (): State => ({
    modpackId: "",
    modpacks: new Map<string, Modpack>(),
  }),

  getters: {
    modpack(state) {
      if (state.modpackId == undefined) return undefined;
      return state.modpacks.get(state.modpackId);
    },

    modpackOptions(state) {
      const options: any = {};
      state.modpacks.forEach((mp) => {
        options[mp.id] = mp.name;
      });
      return options;
    },
  },

  actions: {
    async load() {
      this.modpackId = await GM.getValue<string>("modpackId", "");
      const list = await GM.getValue<Modpack[]>("modpacks", []);
      for (const modpack of list) {
        this.modpacks.set(modpack.id, modpack);
      }
    },

    saveModpackId() {
      GM.setValue("modpackId", this.modpackId).then(() => {
        console.info("modpackId保存成功");
      });
    },

    saveModpacks() {
      const list: Modpack[] = [];
      for (const modpack of this.modpacks.values()) {
        list.push(modpack);
      }
      GM.setValue("modpacks", list).then(() => {
        console.info("modpacks保存成功");
      });
    },

    updateModpackId(modpackId: string) {
      this.modpackId = modpackId;
      this.saveModpackId();
    },

    updateModpack(modpack: Modpack) {
      if (this.modpacks.has(modpack.id)) {
        const exists = this.modpacks.get(modpack.id);
        if (exists != undefined) {
          exists.name = modpack.name;
          exists.version = modpack.version;
          exists.gameVersion = modpack.gameVersion;
          exists.modLoader = modpack.modLoader;
        }
      }
      else {
        this.modpacks.set(modpack.id, modpack);
      }

      this.saveModpacks();
    },

    addMod(mod: Mod) {
      const modpack = this.modpacks.get(this.modpackId);
      if (modpack != undefined) {
        if (modpack.mods == undefined) {
          modpack.mods = [];
        }
        modpack.mods.push(mod);
      }
    }
  }
});
