import Vuex from 'vuex'
import UserStore from './user'
import LocaleStore from './common/locale'
import DictStore from './common/dict'

const store = new Vuex.Store({
  modules: {
    user: UserStore,
    locale: LocaleStore,
    dict: DictStore
  }
})

export default store
