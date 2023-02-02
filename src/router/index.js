import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // { path: '/', component: () => import('@/views/home/index.vue') },
  { path: '/', component: () => import('@/views/cover.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router