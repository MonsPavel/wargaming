<script setup>
import { computed, ref } from 'vue';
import ArticleTask from './components/tasks/ArticleTask.vue';
import ListTask from './components/tasks/ListTask.vue';
import SearchTask from './components/tasks/SearchTask.vue';
import WidgetTask from './components/tasks/WidgetTask.vue';
import { tasks } from './constants/tasks';

const step = ref(1);
const tasksList = ref(tasks);

const setStep = (task) => step.value = task;

const component = computed(() => {
  switch (step.value) {
    case 1:
      return SearchTask;
    case 2:
      return ListTask;
    case 3:
      return ArticleTask;
    case 4:
      return WidgetTask;
    default:
      return ArticleTask;
  }
});
</script>

<template>
  <div>
    <div class="main">
      <component :is="component"/>
    </div>
    <div class="tasks-links">
      <div v-for="task in tasksList" class="tasks-links-item">
        <CustomButton :label="task.name" @click="setStep(task.step)" :class="{ active: task.step === step }"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
