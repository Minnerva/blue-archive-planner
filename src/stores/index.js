import { createStore } from 'vuex'

export default createStore({
  state: {
    user: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  }
})