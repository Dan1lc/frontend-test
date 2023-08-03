<template>
  <div
    v-if="activeTab === title"
    class="tabs-item"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
  title: {
    type: String,
    default: () => '',
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

const activeTab = inject('activeTab');
</script>
