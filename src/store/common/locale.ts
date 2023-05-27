import { ActionContext } from 'vuex'
import { LANG } from '@/constant'

export interface localeState {
  language: string
}

const locale = {
  state: {
    language: localStorage.getItem(LANG) || 'en-US'
  },
  getters: {
    getlanguage(state: localeState) {
      return state.language
    }
  },
  mutations: {
    setLanguage(state: localeState, lang: string) {
      // 设置缓存
      localStorage.setItem('lang', lang)
      // 修改状态
      state.language = lang
    }
  },
  actions: {
    getLanguage(context: ActionContext<localeState, any>, lang: string) {
      //
      context.commit('setLanguage', lang)
    }
  }
}

export default locale
