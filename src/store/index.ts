import Vuex from 'vuex'
import UserStore from './user'
import LocaleStore from './common/locale'

const store = new Vuex.Store({
  modules: {
    user: UserStore,
    locale: LocaleStore
  }
})

export default store
