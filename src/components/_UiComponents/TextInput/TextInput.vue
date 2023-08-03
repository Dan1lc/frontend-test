<template>
  <div
    class="text-input"
    :class="classes"
  >
    <p class="text-input__placeholder">
      {{ placeholder }}
    </p>
    <input
      v-model.trim="inputModel"
      class="text-input__input"
      type="text"
      :disabled="readOnly || disabled"
    >
    <p
      v-if="!isError && isHint"
      class="text-input__hint"
    >
      {{ hint }}
    </p>
    <p
      v-if="isError"
      class="text-input__error"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits([ 'update:modelValue' ]);

const props = defineProps({
  value: {
    type: String,
    default: () => '',
  },
  modelValue: {
    type: String,
    default: () => '',
  },
  placeholder: {
    type: String,
    default: () => '',
  },
  hint: {
    type: String,
    default: () => '',
  },
  isHint: {
    type: Boolean,
    default: () => false,
  },
  errorText: {
    type: String,
    default: () => '',
  },
  isError: {
    type: Boolean,
    default: () => false,
  },
  readOnly: {
    type: Boolean,
    default: () => false,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
});

const classes = computed(() => ({
  'text-input--is-error': props.isError,
  'text-input--read-only': props.readOnly,
  'text-input--disabled': props.disabled,
}));

const inputModel = computed({
  get(){
    return props.modelValue || props.value;
  },
  set(value){
    emit('update:modelValue', value);
  },
});
</script>

<style lang="scss" src="./TextInput.scss" scoped/>
