import { createStore } from 'vuex';
import breadcrumbsModule from '@modules/breadcrumbsModule';

export default createStore({
  modules: {
    breadcrumbsModule,
  },
});
