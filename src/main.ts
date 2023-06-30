import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/locale'
import { svgPluginImport } from './utils/pluginImport'

// 组件
import SvgIcon from '@/components/basic/svg.vue'
import titleBar from '@/components/basic/titlebar.vue'
import topBar from '@/components/basic/topBar.vue'
import tableColumnTips from '@/components/form/tableColumnTips.vue'

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
import '@/assets/fonts/index.scss'

svgPluginImport()

const app = createApp(App).use(store).use(router).use(i18n)

app.component('svg-icon', SvgIcon)
app.component('title-bar', titleBar)
app.component('top-bar', topBar)
app.component('table-column-tips', tableColumnTips)

app.mount('#app')
