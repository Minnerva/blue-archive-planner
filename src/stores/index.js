import { createStore } from 'vuex'
import modules from './modules'
import { getData, getDataListen, saveData } from '@/utils'

export default createStore({
  state: {
    DB_PATH_USER: `/${process.env.FIREBASE_DATABASE_PREFIX}users`,

    user: false,
    uid: false,
    configs: {
      date_format: {}
    },

    userListen: false,
  },
  mutations: {
    setUser (state, user) {
      state.user = user || false
    },
    setUID (state, uid) {
      state.uid = uid || false
    },
    setConfigs (state, configs) {
      state.configs = configs || false
    }
  },
  actions: {
    findUser ({ state }) {
      return getData(`${state.DB_PATH_USER}/${state.uid}`)
    },
    setUserListen ({ state }, callback) {
      const { userListen } = state
      if (userListen) {
        state.userListen = false
      }
      state.userListen = getDataListen(`${state.DB_PATH_USER}/${state.uid}`, (user) => callback(user))
    },
    async saveUser ({ state }, user) {
      await saveData(`${state.DB_PATH_USER}/${state.uid}`, user)
    }
  },
  modules
})