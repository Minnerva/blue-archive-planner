import { createStore } from 'vuex'
import modules from './modules'
import { getData, getDataListen, saveData, setListDataListen } from '@/utils'
import { off } from 'firebase/database'

export default createStore({
  state: {
    DB_PATH_USER: `/${process.env.FIREBASE_DATABASE_PREFIX}users`,
    DB_PATH_USER_PUBLIC: `/${process.env.FIREBASE_DATABASE_PREFIX}users-public`,

    user: false, // Google will return null if not signed in yet
    uid: false,
    configs: {
      date_format: {}
    },

    userListen: false,
  },
  mutations: {
    setUser (state, user) {
      state.user = user
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
    saveUser ({ state }, user) {
      saveData(`${state.DB_PATH_USER}/${state.uid}`, user)
    },
    findUserPublic ({ state }, { key, value, callback }) {
      const listener = setListDataListen(
        `${state.DB_PATH_USER_PUBLIC}`, 
        (data) => {
          callback(data)
          off(listener)
        }, 
        {
          order: `child`,
          order_key: key,
          filters: [
            {
              type: `equal`,
              value: value
            }
          ]
        }
      )
    },
    saveUserPublic ({ state }, user) {
      saveData(`${state.DB_PATH_USER_PUBLIC}/${state.uid}`, user)
    }
  },
  modules
})