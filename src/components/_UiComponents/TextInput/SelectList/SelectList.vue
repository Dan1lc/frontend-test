<template>
  <ul
    class="select-list"
    @click.stop
  >
    <li
      v-for="(item,k) in selectArray"
      :key="k"
      class="select-list__item"
    >
      <button
        class="select-list__button"
        @click="$emit('select-value', item)"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script setup>
defineEmits([ 'select-value' ]);

defineProps({
  selectArray: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" src="./SelectList.scss" scoped/>
