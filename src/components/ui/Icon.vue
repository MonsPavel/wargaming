<script setup>
import { computed } from 'vue';

import menu from '../../assets/svg/menu.svg';
import arrow from '../../assets/svg/arrow.svg';

const props = defineProps({
  name: String,
});

const icons = {
  menu,
  arrow,
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
