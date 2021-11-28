import { createStore } from 'vuex'

export default createStore({
  state: {
    songindex: 0
  },
  mutations: {
    set_song (state, payload) {
      state.songindex = payload
      console.log('触发了一次')
    }
  },
  actions: {
  },
  modules: {
  }
})
