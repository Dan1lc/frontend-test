<template>
  <header class="app-header">
    <div class="app-header__wrapper">
      <ContainerTemplate>
        <div class="app-header__inner">
          <button>
            <img
              :src="BurgerIcon"
              alt="BurgerIcon"
            >
          </button>
          <button>
            <img
              :src="ProfileIcon"
              alt="ProfileIcon"
            >
          </button>
        </div>
      </ContainerTemplate>
    </div>
    <ContainerTemplate>
      <BreadCrumbs
        :breadcrumbs-data="breadcrumbsData"
        class="app-header__breadcrumbs"
      />
    </ContainerTemplate>
  </header>
</template>

<script setup>
import ContainerTemplate from '@templates/ContainerTemplate/ContainerTemplate';
import BreadCrumbs from '@components/AppHeader/BreadCrumbs/BreadCrumbs';
import BurgerIcon from '@icons/AppHeader/BurgerIcon.svg';
import ProfileIcon from '@icons/AppHeader/ProfileIcon.svg';
import useBreadcrumbs from '@hooks/useBreadcrumbs';

const { breadcrumbsData } = useBreadcrumbs();
</script>

<style lang="scss" src="./AppHeader.scss" scoped/>
