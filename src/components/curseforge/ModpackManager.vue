<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import Row from '../avc/Row.vue';
import ModpackEditor from './ModpackEditor.vue';
import SelectDropdown, {SelectDropdownItem} from './SelectDropdown.vue';
import ModList from './ModList.vue';
import Modpack from '../../domains/Modpack';
import {useManagerStore} from '../../stores/ManagerStore';

const managerStore = useManagerStore();

const showModpackEditor = ref(true);

onMounted(async () => {
  await managerStore.load();
  const amount = managerStore.modpacks.length;
  if (amount > 0) {
    showModpackEditor.value = false;
  }
});

const modpackItems = computed(() => {
  const items: SelectDropdownItem[] = [];
  managerStore.modpacks.forEach((mp) => items.push({
    value: mp.id,
    text: mp.name,
  } as SelectDropdownItem));
  return items;
});

const modpackId = computed<string>({
  get() {
    return managerStore.modpackId;
  },
  set(value) {
    managerStore.updateModpackId(value);
  },
});

const mods = computed(() => {
  if (managerStore.modpack == undefined) {
    return [];
  }
  return managerStore.modpack.mods;
});

function saveModpack(modpack: Modpack) {
  console.debug(`正在保存Modpack：`, modpack);
  managerStore.updateModpack(modpack);
  managerStore.updateModpackId(modpack.id);
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
        :items="modpackItems"
        v-model="modpackId"
      />
      <row class="row-details" justify="center" v-if="managerStore.modpack != undefined">
        <ul class="details-list">
          <li class="detail-game-version">{{ managerStore.modpack.gameVersion }}</li>
          <li class="detail-flavor">{{ managerStore.modpack.modLoader }}</li>
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
