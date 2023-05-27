import { UserInfo, UserState } from '@/types/user'

const store = {
  state: {
    username: '测试',
    token: ''
  },
  getters: {
    getInfo: (state: UserState) => {
      return state.userInfo
    }
  },
  mutations: {
    SET_TOKEN(state: UserState, params: UserInfo) {
      state.userInfo = params
    }
  },
  actions: {}
}

export default store
