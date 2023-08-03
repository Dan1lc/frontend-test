<template>
  <div class="main-page">
    <ContainerTemplate>
      <div class="main-page__inner">
        main-page
      </div>
    </ContainerTemplate>
  </div>
</template>

<script setup>
import ContainerTemplate from '@templates/ContainerTemplate/ContainerTemplate';
import { onMounted } from 'vue';
import useBreadcrumbs from '@hooks/useBreadcrumbs';
const { setBreadcrumbsData } = useBreadcrumbs();

onMounted(() => {
  setBreadcrumbsData([
    {
      name: 'Дополнительно',
    },
  ]);
});
</script>
