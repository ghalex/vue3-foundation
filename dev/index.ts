import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import ZebbraUI from '@/index'

const app = createApp(App)

app.use(ZebbraUI)
app.use(router)
app.mount('#app')
