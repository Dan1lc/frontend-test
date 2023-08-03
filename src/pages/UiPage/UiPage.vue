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
      <li>
        <TextInput
          v-model="textInput"
          placeholder="Название"
        />
      </li>
      <li>
        <TextInput
          v-model="textInput"
          placeholder="Название"
          hint="Подсказка"
          is-hint
        />
      </li>
      <li>
        <TextInput
          v-model="textInput"
          placeholder="Название"
          error-text="Ошибка"
          is-error
        />
      </li>
      <li>
        <TextInput
          value="Текст"
          placeholder="Название"
          read-only
        />
      </li>
      <li>
        <TextInput
          value="Текст"
          placeholder="Название"
          disabled
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import UiButton from '@ui/UiButton/UiButton';
import TextInput from '@ui/TextInput/TextInput';
import { ref } from 'vue';

const textInput = ref('Текст');

const testClick = () => {
  alert('Клик!');
};
</script>

<style lang="scss" src="./UiPage.scss" scoped/>
