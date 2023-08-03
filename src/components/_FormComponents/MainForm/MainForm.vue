<template>
  <form
    class="main-form"
    @submit.prevent
  >
    <div class="main-form__inner">
      <h2 class="main-form__title">
        Наименование и шифр
      </h2>
      <ul class="main-form__list">
        <li>
          <TextInput placeholder="Наименование" />
        </li>
        <li>
          <TextInput placeholder="Шифр" />
        </li>
      </ul>
      <h2 class="main-form__title">
        Местонахождение проекта
      </h2>
      <ul class="main-form__list main-form__list--last">
        <li>
          <TextInput placeholder="Страна" />
        </li>
        <li>
          <TextInput placeholder="Область / Край" />
        </li>
        <li>
          <TextInput placeholder="Населенный пункт" />
        </li>
        <li>
          <TextInput placeholder="Улица / Проспект" />
        </li>
        <li class="main-form__list-item main-form__list-item--double">
          <TextInput placeholder="Дом" />
          <TextInput placeholder="Корпус" />
        </li>
        <li>
          <TextInput placeholder="Почтовый индекс" />
        </li>
      </ul>
    </div>
    <div class="main-form__actions">
      <UiButton
        class="main-form__button"
        secondary
      >
        Отменить
      </UiButton>
      <UiButton
        class="main-form__button"
        disabled
      >
        Сохранить
      </UiButton>
    </div>
  </form>
</template>

<script setup>
import TextInput from '@ui/TextInput/TextInput';
import UiButton from '@ui/UiButton/UiButton';
</script>

<style lang="scss" src="./MainForm.scss" scoped/>
