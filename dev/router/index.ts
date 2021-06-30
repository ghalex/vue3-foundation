import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Buttons from '../views/Buttons.vue'
import Inputs from '../views/Inputs.vue'
import Menus from '../views/Menus.vue'
import Checkbox from '../views/CheckboxRadios.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Button',
    component: Buttons
  },
  {
    path: '/inputs',
    component: Inputs
  },
  {
    path: '/menus',
    component: Menus
  },
  {
    path: '/checkbox',
    component: Checkbox
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
