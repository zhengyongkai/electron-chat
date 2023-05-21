import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

import type { HttpResult } from '@/types/http'

export class HttpRequest {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: process.env.baseUrl, timeout: 5000 }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    this.instance = axios.create(this.baseConfig)
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      const data: HttpResult = response.data
      switch (data.code) {
        case 200:
          break
        case 401:
          break
        default:
          break
      }
      return Promise.resolve(data)
    })
    this.instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
      return request
    })
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config)
  }

  public post(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<HttpResult>> {
    return this.instance.post(url, data, config)
  }

  public put(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<HttpResult>> {
    return this.instance.put(url, data, config)
  }

  public delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<HttpResult>> {
    return this.instance.delete(url, config)
  }
}

export default new HttpRequest({})
