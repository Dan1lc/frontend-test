<template>
  <div class="more-button">
    <button
      class="more-button__button"
      @click.stop="openMenu"
    >
      <span />
      <span />
      <span />
    </button>
    <ul
      v-if="isShowMenu"
      class="more-button__list"
      @click.stop
    >
      <li
        v-for="(item,k) in moreList"
        :key="k"
      >
        <BreadcrumbsLink
          class="more-button__link"
          :link="item.link"
          @click="closeMenu"
        >
          {{ item.name }}
        </BreadcrumbsLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import BreadcrumbsLink from '@components/AppHeader/BreadCrumbs/BreadcrumbsLink/BreadcrumbsLink';
import {  ref } from 'vue';

defineProps({
  moreList:{
    type: Array,
    default: () => [],
  },
});

const isShowMenu = ref(false);

const openMenu = () => {
  if (isShowMenu.value){
    closeMenu();
    return;
  }
  isShowMenu.value = true;
  document.addEventListener('click', closeMenu);
};

const closeMenu = () => {
  isShowMenu.value = false;
  document.removeEventListener('click', closeMenu);
};
</script>

<style lang="scss" src="./MoreButton.scss" scoped/>
