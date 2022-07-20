<script setup>
import { computed, ref } from 'vue';
import TagsList from '../ui/TagsList.vue';

const list = [ 'World Of Tanks', 'World Of Warplanes', 'World Of Warships' ];

const selected = ref(0);

const tags = computed(() => list.map((item, index) => ({ value: item, selected: selected.value === index })));
const setSelected = (index) => selected.value = index;
</script>

<template>
  <div>
    <TagsList
        :selected="selected"
        :tags="tags"
        @tag:selected="setSelected"
    />
  </div>
</template>

<style scoped>

</style>
