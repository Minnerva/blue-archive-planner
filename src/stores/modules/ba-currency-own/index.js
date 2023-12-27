import { getData, getDataListen, saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_CURRENCY_OWN: `/ba-currency-own`,
    
    listGetListener: false,
    listLatestListener: false
  },
  mutations: {
    
  },
  actions: {
    get () {

    },
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}/${key}`, data)
    },
    setGetRecordsListen ({ state, rootState }, { year, month, callback }) {
      const { listGetListener } = state
      if (listGetListener) {
        listGetListener.off()
        state.listGetListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}`,
        callback,
        {
          order: `key`,
          filter: `between`,
          filter_start: `${year}-${month}-00`,
          filter_end: `${year}-${month}-99`
        }
      )
    },
    setGetLatestRecordListen ({ state, rootState }, callback) {
      const { listLatestListener } = state
      if (listLatestListener) {
        listLatestListener.off()
        state.listLatestListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}`,
        callback,
        {
          filter: `last`,
          filter_value: 1
        }
      )
    }
  }
}