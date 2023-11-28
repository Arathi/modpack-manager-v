<script setup lang="ts">
import {onMounted, ref} from 'vue';
import ModpackManagerIcon from './ModpackManagerIcon.vue';
import ModpackManager from './ModpackManager.vue';
import SearchResults from './SearchResults.vue';
import {unsafeWindow} from '$';

const showModpackManager = ref(true);

onMounted(() => {
  const container: HTMLDivElement|null = unsafeWindow.document.querySelector(".results-container");
  if (container != null) {
    container.hidden = true;
  }
});
</script>

<template>
  <modpack-manager-icon @toggle="showModpackManager = !showModpackManager" />

  <transition>
    <modpack-manager v-show="showModpackManager" />
  </transition>

  <search-results />
</template>

<style scoped lang="less">
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-leave-to {
  opacity: 0;
}
</style>