<script setup>
import { computed, ref } from 'vue';
import ChoicesList from '../ChoicesList.vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },
  selectedItems: {
    type: Array,
    default: () => ([]),
  },
});

const selectedArr = ref([ ...props.selectedItems ]);
const search = ref('');
const filter = ref({});
const filters = ref([
  { id: 1, label: 'Без фильтра', value: 0 },
  { id: 2, label: 'Номер >10', value: 10 },
  { id: 3, label: 'Номер >100', value: 100 },
  { id: 4, label: 'Номер >200', value: 200 },
]);

const emits = defineEmits([ 'item:checked', 'modal:close' ]);

const close = () => emits('modal:close');
const saveChecked = () => {
  emits('item:checked', selectedArr.value);
  close();
};
const setChecked = (checked, id) => {
  checked
    ? selectedArr.value.push(id)
    : selectedArr.value = selectedArr.value.filter((item) => item !== id);
};
const isChecked = (id) => !!selectedArr.value.find((item) => item === id);
const removeItem = (id) => selectedArr.value = selectedArr.value.filter((item) => item !== id);

const maxChoices = computed(() => selectedArr.value.length >= 3);
const noData = computed(() => !elements.value.length);
const elements = computed(() => {
  let items = [ ...props.items ];
  if (search.value) items = items.filter((item) => item.value.includes(search.value));
  if (filter.value?.id) items = items.filter((item, index) => index + 1 > filter.value?.value);
  return items;
});
</script>

<template>
  <ModalBase title="Диалог выбора элементов">
    <template v-slot:modal-content>
      <div class="filters">
        <div class="filters-search">
          <span class="filters-title">Поиск</span> <CustomInput v-model="search"/>
        </div>
        <div class="filters-filter">
          <span class="filters-title">Фильтр</span> <CustomSelect :options="filters" label-key="label" v-model="filter"/>
        </div>
      </div>
      <ChoicesList :list="selectedArr" @choice:remove="removeItem"/>
      <div class="elements">
        <div v-for="item in elements" class="filters-elements">
          <CustomCheckbox
              :checked="isChecked(item.id)"
              :label="item.value"
              :disabled="maxChoices && !selectedArr.includes(item.id)"
              @checked="(checked) => setChecked(checked, item.id)"
          />
        </div>
      </div>
      <div v-if="noData">Нет данных</div>
    </template>

    <template v-slot:modal-footer>
      <CustomButton class="modal__footer-item" label="Отмена" @click="close"/>
      <CustomButton class="modal__footer-item" label="Сохранить" @click="saveChecked"/>
    </template>
  </ModalBase>
</template>

<style scoped>

</style>
