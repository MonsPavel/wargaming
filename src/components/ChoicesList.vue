<script setup>
import { computed } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => ([]),
  },
  showCount: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits([ 'choice:remove' ]);

const removeItem = (id) => emits('choice:remove', id);

const elementsCount = computed(() => props.list.length);
</script>

<template>
  <div class="choices">
    <div v-if="showCount">Выбрано элементов {{ elementsCount }} из 3</div>
    <div class="choices-item-wrap">
      <div v-for="item in list" class="choices-item">
        {{ `Элемент ${item}` }} <CustomButton icon-name="close" @click="removeItem(item)" appearance="link"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
