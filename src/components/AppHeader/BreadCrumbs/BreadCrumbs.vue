<template>
  <ul class="bread-crumbs">
    <li
      v-for="(item,k) in breadcrumbsDataFormatted"
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
        v-if="k !==breadcrumbsDataFormatted.length-1"
        class="bread-crumbs__separator"
      >/</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import MoreButton from '@components/AppHeader/BreadCrumbs/MoreButton/MoreButton';
import BreadcrumbsLink from '@components/AppHeader/BreadCrumbs/BreadcrumbsLink/BreadcrumbsLink';

const props = defineProps({
  breadcrumbsData: {
    type: Array,
    default: () => [],
  },
});


const breadcrumbsDataFormatted = computed(() => {
  if (props.breadcrumbsData.length > 3) {
    return [ props.breadcrumbsData[0], props.breadcrumbsData.slice(1, -2), ...props.breadcrumbsData.slice(-2) ];
  }
  return props.breadcrumbsData;
});


</script>

<style lang="scss" src="./BreadCrumbs.scss" scoped/>
