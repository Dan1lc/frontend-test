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
          <TextInput
            v-model="v$.name.$model"
            placeholder="Наименование"
          />
        </li>
        <li>
          <TextInput
            v-model="v$.number.$model"
            placeholder="Шифр"
          />
        </li>
      </ul>
      <h2 class="main-form__title">
        Местонахождение проекта
      </h2>
      <ul class="main-form__list main-form__list--last">
        <li>
          <TextInput
            v-model="v$.country.$model"
            placeholder="Страна"
            select
            :select-array="countriesList"
            @select-value="setRegionsSelector"
          />
        </li>
        <li>
          <TextInput
            v-model="v$.region.$model"
            placeholder="Область / Край"
            select
            :select-array="regionsList"
            @select-value="setLocalitiesSelector"
          />
        </li>
        <li>
          <TextInput
            v-model="v$.locality.$model"
            placeholder="Населенный пункт"
            select
            :select-array="localitiesList"
            @select-value="setStreetsSelector"
          />
        </li>
        <li>
          <TextInput
            v-model="v$.street.$model"
            placeholder="Улица / Проспект"
            select
            :select-array="streetsList"
          />
        </li>
        <li class="main-form__list-item main-form__list-item--double">
          <TextInput
            v-model="v$.house.$model"
            placeholder="Дом"
          />
          <TextInput
            v-model="v$.frame.$model"
            placeholder="Корпус"
          />
        </li>
        <li class="main-form__list-item main-form__list-item--double">
          <TextInput
            ref="postcode"
            v-model="v$.postcode.$model"
            placeholder="Почтовый индекс"
            number
          />
        </li>
      </ul>
    </div>
    <div class="main-form__actions">
      <UiButton
        class="main-form__button"
        secondary
        :disabled="isClearDisable"
        @click="clearAllValues"
      >
        Отменить
      </UiButton>
      <UiButton
        class="main-form__button"
        :disabled="v$.$invalid"
        @click="sendForm"
      >
        Сохранить
      </UiButton>
    </div>
  </form>
</template>

<script setup>
import TextInput from '@ui/TextInput/TextInput';
import UiButton from '@ui/UiButton/UiButton';
import useDadata from '@hooks/useDadata';
import useForm from '@hooks/useForm';
import Inputmask from 'inputmask';
import { computed, onMounted, ref } from 'vue';

const postcode = ref(null);

onMounted(() => {
  new Inputmask('', {
    placeholder: '',
    regex: '\\d\\d\\d\\d\\d\\d',
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(postcode.value.$refs.input);
});

const { formData, v$, clearForm, submitForm } = useForm();

const {
  countriesList,
  setRegionsSelector,
  regionsList,
  setLocalitiesSelector,
  localitiesList,
  setStreetsSelector,
  streetsList,
  clearSelectors,
  submitSelectors,
} = useDadata(formData);

const isClearDisable = computed(() => {
  return !Object.values(formData).find((item) => item);
});

const clearAllValues = () => {
  clearForm();
  clearSelectors();
};

const sendForm = async () => {
  v$.value.$touch();
  if (!v$.value.$error) {
    submitSelectors();
    submitForm();
  }
};
</script>

<style lang="scss" src="./MainForm.scss" scoped/>
