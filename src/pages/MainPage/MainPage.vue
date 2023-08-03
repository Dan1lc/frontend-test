<template>
  <div class="main-page">
    <ContainerTemplate>
      <div class="main-page__inner">
        <h1 class="main-page__title">
          Проектные данные
        </h1>
        <TabsList>
          <TabsItem title="Основное">
            <MainForm />
          </TabsItem>
          <TabsItem
            title="Дополнительно"
            hint-text="Сначала заполните: Основное"
            disabled
          />
        </TabsList>
      </div>
    </ContainerTemplate>
  </div>
</template>

<script setup>
import ContainerTemplate from '@templates/ContainerTemplate/ContainerTemplate';
import { onMounted } from 'vue';
import useBreadcrumbs from '@hooks/useBreadcrumbs';
import TabsList from '@ui/TabsList/TabsList';
import TabsItem from '@ui/TabsList/TabsItem/TabsItem';
import MainForm from '@form/MainForm/MainForm';
const { setBreadcrumbsData } = useBreadcrumbs();

onMounted(() => {
  setBreadcrumbsData([
    {
      name: 'Дополнительно',
    },
  ]);
});
</script>

<style lang="scss" src="./MainPage.scss" scoped/>
