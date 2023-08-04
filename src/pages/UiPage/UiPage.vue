<template>
  <div class="ui-page">
    <ContainerTemplate>
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
            placeholder="Выпадающий список"
            select
            :select-array="selectArray"
          />
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
        <li>
          <TabsList>
            <TabsItem title="Основное">
              Основное
            </TabsItem>
            <TabsItem
              title="Дополнительно"
              hint-text="Сначала заполните: Основное"
              disabled
            >
              Перечень ПСД
            </TabsItem>
          </TabsList>
        </li>
      </ul>
    </ContainerTemplate>
  </div>
</template>

<script setup>
import ContainerTemplate from '@templates/ContainerTemplate/ContainerTemplate';
import UiButton from '@ui/UiButton/UiButton';
import TextInput from '@ui/TextInput/TextInput';
import { onMounted, ref } from 'vue';
import TabsList from '@ui/TabsList/TabsList';
import TabsItem from '@ui/TabsList/TabsItem/TabsItem';
import useBreadcrumbs from '@hooks/useBreadcrumbs';

const { setBreadcrumbsData } = useBreadcrumbs();

onMounted(() => {
  setBreadcrumbsData([
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
});

const textInput = ref('Текст');
const selectArray = [
  {
    name:'Пункт 1',
  },
  {
    name:'Пункт 2',
  },
  {
    name:'Пункт 3',
  },
  {
    name:'Пункт 4',
  },
  {
    name:'Пункт 5',
  },
  {
    name:'Пункт 6',
  },
  {
    name:'Пункт 7',
  },
  {
    name:'Пункт 8',
  },
  {
    name:'Пункт 9',
  },
  {
    name:'Пункт 10',
  },
];
const testClick = () => {
  alert('Клик!');
};
</script>

<style lang="scss" src="./UiPage.scss" scoped/>
