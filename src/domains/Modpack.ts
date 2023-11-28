import Mod from "./Mod";

export default interface Modpack {
  id: string;
  name: string;
  version: string;
  gameVersion: string;
  modLoader: string;
  mods: Mod[];
}