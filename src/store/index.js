import { createStore } from 'vuex'

export default createStore({
  state: {
    songindex: 0,
    islogin: false,
    songlist: [
      { songname: '可惜没如果', url: require('@/assets/music/勇气.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') },
      { songname: '醉赤壁', url: require('@/assets/music/锦鲤抄.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') },
      { songname: '瞬き（无对白）', url: require('@/assets/music/火力全开.mp3'), singer: '春茶', img: require('@/assets/image/temp.webp') },
      { songname: '关键词', url: require('@/assets/music/马步谣.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') }],
    color: 'color:#fff',
    isplay: false
  },
  mutations: {
    set_song (state, payload) {
      state.songindex = payload
    },
    set_songlist (state, payload) {
      state.songlist = payload
    },
    push_songlist (state, payload) {
      state.songlist.push(payload)
    },
    set_color (state, payload) {
      state.color = payload
    },
    set_play (state, payload) {
      state.isplay = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
