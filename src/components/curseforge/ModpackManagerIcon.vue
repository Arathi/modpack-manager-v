<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 32,
});

const emit = defineEmits<{
  (e: "toggle"): void
}>();

const sizePx = computed(() => `${props.size}px`);
const radiusPx = computed(() => `${props.size/2}px`);
const insetParams = computed(() => {
  const params: string[] = [];
  params.push("0");
  params.push("0");
  params.push("0");
  params.push("0");
  params.push("round");
  params.push(radiusPx.value);
  params.push(radiusPx.value);
  params.push("3px");
  params.push(radiusPx.value);
  return params.join(" ");
});
</script>

<template>
  <div class="modpack-manager-icon" @click="() => emit('toggle')">
    <span>M</span>
  </div>
</template>

<style scoped lang="less">
.modpack-manager-icon {
  position: fixed;
  top: 80px;
  left: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: blue;
  color: white;
  width: v-bind(sizePx);
  height: v-bind(sizePx);

  clip-path: inset(v-bind(insetParams));
}
</style>
