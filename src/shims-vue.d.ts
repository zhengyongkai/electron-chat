/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  import Vue from 'vue'

  const component: DefineComponent<{}, {}, any> | Vue

  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'
declare const __static: string
