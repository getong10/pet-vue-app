import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
