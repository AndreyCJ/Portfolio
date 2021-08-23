import { AppModule } from '@/types';
import { createWebHistory, createRouter } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/PHome.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/pages/PProjects.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/PAboutMe.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/PNotFound.vue'),
  },
];

export const install: AppModule = (app) => {
  const router = createRouter({
    history: createWebHistory('/Portfolio/'),
    routes,
  });

  app.use(router);
};
