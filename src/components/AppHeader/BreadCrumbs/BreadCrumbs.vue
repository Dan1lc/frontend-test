<template>
  <ul class="bread-crumbs">
    <li
      v-for="(item,k) in breadcrumbsListFormatted"
      :key="k"
    >
      <MoreButton
        v-if="item.length"
        :more-list="item"
      />
      <BreadcrumbsLink
        v-else
        :link="item.link"
      >
        {{ item.name }}
      </BreadcrumbsLink>
      <span
        v-if="k !==breadcrumbsListFormatted.length-1"
        class="bread-crumbs__separator"
      >/</span>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MoreButton from '@components/AppHeader/BreadCrumbs/MoreButton/MoreButton';
import BreadcrumbsLink from '@components/AppHeader/BreadCrumbs/BreadcrumbsLink/BreadcrumbsLink';

const breadcrumbsList = ref([
  {
    link:'/',
    name: 'Входной контроль',
  },
  {
    link:'/',
    name: 'Краска БФ-500',
  },
  {
    link:'/',
    name: 'Страница для перехода',
  },
  {
    link:'/',
    name: 'Документ соответствия',
  },
  {
    name: 'Дополнительно',
  },
]);
const breadcrumbsListFormatted = ref([]);

const getFormattedList = () => {
  if (breadcrumbsList.value.length > 3){
    breadcrumbsListFormatted.value = [ breadcrumbsList.value[0], breadcrumbsList.value.slice(1, -2), ...breadcrumbsList.value.slice(-2) ];
    return;
  }
  breadcrumbsListFormatted.value = breadcrumbsList.value;
};

onMounted(getFormattedList);

</script>

<style lang="scss" src="./BreadCrumbs.scss" scoped/>
