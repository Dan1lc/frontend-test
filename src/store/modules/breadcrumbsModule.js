export default {
  state: {
    breadcrumbsData:[],
  },
  mutations: {
    updateBreadcrumbsData(state, payload){
      state.breadcrumbsData = payload;
    },
  },
  actions: {
    setBreadcrumbsData({ commit }, payload){
      commit('updateBreadcrumbsData', payload);
    },
  },
  getters: {
    breadcrumbsData: state => state.breadcrumbsData,
  },
};
