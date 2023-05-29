import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import chatContainer from '../views/main/container.vue'
import chatBody from '../views/chat/chat.vue'
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
        path: '/chat',
        name: 'chat',
        component: chatContainer,
        children: [
          {
            path: '/chat/:id',
            name: 'chatbody',
            component: chatBody
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
