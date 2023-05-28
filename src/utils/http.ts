import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import type { HttpData, HttpResult } from '@/types/http'

// const whiteList = ['get_userinfo']

export class HttpRequest {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: process.env.VUE_APP_URL, timeout: 5000 }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    this.instance = axios.create(this.baseConfig)
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const data: HttpResult = response.data.data
        return Promise.resolve(data)
      },
      (error) => {
        if (error.response.data) {
          const data = error.response.data
          switch (data.code) {
            case 401:
              break
          }
          ElMessage.error(data.msg)
        }
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
      request.url = (process.env.VUE_APP_PROXY as string) + request.url
      return request
    })
  }

  public get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config)
  }

  public post(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<HttpData> {
    return this.instance.post(url, data, config)
  }

  public put(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<HttpData> {
    return this.instance.put(url, data, config)
  }

  public delete(url: string, config?: AxiosRequestConfig): Promise<HttpData> {
    return this.instance.delete(url, config)
  }
}

export default new HttpRequest({})
