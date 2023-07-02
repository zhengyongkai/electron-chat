import http from '@/utils/http'

export function queryDict(params: any) {
  return http.get('/api/dict/query', { params })
}
