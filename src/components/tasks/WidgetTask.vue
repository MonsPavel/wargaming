<script setup>
import { computed, ref } from 'vue';
import { getItems } from '../../helpers/getItems';
import ChoiceModal from '../modals/ChoiceModal.vue';
import ChoicesList from '../ChoicesList.vue';

const items = ref(getItems() || []);
const selectedItems = ref([]);
const showModal = ref(false);

const elements = computed(() => items.value.map((item, index) => ({ ...item, checked: selectedItems.value[ index ] === index })));

const openChoiceModal = () => showModal.value = true;
const setChecked = (item) => selectedItems.value = item;
const removeItem = (id) => selectedItems.value = selectedItems.value.filter((item) => item !== id);
</script>

<template>
  <div>
    <ChoicesList :list="selectedItems" @choice:remove="removeItem" show-count/>
    <button @click="openChoiceModal">
      Изменить мой выбор
    </button>
    <ChoiceModal
        v-if="showModal"
        :items="elements"
        :selected-items="selectedItems"
        @item:checked="setChecked"
        @modal:close="showModal = false"
    />
  </div>
</template>

<style scoped>

</style>
