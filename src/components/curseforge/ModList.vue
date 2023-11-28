<script setup lang="ts">
import ModView from './ModView.vue';
import Row from '../avc/Row.vue';
import Mod from '../../domains/Mod';

const props = defineProps<{
  mods: Mod[]
}>();
</script>

<template>
  <div>
    <row>模组列表：</row>
    <mod-view
      v-for="mod in mods"
      :key="mod.id"
      :mod="mod"
    />
  </div>
</template>

<style scoped lang="less">
</style>