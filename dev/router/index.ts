import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Buttons from '../views/Buttons.vue'
import Inputs from '../views/Inputs.vue'
import Menus from '../views/Menus.vue'
import Checkbox from '../views/CheckboxRadios.vue'
import Dialogs from '../views/Dialogs.vue'
import Select from '../views/Select.vue'
import Tab from '../views/Tab.vue'

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
  },
  {
    path: '/dialogs',
    component: Dialogs
  },
  {
    path: '/selects',
    component: Select
  },
  {
    path: '/tab',
    component: Tab
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
