import { getData, getDataListen, saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_CURRENCY_OWN: `/ba-currency-own`
  },
  mutations: {
    
  },
  actions: {
    get () {

    },
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_CURRENCY_OWN}/${rootState.uid}/${key}`, data)
    },
    getLatestRecordListen ({ state, rootState }, callback) {
      setListDataListen(
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