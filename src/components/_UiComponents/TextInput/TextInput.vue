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
      :inputmode="number ? 'numeric' : 'text'"
      class="text-input__input"
      type="text"
      :disabled="readOnly || disabled"
      @mousedown.stop
      @focus="focusInput"
      @blur="blurInput"
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
    <SelectList
      v-if="isShowSelect"
      :select-array="selectArray"
      class="text-input__select"
      @select-value="selectValue"
      @blur="closeSelect"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import SelectList from '@ui/TextInput/SelectList/SelectList';

const emit = defineEmits([ 'update:modelValue', 'select-value' ]);

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
  select: {
    type: Boolean,
    default: () => false,
  },
  selectArray: {
    type: Array,
    default: () => [],
  },
  number: {
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
    emit('select-value', '');
  },
});

// Select scripts
const inputFocus = ref(false);
const isShowSelect = computed(() => {
  return props.selectArray.length && inputFocus.value;
});

const openSelect = () => {
  inputFocus.value = true;
  document.addEventListener('mousedown', closeSelect);
};

const closeSelect = () => {
  inputFocus.value = false;
  document.removeEventListener('mousedown', closeSelect);
};

const focusInput = () => {
  if (!props.select){
    return;
  }
  openSelect();
};

const blurInput = (e) => {
  if (!props.select){
    return;
  }
  if (e.relatedTarget && !e.relatedTarget?.classList.contains('select-list__button')){
    closeSelect();
  }
};

const selectValue = (value) => {
  inputModel.value = value.name;
  emit('select-value', value.selector);
  closeSelect();
};
</script>

<style lang="scss" src="./TextInput.scss" scoped/>
