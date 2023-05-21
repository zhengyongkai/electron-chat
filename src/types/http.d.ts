import type { AxiosResponse } from 'axios'

export interface HttpResultList {
  limit: number
  list: Array<unknown>
  page: number
  pages: number
  total: number
}

export interface HttpResult extends AxiosResponse {
  code: number
  data: HttpResultList | undefined
  msg: string
  success: boolean
}
