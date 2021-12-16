import { createStore } from 'vuex'

export default createStore({
  state: {
    // 当前播放序号
    songindex: 0,
    // 登陆状态
    islogin: false,
    // 播放列表
    playlist: [
      { songname: '可惜没如果', url: require('@/assets/music/勇气.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') },
      { songname: '醉赤壁', url: require('@/assets/music/锦鲤抄.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') },
      { songname: '瞬き（无对白）', url: require('@/assets/music/火力全开.mp3'), singer: '春茶', img: require('@/assets/image/temp.webp') },
      { songname: '关键词', url: require('@/assets/music/马步谣.mp3'), singer: '林俊杰', img: require('@/assets/image/jj.webp') }],
    color: 'color:#fff',
    isplay: false,
    // 用户搜索框输入的东西
    Searchcontent: '',
    Searchguess: { song: ['可惜不是你', '终于等到你'], singer: ['梁静茹', '林俊杰'] },
    // 当前用户的歌单
    songList: [{ content: '日语' }, { content: '我喜欢的' }, { content: '海龟汤' }, { content: '惩罚' }],
    rightNowSongList: [],
    // 用户在歌单页面选择的页码
    pageIndex: 0,
    // 搜索结果数目
    resultNum: 0
  },
  mutations: {
    // payload就是调用时，传过来的参数
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
    },
    set_content (state, payload) {
      state.Searchcontent = payload
    },
    set_page (state, payload) {
      state.pageIndex = payload
    },
    set_result (state, payload) {
      state.resultNum = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
