<script setup>
import { computed, useAttrs } from 'vue';

const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'button',
  },
  appearance: {
    type: String,
    default: 'simple',
  },
  iconName: {
    type: String,
    default: '',
  },
});

const attrs = useAttrs();

const className = computed(() => [
  'custom-button',
  {
    'custom-button--blue': props.appearance === 'blue',
    'custom-button--link': props.appearance === 'link',
    'custom-button--disabled': attrs.disabled,
    'custom-button--simple-red': props.appearance === 'simple-red',
  },
]);
</script>

<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="className"
  >
    <Icon
      v-if="iconName"
      class="custom-button__icon"
      :name="iconName" />
    <slot>{{ label }}</slot>
  </button>
</template>
