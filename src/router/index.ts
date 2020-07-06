import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../components/HelloWorld.vue'),
      },
    ],
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/shop',
        name: 'shop',
        meta: { subItem: 'shop' },
        component: () => import( '../views/shop/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'user',
        meta: { subItem: 'user' },
        component: () => import('../views/user/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
