import type { AxiosResponse } from 'axios'

export interface HttpResultList {
  limit: number
  list: Array<unknown>
  page: number
  pages: number
  total: number
}

export interface LoginResult {
  token: string
}

export interface HttpResult extends AxiosResponse {
  code: number
  data: any
  msg: string
  success: boolean
}

export type HttpData = HttpResultList & LoginResult & string & HttpResult & any
