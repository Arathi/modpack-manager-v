<script setup lang="ts">
import Row from './Row.vue';

interface Props {
  name: string;
  labelWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  labelWidth: "100px"
});
</script>

<template>
  <row class="avc-field">
    <div class="col-field">
      <label>{{ name }}</label>
    </div>
    <div class="col-value">
      <slot></slot>
    </div>
  </row>
</template>

<style scoped lang="less">
.avc-field {
  display: flex;
  flex-direction: row;

  justify-content: start;
  align-items: center;

  width: 100%;
  margin-bottom: 8px;

  .col-field {
    width: v-bind(labelWidth);
    user-select: none;
  }

  .col-value {
    flex: 1;
  }
}
</style>