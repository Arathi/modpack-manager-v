<script setup lang="ts">
import {onMounted, onUnmounted, provide, ref} from 'vue';
import ModpackManagerIcon from './ModpackManagerIcon.vue';
import ModpackManager from './ModpackManager.vue';
import SearchResults from './SearchResults.vue';
import NextData from '../../clients/curseforge/messages/NextData';
import CurseForgeClient from '../../clients/curseforge/CurseForgeClient';
import {useCurseForgeStore} from '../../stores/CurseForgeStore';
import {GM, unsafeWindow} from '$';

const showModpackManager = ref(true);

const store = useCurseForgeStore();

const client = new CurseForgeClient();
provide("curseForgeClient", client);

const timer = ref<number>();

function hideResultsContainer() {
  const container: HTMLDivElement|null = unsafeWindow.document.querySelector(".results-container");
  if (container != null) {
    container.hidden = true;
  }
}

function mainLoop() {
  // 隐藏搜索结果
  hideResultsContainer();

  // 更新当前URL
  store.updateHref();
}

onMounted(() => {
  const nextDataScript: HTMLScriptElement | null = document.querySelector("#__NEXT_DATA__");
  if (nextDataScript != null) {
    const nextData = JSON.parse(nextDataScript.innerText) as NextData;

    const modLoaders = nextData.props.pageProps.gameFlavor.items;
    for (const modLoader of modLoaders) {
      store.addModLoader(modLoader.id, modLoader.name);
    }

    const gameVersions = nextData.props.pageProps.gameVersions;
    for (const gameVersion of gameVersions) {
      store.addGameVersion(gameVersion.id, gameVersion.version);
    }
  }

  timer.value = setInterval(mainLoop, 10);
  console.info(`创建定时任务${timer.value}`);
});

onUnmounted(() => {
  if (timer.value != undefined) {
    console.warn(`清除定时任务${timer.value}`);
    clearInterval(timer.value);
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