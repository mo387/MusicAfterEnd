<template>
  <div class="all">
    <div class="tip" id="__tip__">
      ~您真的舍得关掉我嘛~
      <button>
        <a href="#" @click="sure">不舍得</a>
      </button>
    </div>
    <Login />
    <!-- 顶部 -->
    <div class="top">
      <!-- logo -->
      <img src="@\assets\image\musiclogo.png" class="image" />
      <!-- 路由控制 -->
      <div class="topcontainer">
        <a href="#" @click.prevent="this.$router.back">
          <div class="route" style="left:340px">
            <i class="iconfont icon-xiangzuo_fanhui" :style="this.$store.state.color"></i>
          </div>
        </a>
        <a href="#" @click.prevent="this.$router.forward">
          <div class="route" style="left:400px">
            <i class="iconfont icon-xiangyou_fanhui" :style="this.$store.state.color"></i>
          </div>
        </a>
        <!-- 输入搜索框 -->
        <div class="input">
          <i class="iconfont icon-sousuo" :style="this.$store.state.color"></i>
          <input
            type="text"
            placeholder="搜索"
            :style="this.$store.state.color"
            @focus="selectsong"
            @blur="selectcomplite"
            @input="inputsearch"
            :value="this.$store.state.Searchcontent"
          />
          <search-history />
        </div>
        <a href="#" @click.prevent>
          <div class="listen">
            <i class="iconfont icon-yuyin"></i>
          </div>
        </a>
        <!-- 注册登录 -->
        <!-- 基础图标功能 -->
        <a href="#" @click.prevent>
          <div class="listen">
            <i class="iconfont icon-yuyin" :style="this.$store.state.color"></i>
          </div>
        </a>
        <a href="#" @click.prevent="item.fn" v-for="item in Icon_top" :key="item.icon">
          <div class="smallicontop" :style="item.left">
            <i :class="item.icon" style="font-size:24px" :style="this.$store.state.color"></i>
          </div>
        </a>
        <div class="login">
          <a href="#" @click.prevent="loginHand">
            <div class="hand"></div>
          </a>
          <div class="text">
            <a href="#" @click.prevent="loginText">{{logintext}}</a>
            <imformation />
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边 -->
    <div class="sidebar">
      <router-link v-for="item in Basic" :key="item" :to="item.route">
        <tab :content="item.content" />
      </router-link>
      <div class="text">我的音乐</div>
      <router-link v-for="item in User" :key="item" :to="item.route">
        <tab :content="item.content">
          <template v-slot:icon>
            <i :class="item.icon" style="font-size:22px"></i>
          </template>
        </tab>
      </router-link>
      <div class="text">创建的歌单</div>
      <!-- 歌单列表 -->
      <router-link to="/userSongList">
        <tab
          :content="item.content"
          v-for="(item,index) in this.$store.state.songList"
          :key="item"
          :class="this.songListIndex!==index ? 'songList':''"
          @click="chooseSongList(index)"
        >
          <template v-slot:icon>
            <i class="iconfont icon-icon-test" style="font-size:22px"></i>
          </template>
        </tab>
      </router-link>
    </div>
    <!-- 路由展示内容 -->
    <div class="view" ref="view">
      <router-view></router-view>
    </div>
    <!-- 播放列表 -->
    <div class="playlist" :style="listshow">
      <song-list />
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <player :playList="this.$store.state.playlist" />
      <music />
      <a href="#" @click.prevent @mouseover.prevent>
        <div class="smallicon" style="right:140px">
          <i class="iconfont icon-yinxiao" style="font-size:24px;color:#666"></i>
        </div>
      </a>
      <!-- 音量大小 -->
      <div class="smallicon" style="right:100px" @mouseleave="hide">
        <a href="#">
          <i
            class="iconfont icon-yinliang"
            style="font-size:24px;color:#666"
            @mouseover.prevent="show"
          ></i>
        </a>
        <div class="loud" :style="opacity">
          <div class="slide">
            <div class="slideout" :style="slide"></div>
            <div class="cicle" @mousedown="move" ref="cicle"></div>
          </div>
        </div>
      </div>
      <a href="#" @click.prevent @mouseover.prevent>
        <div class="smallicon" style="right:60px">
          <i class="iconfont icon-shequn" style="font-size:24px;color:#666"></i>
        </div>
      </a>
      <a href="#" @click.prevent="showlist" @mouseover.prevent>
        <div class="smallicon" style="right:20px">
          <i class="iconfont icon-24gf-playlist" style="font-size:24px;color:#666"></i>
        </div>
      </a>
    </div>
    <!-- 音乐详细 -->
    <detail />
  </div>
</template>

<script>
import Detail from './components/detail.vue'
import Imformation from './components/imformation.vue'
import Login from './components/login.vue'
import Music from './components/Music.vue'
import Player from './components/player.vue'
import SearchHistory from './components/searchHistory.vue'
import SongList from './components/songList.vue'
import tab from './components/tab.vue'

import debounce from './util/optimize/debounce'
export default {
  data () {
    return {
      Basic: [{
        content: '发现音乐',
        route: '/found'
      },
      {
        content: '博客',
        route: '/blog'
      },
      {
        content: '视屏',
        route: '/vedio'
      },
      {
        content: '朋友',
        route: '/friends'
      },
      {
        content: '直播',
        route: '/directSeeding'
      }, {
        content: '私人FM',
        route: '/privateFM'
      }
      ],
      User: [{
        content: '本地与下载',
        route: '/download',
        icon: 'iconfont icon-xiazai'
      },
      {
        content: '最近播放',
        route: '/recently',
        icon: 'iconfont icon-zuijinliulan'
      },
      {
        content: '我的音乐云盘',
        route: '/mymusic',
        icon: 'iconfont icon-yun_o'
      },
      {
        content: '我的播客',
        route: '/myplayer',
        icon: 'iconfont icon-yinle'
      },
      {
        content: '我的收藏',
        route: '/collect',
        icon: 'iconfont icon-shoucang'
      }],
      search: '',
      Icon_top: [{
        icon: 'iconfont icon-icon-',
        left: 'right:220px',
        fn () {
          console.log(1)
        }
      }, {
        icon: 'iconfont icon-shezhi',
        left: 'right:180px',
        fn () {
        }
      }, {
        icon: 'iconfont icon-fasongxinxi',
        left: 'right:140px',
        fn () {
          console.log(1)
        }
      }, {
        icon: 'iconfont icon-zuixiaohua',
        left: 'right:100px',
        fn () {
          const tip = document.getElementById('__tip__')
          setTimeout(() => {
            tip.style.opacity = '1'
          }, 100)
          tip.style.zIndex = '20'
          tip.style.display = 'flex'
        }
      }, {
        icon: 'iconfont icon-zuidahua',
        left: 'right:60px',
        fn () {
          const tip = document.getElementById('__tip__')
          setTimeout(() => {
            tip.style.opacity = '1'
          }, 100)
          tip.style.zIndex = '20'
          tip.style.display = 'flex'
        }
      }, {
        icon: 'iconfont icon-cuowuguanbiquxiao',
        left: 'right:20px',
        fn () {
          const tip = document.getElementById('__tip__')
          setTimeout(() => {
            tip.style.opacity = '1'
          }, 100)
          tip.style.zIndex = '20'
          tip.style.display = 'flex'
        }
      }],
      isshow: false,
      opacity: 'opacity:0',
      slide: 'height:73px',
      tip: 'opacity:0',
      listshow: '',
      logintext: '您还未登录',
      songListIndex: -1
    }
  },
  methods: {
    selectsong (event) {
      const searchHistory = document.getElementById('searchHistory')
      setTimeout(() => {
        searchHistory.style.opacity = '1'
      }, 50)
      searchHistory.style.display = 'block'
      document.onkeydown = (e) => {
        if (e.key === 'Enter' && this.$store.state.Searchcontent !== '') {
          let url = this.$route.href
          url = url.substr(url.lastIndexOf('/') + 1, url.length)
          if (url !== 'selectsong') {
            this.$router.push('/selectsong')
          }
          if (localStorage.getItem('historySelect') === null) {
            let selectContent = [this.$store.state.Searchcontent]
            console.log(selectContent)
            selectContent = JSON.stringify(selectContent)
            localStorage.setItem('historySelect', selectContent)
          } else {
            let selectContent = localStorage.getItem('historySelect')
            selectContent = JSON.parse(selectContent)
            selectContent.push(this.$store.state.Searchcontent)
            selectContent = [...new Set(selectContent)]
            localStorage.setItem('historySelect', JSON.stringify(selectContent))
          }
          event.target.blur()
          document.onkeydown = undefined
          searchHistory.style.opacity = '0'
          setTimeout(() => {
            searchHistory.style.display = 'none'
          }, 600)
        }
      }
    },
    selectcomplite () {
      const searchHistory = document.getElementById('searchHistory')
      document.onkeydown = undefined
      searchHistory.style.opacity = '0'
      setTimeout(() => {
        searchHistory.style.display = 'none'
      }, 600)
    },
    inputsearch: debounce(function (e) {
      this.$store.commit('set_content', e[0].target.value)
    }),
    show () {
      this.opacity = 'opacity:1'
    },
    hide () {
      this.opacity = 'opacity:0'
    },
    move (e) {
      const el = this.$refs.cicle
      const audio = document.getElementById('audio')
      const y = e.clientY - el.offsetTop
      document.onmousemove = (e) => {
        const top = e.clientY - y
        if (top > -5 && top < 123) {
          let result = ((123 - Math.abs(top)) / 123)
          if (result < 0.03) {
            result = 0
          }
          console.log(result)
          audio.volume = result.toFixed(2)
          this.slide = `height:${123 - top}px`
          el.style.top = top + 'px'
        }
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    showlist () {
      console.log(1)
      if (this.listshow === '') {
        this.listshow = 'right:0;opacity:1'
      } else {
        this.listshow = ''
      }
    },
    sure () {
      const tip = document.getElementById('__tip__')
      tip.style.opacity = '0'
      setTimeout(() => {
        tip.style.zIndex = '-20'
        tip.style.display = 'none'
      }, 300)
    },
    loginHand () {
      if (!this.$store.state.islogin) {
        this.showlogin()
      }
    },
    loginText () {
      if (!this.$store.state.islogin) {
        this.showlogin()
      } else {
        const imfo = document.getElementById('imformation')
        if (imfo.style.opacity === '1') {
          imfo.style.opacity = '0'
          setTimeout(() => {
            imfo.style.display = 'none'
          }, 600)
        } else {
          imfo.style.display = 'block'
          setTimeout(() => {
            imfo.style.opacity = '1'
          }, 10)
        }
      }
    },
    showlogin () {
      const login = document.getElementById('Login')
      login.style.display = 'block'
      setTimeout(() => {
        login.style.opacity = '1'
        login.style.transform = 'translate(-50%, -50%)'
      }, 50)
    },
    async chooseSongList (index) {
      this.songListIndex = index
      const IndexTosongList = this.$store.state.songList[index]
      const SongListName = IndexTosongList.content
      const SongListUser = IndexTosongList.userID
      const parms = { listName: SongListName, userID: SongListUser }
      const { data } = await this.$http({ url: '/songList', params: parms })
      this.$store.commit('set_rightNowSongList', data)
      // console.log(this.$store.state.rightNowSongList)
      // console.log(data)
    }
  },
  watch: {
  },
  components: { tab, Player, Music, SongList, Login, Detail, Imformation, SearchHistory },
  mounted () {
    // console.log(JSON.parse(localStorage.getItem('historySelect')))
    // const songlist = localStorage.getItem('songlist')
    // if (songlist === '') {
    //   localStorage.setItem('songlist', JSON.stringify([]))
    // } else {
    //   console.log('进来了')
    //   console.log('有缓存')
    //   this.$store.commit('set_songlist', songlist)
    // }
  }
}
</script>
<style scoped>
/* 整体 */
.all {
  width: 80vw;
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 5px 5px 10px #ddd, -5px -5px 10px #ddd;
  border-radius: 5px;
  overflow: hidden;
}
.top {
  width: calc(100% - 20px);
  height: 60px;
  background-color: #ec4141;
  position: absolute;
  padding: 10px;
  inset: 0;
  user-select: none;
}
.topcontainer {
  width: 95%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 13;
  left: 5%;
}
.bottom {
  width: calc(100% - 20px);
  height: 60px;
  position: absolute;
  box-shadow: 0 5px 10px #999;
  background-color: #fff;
  bottom: 0;
  left: 0;
  padding: 10px 10px;
  z-index: 15;
}
.sidebar {
  position: absolute;
  margin: 80px 0 80px 0;
  height: calc(100vh - 180px);
  width: 300px;
  box-shadow: 1px 0 10px #ddd;
  left: 0;
  top: 0;
  z-index: -1;
  padding: 10px 10px;
  overflow: hidden auto;
}
.sidebar::-webkit-scrollbar {
  width: 6px;
  /*height: 4px;*/
}
.sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}
.router-link-active div {
  font-size: 20px;
  font-weight: 600;
  background-color: rgb(238, 238, 238);
}
.text {
  padding: 20px 5px;
  font-size: 18px;
  color: #999;
  user-select: none;
}
.font {
  font-size: 20px;
}
.view {
  position: absolute;
  top: 80px;
  left: 320px;
  width: calc(100% - 320px);
  height: calc(100% - 160px);
}
.image {
  height: 40%;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
.route {
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background-color: #00000020;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.route:hover {
  background-color: #00000010;
}
.input {
  background-color: #00000020;
  position: absolute;
  left: 500px;
  height: 50%;
  width: 240px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
.input input {
  width: 80%;
  font-size: 14px;
  color: #ffffffdd;
  padding: 0 5px;
}
.input input::placeholder {
  color: #ffffffaa;
}
.listen {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: #00000010;
  color: #ddd;
  font-size: 20px;
}
.smallicontop,
.smallicon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  transition: 0.4s all ease-in-out;
}
.smallicontop i ::before,
.smallicon i::before {
  transition: 0.4s all ease-in-out;
}
.smallicon i:hover::before {
  color: #ec4141;
}
.smallicontop i:hover::before {
  color: #ddd;
}
.loud {
  background-color: #fff;
  height: 160px;
  width: 50px;
  border-radius: 5px;
  position: absolute;
  top: -160px;
  box-shadow: 3px 3px 10px #999;
  transition: 0.4s all ease-in-out;
}
.slide {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 5px;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  border-radius: 3px;
}
.cicle {
  height: 12px;
  width: 12px;
  background-color: #ec4141;
  position: absolute;
  border-radius: 8px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50%;
}
.slideout {
  position: absolute;
  height: 50%;
  width: 5px;
  bottom: 0;
  border-radius: 3px;
  background-color: #ec4141;
}
.playlist {
  position: absolute;
  top: 80px;
  right: -400px;
  height: calc(100% - 160px);
  width: 30%;
  background-color: #fff;
  overflow: hidden;
  z-index: 10;
  box-shadow: -3px 0 10px #bbb;
  opacity: 0;
  transition: 0.4s all ease-in-out;
}
.tip {
  height: 200px;
  width: 500px;
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 5px 5px 10px #ccc;
  z-index: 100;
  border-radius: 20px;
  display: none;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  font-size: 26px;
  opacity: 0;
  transition: 0.3s all ease-in-out;
  z-index: 20;
}
.tip button {
  position: absolute;
  bottom: 30px;
  background-color: #ec4141;
  padding: 4px 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 15px #f3b2b2;
}
.tip button a {
  color: white;
  font-size: 20px;
  display: block;
}
.login {
  height: 80%;
  width: 200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18%;
  z-index: 10;
}
.login .hand {
  height: 40px;
  width: 40px;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 25px;
  background-color: #fff;
}
.login .text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(5% + 46px);
}
.login .text a {
  color: #ccc;
  font-size: 16px;
}
input::-webkit-input-placeholder {
  color: #999 !important;
}
.songList {
  background-color: #fff !important;
  font-weight: 500 !important;
  font-size: 16px !important;
}
</style>
