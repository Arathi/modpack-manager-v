<script setup lang="ts">
import Mod from '../../domains/Mod';
import Metadata from '../../domains/ModMetadata';
import {computed, onMounted, ref} from 'vue';

const props = withDefaults(defineProps<{
  mod: Mod
}>(), {
});

const metadata = ref<Metadata>();
const showButtons = ref(false);

onMounted(() => {
  metadata.value = {
    source: "curseforge",
    slug: "jei",
    name: "Just Enough Items (JEI)",
    iconURL: "https://media.forgecdn.net/avatars/29/69/635838945588716414.jpeg",
  } as Metadata;
});

const id = computed(() => props.mod.id);

const iconURL = computed(() => {
  if (metadata.value == undefined) return undefined;
  return metadata.value.iconURL;
});

const name = computed(() => metadata.value?.name);
const slug = computed(() => props.mod.slug);

const buttonsDisplay = computed(() => {
  if (showButtons.value) return "flex";
  return "none";
});
</script>

<template>
  <div class="mod-view"
       @mouseenter="showButtons = true"
       @mouseleave="showButtons = false"
  >
    <div class="mod-icon">
      <img
        :src="iconURL"
        :width="40"
        :height="40"
        :alt="id"
      />
    </div>
    <div class="mod-info">
      <div class="name">
        {{name}}
      </div>
      <div class="slug">
        @{{slug}}
      </div>
      <div class="buttons">
        <a class="link-btn btn-primary link-btn-icon">下载</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@height: 48px;

.mod-view {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: @height;

  background-color: #1A1A1A;
  margin-top: 4px;
  margin-bottom: 4px;

  .mod-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: @height;
    height: @height;
  }

  .mod-info {
    display: flex;
    flex-direction: column;

    flex: 1;

    position: relative;

    .name {
      color: white;
    }
    .slug {
      color: gray;
    }

    .buttons {
      position: absolute;
      right: 6px;
      top: 0;
      height: @height;

      display: v-bind(buttonsDisplay);
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>