<script setup lang="ts">
import {ref, computed} from 'vue';

const props = withDefaults(defineProps<{
  name: string;
  options: any;
  modelValue: string;
  labelWidth?: string;
}>(), {
  labelWidth: "115px",
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const open = ref(false);

const dropdownClassNames = computed(() => {
  const classNames: string[] = ["dropdown"];
  if (open.value) {
    classNames.push("is-open");
  }
  return classNames.join(" ");
});

const selectedText = computed(() => {
  if (props.modelValue == undefined) return "";
  return props.options[props.modelValue];
});
</script>

<template>
  <div class="select-dropdown">
    <span class="label">{{ name }}</span>
    <div :class="dropdownClassNames" @click="open = !open">
      <p class="dropdown-selected-item">
        <span>{{ selectedText }}</span>
        <svg><use href="/images/sprite.svg#arrow"></use></svg>
      </p>
      <div class="dropdown-list-wrapper">
        <ul class="dropdown-list">
          <li v-for="key in Object.keys(options)"
            :key="key"
            :class="key == modelValue ? 'is-active' : ''"
            @click="() => emit('update:modelValue', key)"
          >
            {{ options[key] }}
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
    width: v-bind(labelWidth);
    user-select: none;
  }
}

</style>