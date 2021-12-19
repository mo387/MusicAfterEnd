import { createStore } from 'vuex'

export default createStore({
  state: {
    // 当前播放序号
    songindex: 0,

    // 张文凯添加：当前播放歌曲ID号
    songID: 1,
    // 张文凯添加：当前播放歌曲歌词
    songWord: [],
    // 张文凯添加：当前播放歌曲歌词(精确到句)
    currentsongWord: '无',

    // 登陆状态
    islogin: false,
    // 播放列表
    playlist: [],

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
    resultNum: 0,
    // 用户id
    userId: ''
  },
  mutations: {
    // payload就是调用时，传过来的参数
    // 张文凯添加的方法
    set_currentsongWord (state, payload) {
      state.currentsongWord = payload
    },
    set_songID (state, payload) {
      state.songID = payload
    },
    set_songWord (state, payload) {
      state.songWord = payload
    },
    set_rightNowSongList (state, payload) {
      state.rightNowSongList = payload
    },
    set_song (state, payload) {
      state.songindex = payload
    },
    set_songlist (state, payload) {
      state.playlist = payload
    },
    push_songlist (state, payload) {
      state.playlist.push(payload)
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
    },
    set_userId (state, payload) {
      state.userId = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
