import { ActionContext } from 'vuex'

import { queryDict } from '@/api/dict'

export interface dictStore {
  dictMap: Map<string, Array<unknown>>
}

interface dictType {
  key: string
  value: Array<unknown>
}

interface dictParamsType {
  dictParams: string
  dictQuery: string
}

const dictStore = {
  state: {
    dictMap: new Map()
  },
  getters: {
    getDict(state: dictStore, key: string) {
      return state.dictMap.get(key)
    }
  },
  mutations: {
    setDict(state: dictStore, payload: dictType) {
      state.dictMap.set(payload.key, payload.value)
    }
  },
  actions: {
    async getDict(context: ActionContext<dictStore, any>, payload: dictParamsType) {
      const key = payload.dictQuery + '_' + payload.dictQuery
      if (!context.state.dictMap.get(key)) {
        const { list } = await queryDict({
          queryParams: payload.dictQuery,
          dictQuery: payload.dictQuery,
          limit: 9999
        })
        context.commit('setDict', { key, value: list })
      }

      return context.state.dictMap.get(key)
    }
  }
}

export default dictStore
