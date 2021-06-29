import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Buttons from '../views/Buttons.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Buttons
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
