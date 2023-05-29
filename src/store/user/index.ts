import { UserInfo, UserToken, UserState } from '@/types/user'
import { setLocalStorage, getLocalStorage } from '@/utils/storage'

const store = {
  state: {
    userInfo: getLocalStorage('USERINFO', true),
    token: getLocalStorage('TOKEN')
  },
  getters: {
    getToken: (state: UserState) => {
      return state.token
    }
  },
  mutations: {
    SET_TOKEN(state: UserState, params: UserToken) {
      state.token = params
      setLocalStorage('TOKEN', params)
    },
    SET_USERINFO(state: UserState, params: UserInfo) {
      state.userInfo = params
      setLocalStorage('USERINFO', JSON.stringify(params))
    }
  },
  actions: {}
}

export default store
