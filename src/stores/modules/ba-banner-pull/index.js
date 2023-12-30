import { saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_BANNER_PULL: `/ba-banner-pull`,
    
    banner_pull: false,
    listGetUpcomingListener: false,
  },
  mutations: {
    setBannerPull (state, banner_pull) {
      state.banner_pull = banner_pull ? {...banner_pull} : false
    }
  },
  getters: {
    find: (state) => (key) => {
      const item = state.banner_pull[key]
      return item ? item : null
    }
  },
  actions: {
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}/${key}`, data)
    },
    delete ({ state, rootState }, key) {
      saveData(`${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}/${key}`, null)
    },
    setGetUpcomingRecordsListen ({ state, rootState }, callback) {
      const { listGetUpcomingListener } = state
      if (listGetUpcomingListener) {
        listGetUpcomingListener.off()
        state.listGetUpcomingListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_BANNER_PULL}/${rootState.uid}`,
        callback,
        {
          order: `key`,
          filters: [
            {
              type: `startAt`,
              value: `2023-12-00`
            }
          ]
        }
      )
    },
  }
}