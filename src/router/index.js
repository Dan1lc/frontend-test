import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@pages/MainPage/MainPage';
import UiPage from '@pages/UiPage/UiPage';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/ui',
    name: 'UiPage',
    component: UiPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
