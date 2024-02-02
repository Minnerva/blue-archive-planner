import { off } from 'firebase/database'
import { find, saveData, setListDataListen } from '@/utils'
import dataBanners from '@/data/banners.js'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_BANNER_PULL: `/${process.env.FIREBASE_DATABASE_PREFIX}ba-banner-pull`,
    
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
    },
    withDate (state) {
      const { banner_pull } = state
      Object.keys(state.banner_pull).forEach(banner_key => {
        const banner = banner_pull[banner_key]
        const group_banner = find(dataBanners, { uuid: banner.uuid })
        banner.date = group_banner ? group_banner.date : ``
      })

      return banner_pull
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
        off(listGetUpcomingListener)
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