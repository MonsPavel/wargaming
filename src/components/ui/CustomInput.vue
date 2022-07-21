<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
});
const emits = defineEmits([ 'update:modelValue' ]);
const updateValue = (value) => emits('update:modelValue', value);
</script>

<template>
  <div class="custom-input">
    <input
      class="custom-input__input"
      v-bind="$attrs"
      :type="type"
      :value="$attrs.value || modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>
