import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tp1',
      name: 'tp1',
      component: () => import('../components/tp1.vue'),
    },
    {
      path: '/tp2',
      name: 'tp2',
      component: () => import('../components/tp2.vue'),
    },
    {
      path: '/tp3',
      name: 'tp3',
      component: () => import('../components/tp3.vue'),
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../components/todolist.vue'),
    },
  ],
})

export default router
