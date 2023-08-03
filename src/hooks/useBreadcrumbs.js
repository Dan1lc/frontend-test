import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useBreadcrumbs(){
  const store = useStore();

  const breadcrumbsData = computed(() => store.getters.breadcrumbsData);
  const setBreadcrumbsData = (payload) => store.dispatch('setBreadcrumbsData', payload);

  return {
    breadcrumbsData,
    setBreadcrumbsData,
  };
}
