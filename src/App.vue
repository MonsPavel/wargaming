<script setup>
import { computed, ref } from 'vue';
import ArticleTask from './components/tasks/ArticleTask.vue';
import ListTask from './components/tasks/ListTask.vue';
import SearchTask from './components/tasks/SearchTask.vue';
import WidgetTask from './components/tasks/WidgetTask.vue';

const step = ref(1);

const component = computed(() => {
  switch (step.value) {
    case 1:
      return ArticleTask;
    case 2:
      return ListTask;
    case 3:
      return SearchTask;
    case 4:
      return WidgetTask;
    default:
      return ArticleTask;
  }
});
</script>

<template>
  <div>
    <component :is="component"/>
  </div>
</template>

<style scoped>

</style>
