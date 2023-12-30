import { getData, getDataListen, saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_BANNER_PULL: `/ba-banner-pull`,
    
    listGetListener: false,
  },
  mutations: {
    
  },
  actions: {
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}/${key}`, data)
    },
    delete ({ state, rootState }, key) {
      saveData(`${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}/${key}`, null)
    },
    setGetRecordsListen ({ state, rootState }, callback) {
      const { listGetListener } = state
      if (listGetListener) {
        listGetListener.off()
        state.listGetListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}`,
        callback
      )
    },
  }
}