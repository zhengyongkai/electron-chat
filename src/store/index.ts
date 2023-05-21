import Vuex from 'vuex'
import UserStore from './user'
const store = new Vuex.Store({
  modules: {
    user: UserStore
  }
})
export default store
