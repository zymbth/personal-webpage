import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/cover.vue') },
  { path: '/old', component: () => import('@/views/home/index.vue') },
  { path: '/about', component: () => import('@/views/about/index.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router