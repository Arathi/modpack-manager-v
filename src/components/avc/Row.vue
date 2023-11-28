<script setup lang="ts">
type JustifyContent = "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
type AlignItems = "start" | "end" | "center" | "normal" | "stretch";

interface Props {
  justify?: JustifyContent;
  align?: AlignItems;
}

const props = withDefaults(defineProps<Props>(), {
  justify: "start",
  align: "start",
});
</script>

<template>
  <div class="avc-row">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.avc-row {
  display: flex;
  flex: row;
  justify-content: v-bind(justify);
  align-items: v-bind(align);
}
</style>
