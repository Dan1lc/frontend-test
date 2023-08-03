<template>
  <button
    class="ui-button"
    :class="classes"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  secondary: {
    type: Boolean,
    default: () => false,
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
});

const classes = computed(() => ({
  'ui-button--secondary':props.secondary,
}));
</script>

<style lang="scss" src="./UiButton.scss" scoped/>
