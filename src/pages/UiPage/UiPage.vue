<template>
  <div class="ui-page">
    <ul class="ui-page__list">
      <li>
        <UiButton @click="testClick">
          Сохранить
        </UiButton>
      </li>
      <li>
        <UiButton
          disabled
          @click="testClick"
        >
          Сохранить
        </UiButton>
      </li>
      <li>
        <UiButton
          secondary
          @click="testClick"
        >
          Отменить
        </UiButton>
      </li>
      <li>
        <UiButton
          disabled
          secondary
          @click="testClick"
        >
          Отменить
        </UiButton>
      </li>
    </ul>
  </div>
</template>

<script setup>
import UiButton from '@ui/UiButton/UiButton';

const testClick = () => {
  console.log('testClick');
};
</script>

<style lang="scss" src="./UiPage.scss" scoped/>
