<template>
  <div class="searchHistory" id="searchHistory">
    <div v-if="this.$store.state.Searchcontent===''" class="history">
      <div class="title">
        搜索历史
        <a href="#" @click.prevent="DeleteAll">
          <i class="iconfont icon-lajitong" style="color:#999"></i>
        </a>
      </div>
      <div class="single" v-for="item in history" :key="item" @click="intoValue(item)">
        <a href="#" style="padding-right:20px">{{item}}</a>
        <a href="#" @click.stop="Delete(item)">
          <i class="iconfont icon-cuowuguanbiquxiao"></i>
        </a>
      </div>
    </div>
    <div v-else class="searchcontent">
      搜“
      <span style="color:blue">{{this.$store.state.Searchcontent}}</span>”的相关结果
      <div class="guesstitle" v-show="this.$store.state.Searchguess.song.length !== 0">
        <i class="iconfont icon-icon-test"></i>歌曲
      </div>
      <a href="#">
        <div
          :key="item"
          v-for="item in this.$store.state.Searchguess.song"
          class="songsearch"
          @click="intoValue(item)"
        >{{item}}</div>
      </a>
      <div class="guesstitle" v-show="this.$store.state.Searchguess.singer.length !== 0">
        <i class="iconfont icon-geshou"></i>歌手
      </div>
      <a href="#">
        <div
          :key="item"
          v-for="item in this.$store.state.Searchguess.singer"
          class="singersearch"
          @click="intoValue(item)"
        >{{item}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      history: []
    }
  },
  mounted () {
    this.history = JSON.parse(localStorage.getItem('historySelect'))
  },
  updated () {
    this.history = JSON.parse(localStorage.getItem('historySelect'))
  },
  methods: {
    Delete (item) {
      this.history.splice(this.history.indexOf(item), 1)
      const result = JSON.stringify(this.history)
      localStorage.setItem('historySelect', result)
    },
    intoValue (item) {
      this.$store.commit('set_content', item)
      let url = this.$route.href
      url = url.substr(url.lastIndexOf('/') + 1, url.length)
      if (url !== 'selectsong') {
        this.$router.push('/selectsong')
      }
      this.$public.searchSong(this)
    },
    DeleteAll () {
      this.history = []
      const result = JSON.stringify(this.history)
      localStorage.setItem('historySelect', result)
    }
  }
}
</script>

<style scoped>
.searchHistory {
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 2px 2px 10px #aaa;
  transition: 0.6s all ease-in-out;
  opacity: 0;
  display: none;
  padding-bottom: 20px;
}
.history {
  width: calc(100% - 40px);
  height: 160px;
  padding: 20px;
}
.single {
  height: 1rem;
  border: 1px solid #999;
  float: left;
  margin: 8px;
  padding: 0.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.single:hover {
  background-color: rgba(242, 242, 242);
}
.single a {
  display: block;
  font-size: 16px;
  color: #333;
}
.single a i {
  font-size: 20px;
  visibility: hidden;
}
.single:hover a i {
  visibility: visible;
}
.title {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #000;
  font-weight: 600;
}
.searchcontent {
  width: 100%;
  height: auto;
  font-size: 18px;
  padding: 10px;
}
.guesstitle {
  width: calc(100% - 20px);
  height: 30px;
  background-color: rgb(240, 240, 240);
  margin: 10px 0 10px -10px;
  float: left;
  line-height: 30px;
  padding: 0 10px;
}
.guesstitle i {
  color: #000;
}
.singersearch,
.songsearch {
  width: calc(100% - 40px);
  height: 40px;
  float: left;
  margin-left: -10px;
  padding: 0 20px;
  line-height: 40px;
  color: #333;
  font-size: 18px;
}
.singersearch:hover,
.songsearch:hover {
  background-color: rgb(242, 242, 242);
}
</style>
