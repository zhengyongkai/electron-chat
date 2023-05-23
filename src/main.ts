import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from '@/locale'

const app = createApp(App).use(store).use(router).use(i18n)
app.mount('#app')
