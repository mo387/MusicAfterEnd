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
    Searchguess: {},
    // 当前用户的歌单
    songList: [],
    rightNowSongListName: '',
    rightNowSongList: [],
    // 用户在歌单页面选择的页码
    pageIndex: 0,
    // 搜索结果数目
    resultNum: 0,
    singerNum: 0,
    // 用户id
    userId: '',
    // 宇皓加的用户昵称
    userNickName: '',
    // 宇皓加的用户头像
    userHeadUrl: '',
    songWordTimer: null,
    songWordIndex: 0,
    SearchSong: [],
    SearchSinger: []
  },
  mutations: {
    set_rightNowSongListName (state, payload) {
      state.rightNowSongListName = payload
    },
    set_singerNum (state, payload) {
      state.singerNum = payload
    },
    set_Searchguess (state, payload) {
      state.Searchguess = payload
    },
    set_SearchSong (state, payload) {
      state.SearchSong = payload
    },
    set_SearchSinger (state, payload) {
      state.SearchSinger = payload
    },
    set_songWordIndex (state, payload) {
      if (state.currentsongWord === '') {
        return
      }
      state.songWordIndex = payload
    },
    // payload就是调用时，传过来的参数
    // 张文凯添加的方法
    set_currentsongWord (state, payload) {
      state.currentsongWord = payload
      const songword = document.getElementById('songword')
      const single = document.getElementById(state.songWordIndex)
      console.log(single)
      const scrollTop = songword.scrollTop
      const offsetTop = single.offsetTop - 250
      setTimeout(() => {
        clearInterval(state.songWordTimer)
      }, 320)
      state.songWordTimer = setInterval(() => {
        songword.scrollTop += Math.round((offsetTop - scrollTop) / 16)
      }, 20)
      // songword.scrollTop = single.offsetTop - 250
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
      let songlist = localStorage.getItem('songlist')
      songlist = JSON.parse(songlist)
      let flag = false
      for (let i = 0; i < state.playlist.length; i++) {
        if (songlist[i].songName === payload.songName) {
          flag = true
          state.songindex = i
          break
        }
      }
      if (!flag) {
        songlist.push(payload)
        state.playlist.push(payload)
        state.songindex = state.playlist.length - 1
        localStorage.setItem('songlist', JSON.stringify(songlist))
      }
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
    },
    set_isLogin (state, payload) {
      state.islogin = payload
    },
    set_userNickName (state, payload) {
      state.userNickName = payload
    },
    set_userHeadUrl (state, payload) {
      state.userHeadUrl = payload
    },
    set_songList (state, payload) {
      state.songList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
