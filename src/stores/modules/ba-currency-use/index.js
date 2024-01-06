import { saveData, setListDataListen } from '@/utils'

export default {
  namespaced: true,
  state: {
    DB_PATH_BA_CURRENCY_USE: `/${process.env.FIREBASE_DATABASE_PREFIX}ba-currency-use`,
    
    listGetListener: false,
  },
  actions: {
    save ({ state, rootState }, { key, data }) {
      saveData(`${state.DB_PATH_BA_CURRENCY_USE}/${rootState.uid}/${key}`, data)
    },
    setGetRecordsListen ({ state, rootState }, { year, month, callback }) {
      const { listGetListener } = state
      if (listGetListener) {
        listGetListener.off()
        state.listGetListener = false
      }

      state.listLatestListener = setListDataListen(
        `${state.DB_PATH_BA_CURRENCY_USE}/${rootState.uid}`,
        callback,
        {
          order: `key`,
          filters: [
            {
              type: `between`,
              start: `${year}-${month}-00`,
              end: `${year}-${month}-99`
            }
          ]
        }
      )
    }
  }
}