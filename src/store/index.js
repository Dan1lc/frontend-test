import { createStore } from 'vuex';
import breadcrumbsModule from '@modules/breadcrumbsModule';
import dadataModule from '@modules/dadataModule';

export default createStore({
  modules: {
    breadcrumbsModule,
    dadataModule,
  },
});
