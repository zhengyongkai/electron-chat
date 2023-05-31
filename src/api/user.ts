import http from '@/utils/http'
import type { UserSearch } from '@/types/user'

export function login(data: { username: string; password: string }) {
  return http.post('/api/user/login', data)
}

export function getUserInfo() {
  return http.get('/api/user/get_userinfo')
}

export function getUserList(params?: UserSearch) {
  return http.get('/api/user/list', {
    params
  })
}

export function getUserById(id: string) {
  return http.get('/api/user/get_user_id', {
    params: {
      id
    }
  })
}
