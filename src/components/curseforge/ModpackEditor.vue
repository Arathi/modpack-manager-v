<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import Field from '../avc/Field.vue';
import Row from '../avc/Row.vue';
import SelectDropdown from './SelectDropdown.vue';
import {useModpackStore} from '../../stores/ModpackStore';
import {useSettingStore} from '../../stores/SettingStore';
import {storeToRefs} from 'pinia';
import Modpack from '../../domains/Modpack';

interface Props {
  modpackId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modpackId: undefined,
});

const emit = defineEmits<{
  (e: "save", modpack: Modpack): void,
  (e: "close"): void,
}>();

const settingStore = useSettingStore();
const {gameVersionOptions, modLoaderOptions} = storeToRefs(settingStore);

const modpackStore = useModpackStore();

const id = ref<string>("");
const name = ref<string>("");
const version = ref<string>("");
const gameVersion = ref<string>("");
const modLoader = ref<string>("");

const idEditable = ref(true);

const modpack = computed(() => ({
  id: id.value,
  name: name.value,
  version: version.value,
  gameVersion: gameVersion.value,
  modLoader: modLoader.value,
} as Modpack));

onMounted(() => {
  if (props.modpackId != undefined) {
    id.value = props.modpackId;
    const mp = modpackStore.modpacks.get(id.value);
    if (mp != undefined) {
      idEditable.value = false;
      name.value = mp.name;
      version.value = mp.version;
      gameVersion.value = mp.gameVersion;
      modLoader.value = mp.modLoader;
      return;
    }
  }

  idEditable.value = true;
  const timestamp = (new Date()).valueOf();
  id.value = `mp-${timestamp}`;
  name.value = `整合包-${timestamp}`;
  version.value = "0.1.0";
  gameVersion.value = "1.20.1";
  modLoader.value = "forge";
});
</script>

<template>
  <div class="modpack-editor">
    <field name="ID：">
      <input v-model="id" :disabled="!idEditable" />
    </field>
    
    <field name="名称：">
      <input v-model="name" />
    </field>
    
    <field name="版本：">
      <input v-model="version" />
    </field>
    
    <select-dropdown
      name="游戏版本："
      :options="gameVersionOptions"
      v-model="gameVersion"
    />
    
    <select-dropdown
      name="加载器："
      :options="modLoaderOptions"
      v-model="modLoader"
    />

    <row class="row-buttons" justify="space-around">
      <a class="link-btn btn-primary link-btn-icon" @click="() => emit('save', modpack)">保存</a>
      <a class="link-btn btn-primary link-btn-icon" @click="() => emit('close')">关闭</a>
    </row>
  </div>
</template>

<style scoped lang="less">
.modpack-editor {
  display: flex;
  flex-direction: column;
}
</style>