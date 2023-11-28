<script setup lang="ts">
import {computed, onBeforeMount, onMounted, ref} from 'vue';
import Row from '../avc/Row.vue';
import ModpackEditor from './ModpackEditor.vue';
import SelectDropdown from './SelectDropdown.vue';
import ModList from './ModList.vue';
import Modpack from '../../domains/Modpack';
import {useModpackStore} from '../../stores/ModpackStore';

const modpackStore = useModpackStore();

const showModpackEditor = ref(true);

onMounted(async () => {
  await modpackStore.load();
  const amount = modpackStore.modpacks.size;
  if (amount > 0) {
    showModpackEditor.value = false;
  }
});

const modpackOptions = computed(() => modpackStore.modpackOptions);

const modpackId = computed<string>({
  get() {
    return modpackStore.modpackId;
  },
  set(value) {
    modpackStore.updateModpackId(value);
  },
});

const modpack = computed(() => {
  if (modpackId.value != undefined) {
    return undefined;
  }
  return modpackStore.modpacks.get(modpackId.value!);
});

const mods = computed(() => {
  if (modpackId.value == undefined) {
    return [];
  }
  // return modpack.value.mods;
  return [
    {
      id: "jei",
      source: "curseforge",
      slug: "jei",
      version: undefined,
    }
  ];
});

function saveModpack(modpack: Modpack) {
  console.debug(`正在保存Modpack：`, modpack);
  modpackStore.updateModpack(modpack);
  modpackStore.updateModpackId(modpack.id);
  showModpackEditor.value = false;
}

function closeModpackEditor() {
  showModpackEditor.value = false;
}

function createModpack() {
  showModpackEditor.value = true;
  modpackId.value = "";
}

function editModpack() {
  showModpackEditor.value = true;
}

function deleteModpack() {

}

function onSettingClick() {

}
</script>

<template>
  <div class="modpack-manager">
    <div class="modpack-selector" v-show="!showModpackEditor">
      <select-dropdown
        name="整合包："
        :options="modpackOptions"
        v-model="modpackId"
      />
      <row class="row-details" justify="center" v-if="modpack != undefined">
        <ul class="details-list">
          <li class="detail-game-version">{{ modpack.gameVersion }}</li>
          <li class="detail-flavor">{{ modpack.modLoader }}</li>
        </ul>
      </row>
      <row class="row-buttons" justify="space-around">
        <a class="link-btn btn-primary link-btn-icon" @click="createModpack">添加</a>
        <a class="link-btn btn-primary link-btn-icon" @click="editModpack">编辑</a>
        <a class="link-btn btn-primary link-btn-icon" @click="deleteModpack" v-show="false">删除</a>
        <a class="link-btn btn-primary link-btn-icon" @click="onSettingClick">设置</a>
      </row>
    </div>

    <modpack-editor
      v-if="showModpackEditor"
      :modpack-id="modpackId"
      @save="saveModpack" 
      @close="closeModpackEditor"
    />

    <mod-list
      v-if="!showModpackEditor"
      :mods="mods"
    />
  </div>
</template>

<style scoped lang="less">
.modpack-manager {
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 10px;
  top: 120px;
  width: 400px;
  height: 80%;

  background-color: #0D0D0D;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;

  padding: 8px;

  .row-buttons {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>
