import http from '@/utils/http'

export function login(data: { username: string; password: string }) {
  return http.post('/api/user/login', data)
}

export function getUserInfo() {
  return http.get('/api/user/get_userinfo')
}
