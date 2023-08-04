<template>
  <ul
    class="select-list"
    @mousedown.stop
  >
    <li
      v-for="(item,k) in selectArray"
      :key="k"
      class="select-list__item"
    >
      <button
        class="select-list__button"
        @click="$emit('select-value', item)"
        @blur="blurButton"
      >
        {{ item.name }}
      </button>
    </li>
  </ul>
</template>

<script setup>
const emit = defineEmits([ 'select-value', 'blur' ]);

defineProps({
  selectArray: {
    type: Array,
    default: () => [],
  },
});

const blurButton = (e) => {
  if (e.relatedTarget && !e.relatedTarget?.classList.contains('select-list__button')){
    emit('blur');
  }
};
</script>

<style lang="scss" src="./SelectList.scss" scoped/>
