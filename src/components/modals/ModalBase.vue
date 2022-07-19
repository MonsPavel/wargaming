<script setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
});
const emits = defineEmits([ 'close' ]);

const closeModal = () => emits('close');
</script>

<template>
  <transition name="modal-animation">
    <div class="modal">
      <transition name="modal-animation-inner">
        <div class="modal__inner">
          <div>
            <div class="modal__header">
              <h2 class="modal__title">
                {{ title }}
              </h2>
              <a type="button" class="modal__close" @click="closeModal">
                <Icon name="close"/>
              </a>
            </div>
            <div class="modal__content">
              <slot name="modal-content"></slot>
            </div>
            <div class="modal__footer">
              <slot name="modal-footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
