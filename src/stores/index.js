import { createStore } from 'vuex'
import { getDatabase, ref, set, get, child } from 'firebase/database'
import modules from './modules'
import { getData } from '@/utils'

export default createStore({
  state: {
    DB_PATH_USER: `/users`,
    DB_PATH_BLUE_ARCHIVE_CURRENCY: `/blue-archive-currencies`,

    user: false,
    uid: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user ? {...user} : false
    },
    setUID (state, uid) {
      state.uid = uid ? uid : false
    }
  },
  actions: {
    findUser ({ state }) {
      return getData(`${state.DB_PATH_USER}/${state.uid}`)
    }
  },
  modules
})