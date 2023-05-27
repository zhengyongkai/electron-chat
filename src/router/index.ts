import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import chat from '../views/main/chat.vue'
import login from '../views/login.vue'
import BasicLayout from '@/components/layout/BasicLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '/login',
    component: login
  },
  {
    path: '',
    name: '',
    component: BasicLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        name: 'chat',
        component: chat
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
