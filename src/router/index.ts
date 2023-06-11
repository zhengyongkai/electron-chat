import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import ContactContainer from '../views/main/container.vue'
import chatBoby from '../views/main/chat.vue'
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
    redirect: '/login',
    children: [
      {
        path: '/contact',
        name: 'contact',
        component: ContactContainer
      },
      {
        path: '/chat',
        name: 'chat',
        component: chatBoby
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
