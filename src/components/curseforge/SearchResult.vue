<script setup lang="ts">
import {computed, inject, onMounted, ref} from 'vue';
import dayjs from 'dayjs';

import {useManagerStore} from '../../stores/ManagerStore';
import {useCurseForgeStore} from '../../stores/CurseForgeStore';
import CurseForgeClient, {ModFilesParams} from '../../clients/curseforge/CurseForgeClient';

import CFMod from '../../clients/curseforge/messages/Mod';
import CFFile from '../../clients/curseforge/messages/File';

const GameVersionRegex = /^(\d+)\.(\d+)(\.(\d+))?$/;
const DateTimeFormat = 'YYYY-MM-DD';
const FilesBaseURL = "https://mediafilez.forgecdn.net/files";

const client: CurseForgeClient | undefined = inject("curseForgeClient");

const props = defineProps<{
  mod: CFMod
}>();

const mgrStore = useManagerStore();
const cfStore = useCurseForgeStore();

const files = ref<CFFile[]>();
const loaded = ref(false);

onMounted(() => {
  if (client == undefined) {
    console.warn(`CurseForge客户端注入失败，无法渲染${props.mod.id}`);
    return;
  }

  const modId = props.mod.id;
  const conditions = cfStore.conditions;

  const params = new ModFilesParams();
  params.gameVersion = conditions.gameVersion;
  params.modLoader = undefined;

  const modLoaders = conditions.modLoaderList;
  if (modLoaders.length > 0) {
    const modLoaderIdStr = modLoaders[0];
    params.modLoader = Number(modLoaderIdStr);
  }

  client.modFiles(modId, params).then((fs) => {
    files.value = fs;
    loaded.value = true;
  });
});

const mainFile = computed(() => {
  if (files.value != undefined) {
    if (files.value.length > 0) {
      return files.value[0];
    }
  }
  return undefined;
});

const downloadURL = computed(() => {
  if (mainFile.value == undefined) return "";

  const fileId = mainFile.value.id;
  const fileIdHigh = Math.floor(fileId / 1000);
  const fileIdLow = fileId % 1000;
  const fileName = mainFile.value.fileName;
  return `${FilesBaseURL}/${fileIdHigh}/${fileIdLow}/${fileName}`;
})

const iconURL = computed(() => props.mod.avatarUrl);

const projectURL = computed(() => {
  const game = "minecraft"; // TODO
  const className = "mc-mods"; // TODO
  const slug = props.mod.slug;
  return `/${game}/${className}/${slug}`;
});

const projectName = computed(() => props.mod.name);

const authorURL = computed(() => {
  const username = props.mod.author.username;
  return `/members/${username}`;
});

const authorName = computed(() => props.mod.author.name);

const description = computed(() => props.mod.summary);

const downloads = computed(() => {
  return `${mainFile.value?.totalDownloads}`;
});

const createdAt = computed(() => {
  return dayjs(props.mod.creationDate*1000).format(DateTimeFormat);
});

const updatedAt = computed(() => {
  return dayjs(props.mod.updateDate*1000).format(DateTimeFormat);
});

const fileSize = computed(() => {
  return `${mainFile.value?.fileLength}`;
});

const gameVersion = computed<string|undefined>(() => {
  let version = undefined;
  mainFile.value?.gameVersions.forEach((gv) => {
    const matcher = GameVersionRegex.exec(gv);
    if (matcher != null) {
      version = matcher[0];
    }
  });
  return version;
});

const modLoader = computed(() => {
  let loader = undefined;
  mainFile.value?.gameVersions.forEach((gv) => {
    switch (gv) {
      case "Forge":
        loader = gv;
        break;
      case "Fabric":
        loader = gv;
        break;
      case "Quilt":
        loader = gv;
        break;
      case "NeoForge":
        loader = gv;
        break;
    }
  });
  return loader;
});

const categories = computed(() => props.mod.categories.map((cat) => cat.name));

function addToModList() {
  const version = mainFile.value?.id;

  mgrStore.addMod({
    id: `${props.mod.id}`,
    source: "curseforge",
    slug: props.mod.slug,
    version: version != undefined ? `${version}` : undefined,
  });
}

const classNames = computed(() => {
  const classNames: string[] = ["project-card"];
  if (loaded) {
    classNames.push("loaded");
  }
  return classNames.join(" ");
});
</script>

<template>
  <div :class="classNames">
    <div class="art">
      <img
        :alt="`${projectName} project avatar`"
        :src="iconURL"
        width="108" height="108"
        decoding="async"
        data-nimg="future"
        loading="lazy"
        style="color:transparent"
      >
    </div>

    <a class="name" :href="projectURL">
      <span class="ellipsis">{{projectName}}</span>
    </a>

    <span class="author">
      <div class="by-author-link">By
        <a class="author-name" :href="authorURL">
          <span class="ellipsis">{{authorName}}</span>
        </a>
      </div>
    </span>

    <div class="actions-container">
      <button class=" action-button btn-cta opacity install-cta" @click="addToModList">
        <svg class="smaller-icon"><use href="/images/sprite.svg#icon-plus"></use></svg>
      </button>
      <a class="action-button btn-cta opacity download-cta" :href="downloadURL">
        <svg class="smaller-icon"><use href="/images/sprite.svg#icon-download"></use></svg>
      </a>
    </div>

    <p class="description">{{description}}</p>

    <ul class="details-list">
      <li class="detail-downloads">{{downloads}}</li>
      <li class="detail-updated"><span>{{updatedAt}}</span></li>
      <li class="detail-created"><span>{{createdAt}}</span></li>
      <li class="detail-size">{{fileSize}}</li>
      <li class="detail-game-version">{{gameVersion}}</li>
      <li class="detail-flavor">{{modLoader}}</li>
    </ul>

    <ul class="categories">
      <li><a class="class-tag">Mods</a></li>
      <li v-for="category in categories">
        <a>{{category}}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.loaded {
  background: linear-gradient(to right, #212121, #212121, #212121, #2f2f2f);
}
</style>