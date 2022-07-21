<script setup>
import { computed } from 'vue';

import menu from '../../assets/svg/menu.svg';
import arrow from '../../assets/svg/arrow.svg';
import find from '../../assets/svg/find.svg';
import cancel from '../../assets/svg/cancel.svg';
import close from '../../assets/svg/close.svg';

const props = defineProps({
  name: String,
});

const icons = {
  menu,
  arrow,
  find,
  cancel,
  close,
};

const iconToShow = computed(() => icons[ props.name ]);
</script>

<template>
  <component :is="iconToShow" v-bind="$attrs" class="icon" />
</template>

<style lang="scss">
  .icon path {
    fill: currentColor;
  }
</style>
