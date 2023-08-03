<template>
  <button
    class="tabs-button"
    :class="classes"
    :disabled="disabled || active"
  >
    <slot />
    <span
      v-if="disabled && hintText"
      class="tabs-button__hint"
    >{{ hintText }}</span>
  </button>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
  active:{
    type: Boolean,
    default: () => false,
  },
  hintText:{
    type: String,
    default: () => '',
  },
  disabled:{
    type: Boolean,
    default: () => false,
  },
});

const classes = computed(() => ({
  'tabs-button--active':props.active,
  'tabs-button--disabled':props.disabled,
}));
</script>

<style lang="scss" src="./TabsButton.scss" scoped/>
