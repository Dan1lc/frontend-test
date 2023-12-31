import { onMounted, reactive } from 'vue';
import { required, minLength, integer } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default function useForm() {
  const formData = reactive({
    name: '',
    number: '',
    country: '',
    region: '',
    locality: '',
    street: '',
    house: '',
    frame: '',
    postcode: '',
  });

  const formRules = {
    name: {
      required,
    },
    number: {
      required,
    },
    country: {
      required,
    },
    region: {
      required,
    },
    locality: {
      required,
    },
    street: {
      required,
    },
    house: {
      required,
    },
    frame: {
      required,
    },
    postcode: {
      required,
      minLength:minLength(6),
      integer,
    },
  };

  const v$ = useVuelidate(formRules, formData);

  const clearForm = () => {
    localStorage.removeItem('formData');
    Object.assign(formData, {
      name: '',
      number: '',
      country: '',
      region: '',
      locality: '',
      street: '',
      house: '',
      frame: '',
      postcode: '',
    });
  };

  const submitForm = () => {
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Форма успешно сохранена!');
  };

  onMounted(() => {
    Object.assign(formData, JSON.parse(localStorage.getItem('formData')) || {});
  });

  return {
    formData,
    v$,
    clearForm,
    submitForm,
  };
}
