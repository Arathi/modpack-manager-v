<script setup lang="ts">
import {ref, computed} from 'vue';

export interface SelectDropdownItem {
  value: number|string;
  text: string;
}

const props = withDefaults(defineProps<{
  name: string;
  items: SelectDropdownItem[];
  modelValue: number|string;
  labelWidth?: number;
}>(), {
  labelWidth: 115,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number|string): void
}>();

const open = ref(false);

const dropdownClassNames = computed(() => {
  const classNames: string[] = ["dropdown"];
  if (open.value) {
    classNames.push("is-open");
  }
  return classNames.join(" ");
});

const selectedItem = computed(() => props.items.find((item) => item.value === props.modelValue));
const labelWidthPx = computed(() => `${props.labelWidth}px`);
</script>

<script lang="ts">
</script>

<template>
  <div class="select-dropdown">
    <span class="label">{{ name }}</span>
    <div :class="dropdownClassNames" @click="open = !open">
      <p class="dropdown-selected-item">
        <span>{{selectedItem?.text}}</span>
        <svg><use href="/images/sprite.svg#arrow"></use></svg>
      </p>
      <div class="dropdown-list-wrapper">
        <ul class="dropdown-list">
          <li v-for="item in items"
            :key="item.value"
            :class="item.value === modelValue ? 'is-active' : ''"
            @click="() => emit('update:modelValue', item.value)"
          >
            {{item.text}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.select-dropdown {
  width: 100%;
  margin-bottom: 8px;

  .label {
    width: v-bind(labelWidthPx);
    user-select: none;
  }
}
</style>