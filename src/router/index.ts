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
    component: () => import('@/pages/PTest.vue'),
  },
  // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
