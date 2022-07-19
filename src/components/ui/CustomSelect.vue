<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
  placeholder: {
    type: String,
    default: '',
  },
  labelKey: {
    type: String,
  },
  modelValue: Object,
});

const emits = defineEmits([ 'update:modelValue', 'set:selected' ]);

const open = ref(false);
const selected = computed(() => {
  const index = props.options.findIndex((item) => item[ props.labelKey ] === props.modelValue?.[ props.labelKey ]);
  return props.options[ index ];
});

const selectedText = computed(() => {
  if (props.labelKey && selected.value) return selected.value[ props.labelKey ];
  if (selected.value) return selected;
  return props.placeholder;
});

function selectOption(option) {
  if (option.disabled) return;
  open.value = false;
  emits('update:modelValue', option);
  emits('set:selected', option);
}
</script>

<template>
  <div
    class="select"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="select__selected"
      :class="{ 'select__selected--opened': open, 'select__selected--placeholder': !selected }"
      @click="open = !open"
    >
      {{ selectedText }}
    </div>
    <div
      v-if="options.length"
      class="select__items"
      :class="{ 'select__items--hidden': !open }"
    >
      <div
        class="select__item"
        v-for="(option, i) of options"
        :class="{ 'select__item--disabled': option.disabled }"
        :key="i"
        @click="selectOption(option)"
      >
        {{ option[labelKey] || option }}
      </div>
    </div>
    <div
      v-else
      class="select__items"
      :class="{ 'select__items--hidden': !open }"
    >
      <div class="select__items--empty">
        Нет данных
      </div>
    </div>
  </div>
</template>
