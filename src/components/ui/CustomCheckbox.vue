<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
});

const emits = defineEmits([ 'checked' ]);
const setChecked = () => emits('checked', !props.checked);
</script>

<template>
  <label
    :class="{ 'custom-checkbox__checked': checked }"
    class="custom-checkbox"
  >
    <input
      v-bind="$attrs"
      :checked="checked"
      @click.stop="setChecked"
      class="custom-checkbox__input"
      type="checkbox"
    />
    <span class="custom-checkbox__status"/>
    <span
      v-if="label"
      class="custom-checkbox__label-title"
    >
      {{ label }}
    </span>
  </label>
</template>
