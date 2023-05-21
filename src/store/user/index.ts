export interface UserState {
  username: string
}

const store = {
  state: {
    username: '测试'
  },
  getters: {
    getName: (state: UserState) => {
      return state
    }
  },
  mutations: {
    SET_NAME(state: UserState, params: string) {
      state.username = params
    }
  },
  actions: {}
}

export default store
