import { getUID } from '@/utils'

export default {
  namespaced: true,
  mutations: {
    setUser (state, user) {
      state.user = user ? {...user} : false
    }
  },
  actions: {
    find (d) {
      console.log(`find`)
      console.log(d)
    }
  }
}