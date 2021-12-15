<template>
  <div class="music">
    <div class="front" id="music_front">
      <a href="#" @click.prevent="showdetail">
        <div class="pic">
          <img :src="img" :alt="singer" />
        </div>
      </a>
      <div class="title" @click.prevent="showdetail">
        <a href="#" class="name">{{songname}}</a>
        &nbsp;
        <a href="#">
          <i class="iconfont icon-xihuan add" @click.stop="like" :style="love"></i>
        </a>
      </div>
      <div class="singer">
        <a href="#">{{singer}}</a>
      </div>
    </div>
    <div class="back" id="music_back">
      <div class="icon">
        <a href="#" title="加入喜欢">
          <i class="iconfont icon-woxihuande"></i>
        </a>
      </div>
      <div class="icon">
        <a href="#" title="收藏">
          <i class="iconfont icon-24gl-folderHeart"></i>
        </a>
      </div>
      <div class="icon">
        <a href="#" title="下载">
          <i class="iconfont icon-xiazai"></i>
        </a>
      </div>
      <div class="icon">
        <a href="#" title="分享">
          <i class="iconfont icon-fenxiang"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    like () {
      if (this.love !== 'color: #ec4141') {
        // 安军，在这部分发送网络请求，添加这首歌到喜欢的歌单
        this.love = 'color: #ec4141'
      } else {
        this.love = 'color: white;-webkit-text-stroke: 1px #000'
      }
    },
    async showdetail () {
      const front = document.getElementById('music_front')
      const back = document.getElementById('music_back')
      const detail = document.getElementById('detail')
      const xia = document.getElementById('xia')
      detail.style.top = '0'
      xia.style.transform = 'rotate(90deg)'
      front.style.transform = 'rotateX(180deg)'
      back.style.transform = 'rotateX(0)'
      setTimeout(() => {
        this.$store.commit('set_color', 'color:#000')
      }, 600)
      // 发送网络请求
      // console.log('1')
      const thissongindex = this.$store.state.songindex
      // console.log(thissongindex)
      const songID = this.$store.state.playlist[thissongindex].songID
      // console.log(songID)
      const parms = { songID: songID }
      const songWordObj = await this.$http({ url: '/songWord', params: parms })
      // console.log(songWordObj.data.songWord)// success
      this.$store.commit('set_songWord', songWordObj.data.songWord)
      const songWord = this.$store.state.songWord
      console.log(songWord[1])// success
      // eslint-disable-next-line camelcase
      // const songWord_word = songWordObj.data.songWord[1].word
      // eslint-disable-next-line camelcase
      // const songWord_time = songWordObj.data.songWord[1].time
      // console.log(songWord_word)
      // console.log(songWord_time)
      // const audio = document.getElementById('audio')
    }
  },
  props: {
    songlist: {
      type: Array
    }
  },
  data () {
    return {
      love: 'color: white;-webkit-text-stroke: 1px #000',
      songWord: []
    }
  },
  computed: {
    songname () {
      return this.$store.state.playlist[this.$store.state.songindex].songname
    },
    singer () {
      return this.$store.state.playlist[this.$store.state.songindex].singer
    },
    img () {
      return this.$store.state.playlist[this.$store.state.songindex].img
    }
  }
}
</script>

<style scoped>
.music {
  width: 20%;
  height: calc(100% - 20px);
  position: absolute;
  user-select: none;
  z-index: 22;
}
.back,
.front {
  width: 100%;
  height: 100%;
  transition: 1s all ease-in-out;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
/* .music:hover .back {
  transform: rotateX(0);
}
.music:hover .front {
  transform: rotateX(180deg);
} */
.front a {
  display: block;
  width: 0;
  height: 0;
}
.back {
  transform: rotateX(-180deg);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.pic {
  height: 58px;
  width: 58px;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
}
.pic::before {
  content: '';
  transition: 0.6s all ease-in-out;
}
.pic::after {
  content: '';
  position: absolute;
  top: 70%;
  left: 50%;
  width: 40%;
  height: 40%;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-top-left-radius: 5px;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.6s all ease-in-out;
  opacity: 0;
}
.pic:hover::after {
  top: 60%;
  opacity: 1;
}
.pic:hover::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #00000060;
}
.pic img {
  width: 100%;
  height: 100%;
}
.title,
.singer {
  height: 30px;
  width: 190px;
  line-height: 30px;
  position: absolute;
  left: 74px;
  font-size: 20px;
}
.singer {
  top: 30px;
  white-space: nowrap;
}
.title a,
.singer a {
  color: #666;
  font-size: 18px;
}
.singer a {
  font-size: 14px;
}
.title a {
  display: inline;
  white-space: nowrap;
  overflow-x: auto;
  width: 100px;
}
.icon {
  height: 40px;
  width: 40px;
  border-radius: 25px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon a i {
  color: #999;
  font-size: 20px;
}
</style>
