import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'

const routes = [
  { path: '/login', component: Login, name: 'Login' },
  { path: '/', component: Home, name: 'Home' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
