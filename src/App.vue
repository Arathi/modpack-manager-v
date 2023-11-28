<script setup lang="ts">
import {unsafeWindow} from '$';
import {computed} from 'vue';
import CurseForge from './components/curseforge/CurseForgeInject.vue';
import Modrinth from './components/modrinth/ModrinthInject.vue';

const href = unsafeWindow.location.href;
const url = new URL(href);
const inCurseForge = computed(() => url.host == "www.curseforge.com");
const inModrinth = computed(() => url.host == "modrinth.com");
</script>

<template>
  <curse-forge v-if="inCurseForge" />
  <modrinth v-if="inModrinth" />
</template>

<style scoped lang="less">
</style>
