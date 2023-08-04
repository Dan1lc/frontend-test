import { computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import debounce from '@helpers/debounce';

export default function useDadata(formData){
  const store = useStore();

  const countriesList = computed(() => store.getters.countriesList);

  const setRegionsSelector = (selector) => store.dispatch('setRegionsSelector', selector);
  const regionsList = computed(() => store.getters.regionsList);

  const setLocalitiesSelector = (selector) => store.dispatch('setLocalitiesSelector', selector);
  const localitiesList = computed(() => store.getters.localitiesList);

  const setStreetsSelector = (selector) => store.dispatch('setStreetsSelector', selector);
  const streetsList = computed(() => store.getters.streetsList);

  const clearSelectors = () => {
    setRegionsSelector(JSON.parse(localStorage.getItem('regionsSelector')));
    setLocalitiesSelector(JSON.parse(localStorage.getItem('localitiesSelector')));
    setStreetsSelector(JSON.parse(localStorage.getItem('streetsSelector')));
  };

  onMounted(() => {
    setRegionsSelector(JSON.parse(localStorage.getItem('regionsSelector')) || '');
    setLocalitiesSelector(JSON.parse(localStorage.getItem('localitiesSelector')) || '');
    setStreetsSelector(JSON.parse(localStorage.getItem('streetsSelector')) || '');
  });


  watch(() => formData.country, debounce((query) => {
    store.dispatch('getCountriesList', query);
  }, 300));

  watch(() => formData.region, debounce((query) => {
    store.dispatch('getRegionsList', query);
  }, 300));

  watch(() => formData.locality, debounce((query) => {
    store.dispatch('getLocalitiesList', query);
  }, 300));

  watch(() => formData.street, debounce((query) => {
    store.dispatch('getStreetsList', query);
  }, 300));

  return {
    countriesList,
    setRegionsSelector,
    regionsList,
    setLocalitiesSelector,
    localitiesList,
    setStreetsSelector,
    streetsList,
    clearSelectors,
  };
}
