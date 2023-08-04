import axios from 'axios';

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = 'ee9040a95b7c15356e47740a787b92ba830a4d01';

axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Token ' + token,
};

const getRequestData = (query, type, locations) => ({
  query,
  'from_bound': {
    value: type,
  },
  'to_bound': {
    value: type,
  },
  locations: [
    locations,
  ],
});

export default {
  state: {
    countriesList: [],
    regionsSelector:'',
    regionsList: [],
    localitiesSelector:'',
    localitiesList: [],
    streetsSelector:'',
    streetsList: [],
  },
  mutations: {
    updateCountriesList(state, payload){
      state.countriesList = payload.map((item) => ({
        name:item.value,
        selector:item.data.country_iso_code,
      }));
    },
    updateRegionsSelector(state, payload){
      localStorage.setItem('regionsSelector', JSON.stringify(payload));
      state.regionsSelector = payload;
    },
    updateRegionsList(state, payload){
      state.regionsList = payload.map((item) => ({
        name:item.value,
        selector:item.data.region,
      }));
    },
    updateLocalitiesSelector(state, payload){
      localStorage.setItem('localitiesSelector', JSON.stringify(payload));
      state.localitiesSelector = payload;
    },
    updateLocalitiesList(state, payload){
      state.localitiesList = payload.map((item) => ({
        name:item.value,
        selector:item.data.city,
      }));
    },
    updateStreetsSelector(state, payload){
      localStorage.setItem('streetsSelector', JSON.stringify(payload));
      state.streetsSelector = payload;
    },
    updateStreetsList(state, payload){
      state.streetsList = payload.map((item) => ({
        name:item.value,
      }));
    },
  },
  actions: {
    async getCountriesList({ commit }, query){
      try {
        const { data } = await axios.post(url, getRequestData(query, 'country', {
          'country_iso_code': '*',
        }));
        commit('updateCountriesList', data.suggestions || []);
      }catch (error){
        console.log(error.message);
      }
    },
    setRegionsSelector({ commit }, selector){
      commit('updateRegionsSelector', selector);
    },
    async getRegionsList({ state, commit }, query){
      try {
        const { data } = await axios.post(url, getRequestData(query, 'region', {
          'country_iso_code': state.regionsSelector,
        }));
        commit('updateRegionsList', data.suggestions || []);
      }catch (error){
        console.log(error.message);
      }
    },
    setLocalitiesSelector({ commit }, selector){
      commit('updateLocalitiesSelector', selector);
    },
    async getLocalitiesList({ state, commit }, query){
      try {
        const { data } = await axios.post(url, getRequestData(query, 'city', {
          'region': state.localitiesSelector,
        }));
        commit('updateLocalitiesList', data.suggestions || []);
      }catch (error){
        console.log(error.message);
      }
    },
    setStreetsSelector({ commit }, selector){
      commit('updateStreetsSelector', selector);
    },
    async getStreetsList({ state, commit }, query){
      try {
        const { data } = await axios.post(url, getRequestData(query, 'street', {
          'city': state.streetsSelector,
        }));
        commit('updateStreetsList', data.suggestions || []);
      }catch (error){
        console.log(error.message);
      }
    },
  },
  getters: {
    countriesList: state => state.countriesList,
    regionsList: state => state.regionsList,
    localitiesList: state => state.localitiesList,
    streetsList: state => state.streetsList,
  },
};
