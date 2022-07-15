<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  tags: {
    type: Array,
    default: () => ([]),
  },
});

const selectedTag = computed(() => props.tags.find((item) => item.selected));
const showList = ref(false);

const toggleTagList = () => showList.value = !showList.value;
</script>

<template>
  <div>
    <div class="tags">
      <div
          v-for="(tag, index) in tags"
          :key="`${index}-${tag.value}`"
          class="tags-item"
          :class="{selected: tag.selected}"
          @click="$emit('tag:selected', index)"
      >
        {{ tag.value }}
      </div>
    </div>
    <div class="tags-mobile">
      <div class="tags-mobile-selected" @click="toggleTagList">
        <Icon name="menu" class="menu-icon"/>
        <span>{{ selectedTag.value }}</span>
      </div>
      <div
          class="tags-list"
           v-show="showList"
      >
        <div
            v-for="(tag, index) in tags"
            :key="`${index}-${tag.value}`"
            class="tags-mobile-item"
            :class="{selected: tag.selected}"
            @click="$emit('tag:selected', index)"
        >
          <div>
            <Icon name="arrow" v-if="tag.selected"/>
            <span>{{ tag.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
