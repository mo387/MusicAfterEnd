<template>
  <div class="detail" id="detail">
    <a href="#">
      <i class="iconfont icon-xiangyou_fanhui add" @click.prevent="hidden" id="xia"></i>
    </a>
    <div class="redioback"></div>
    <div :class="{ani:this.$store.state.isplay,redio:true}">
      <div class="pic">
        <img :src="img" alt />
      </div>
    </div>
    <div class="wordOfSong">
      <div class="title">
        <div class="songname">{{songname}}</div>
        <div class="singer">{{singer}}</div>
      </div>
      <div class="songword" id="songword">
        <p
          v-for="(songWord,index) in this.$store.state.songWord"
          :key="songWord"
          :class="{current:current(index),word:true,position:true}"
          :id="index"
        >{{songWord.word}}</p>
      </div>
    </div>
    <div class="discuss">
      <div class="discussTitle">全部评论</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hidden () {
      const detail = document.getElementById('detail')
      const xia = document.getElementById('xia')
      const front = document.getElementById('music_front')
      const back = document.getElementById('music_back')
      detail.style.top = '100%'
      xia.style.transform = 'rotate(-90deg)'
      front.style.transform = 'rotateX(0)'
      back.style.transform = 'rotateX(180deg)'
      setTimeout(() => {
        this.$store.commit('set_color', 'color:#fff')
      }, 100)
    }
  },
  data () {
    return {
      isAni: true
    }
  },
  computed: {
    img () {
      return this.$store.state.playlist.length === 0 ? '' : require(`@/assets/image/${this.$store.state.playlist[this.$store.state.songindex].imgUrl.substring(this.$store.state.playlist[this.$store.state.songindex].imgUrl.lastIndexOf('/') + 1)}`)
    },
    songname () {
      console.log('编号改变了')
      return this.$store.state.playlist.length === 0 ? '暂无歌曲' : this.$store.state.playlist[this.$store.state.songindex].songName.replace('.mp3', '')
    },
    singer () {
      if (this.$store.state.playlist.length !== 0) {
        const singer = this.$store.state.playlist[this.$store.state.songindex].imgUrl
        return singer.substring(singer.lastIndexOf('/') + 1, singer.lastIndexOf('.'))
      } else {
        return '~赶紧找找自己喜欢的吧~'
      }
    },
    current () {
      return (index) => {
        return this.$store.state.songWordIndex === index
      }
    }
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  height: calc(100% - 80px);
  position: absolute;
  z-index: 11;
  top: 100%;
  background-color: #fff;
  transition: 0.6s all ease-in-out;
  background-image: radial-gradient(
    circle 827px at 47.3% 48%,
    rgba(255, 255, 255, 1) 0%,
    rgb(230, 230, 230) 90%
  );
  user-select: none;
  overflow-y: auto;
}
.add {
  display: block;
  color: #999;
  font-size: 40px;
  position: absolute;
  margin: 10px 10px;
  top: 10px;
  left: 14px;
  transition: 0.3s all ease-in-out;
}
.redioback,
.redio {
  position: absolute;
  top: 200px;
  left: 180px;
  height: 300px;
  width: 300px;
  border-radius: 180px;
  background-color: #000;
}
.redioback {
  transform: scale(110%);
  background-color: #bbb;
  z-index: -1;
}
.redio .pic {
  position: absolute;
  height: 200px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 100px;
}
.redio .pic img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.wordOfSong {
  width: 500px;
  height: 480px;
  position: absolute;
  top: 140px;
  right: 520px;
}
.title {
  width: 100%;
  height: 20%;
  text-align: center;
}
.title .songname {
  font-size: 32px;
  color: #333;
  font-weight: 600;
  line-height: 48px;
}
.title .singer {
  color: #999;
  font-size: 14px;
}
.songword {
  height: 80%;
  width: 100%;
  overflow-y: auto;
  text-align: center;
}
.discuss {
  margin: auto;
  width: 24%;
  height: 80%;
  position: absolute;
  top: 12%;
  left: 70%;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  width: 2px;
  background-color: #bbb;
  border-radius: 10px;
}
.discussTitle {
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: #333;
  font-weight: 600;
}
.ani {
  animation: cicle 16s infinite linear;
}
@keyframes cicle {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.current {
  font-size: 20px;
  font-weight: 600;
}
.word {
  transition: 0.4s all ease-in-out;
}
</style>
