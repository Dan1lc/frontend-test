<template>
  <component
    :is="component"
    :to="link"
    class="breadcrumbs-link"
    :class="{'breadcrumbs-link--underline':link}"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  link: {
    type: String,
    default: () => '',
  },
});

const component = computed(() => {
  if (props.link) return 'router-link';
  return 'span';
});
</script>

<style lang="scss" src="./BreadcrumbsLink.scss" scoped/>
