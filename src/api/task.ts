import http from '@/utils/http'

export function queryTask(params: any) {
  return http.get('/api/task/query', { params })
}

export function queryDate() {
  return http.get('/api/task/queryDate')
}

export function saveTask(data: any) {
  return http.post('/api/task/saveTask', data)
}

export function delTask(taskId: number) {
  return http.post('/api/task/delTask', { taskId })
}

export function finishTask(data: any) {
  return http.post('/api/task/finish', data)
}
