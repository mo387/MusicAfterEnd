<template>
  <div class="player">
    <a href="#" @click.prevent="stop">
      <div class="stop">
        <i :class="play"></i>
      </div>
    </a>
    <a href="#" @click.prevent="last">
      <div class="last">
        <i class="iconfont icon-shangyishou" title="上一首"></i>
      </div>
    </a>
    <a href="#" @click.prevent="next">
      <div class="next">
        <i class="iconfont icon-xiayishou" title="下一首"></i>
      </div>
    </a>
    <a href="#" @click.prevent>
      <div class="method">
        <i :class="list[index].class" @click="change" :title="list[index].title"></i>
      </div>
    </a>
    <a href="#" @click.prevent>
      <div class="word">词</div>
    </a>
    <div class="slide_back">
      <div class="current">{{current}}</div>
      <div class="end">{{end}}</div>
    </div>
    <div class="slide_forward" :style="{width:wid}"></div>
    <audio ref="audio" id="audio">
      <source />
    </audio>
  </div>
</template>
<script>
export default {
  methods: {
    stop () {
      const audio = this.$refs.audio
      if (audio.paused) {
        audio.play()
        this.play = 'iconfont icon-24gf-pause2'
        this.$store.commit('set_play', true)
      } else {
        audio.pause()
        this.play = 'iconfont icon-bofang'
        this.$store.commit('set_play', false)
      }
    },
    next () {
      this.play = 'iconfont icon-24gf-pause2'
      const audio = this.$refs.audio
      audio.pause()
      this.$store.commit('set_play', false)
      this.songindex = (this.songindex + 1) % this.playList.length
      this.$store.commit('set_song', this.songindex)
      audio.src = this.playList[this.songindex].url
      this.init()
      audio.play()
      this.$store.commit('set_play', true)
    },
    init () {
      this.current = '00:00'
      this.wid = '0%'
      this.strtime = 0
      clearInterval(this.timer)
      clearInterval(this.strtimer)
    },
    last () {
      this.play = 'iconfont icon-24gf-pause2'
      const audio = this.$refs.audio
      audio.pause()
      this.$store.commit('set_play', false)
      this.songindex = (this.songindex - 1 + this.playList.length) % this.playList.length
      audio.src = this.playList[this.songindex].url
      this.$store.commit('set_song', this.songindex)
      this.init()
      audio.play()
      this.$store.commit('set_play', true)
    },
    change () {
      this.index = (this.index + 1) % this.list.length
      const audio = this.$refs.audio
      const first = function liexun () {
        const audio = this.$refs.audio
        this.init()
        this.songindex = (this.songindex + 1) % this.playList.length
        this.$store.commit('set_song', this.songindex)
        audio.src = this.playList[this.songindex].url
        audio.play()
        this.$store.commit('set_play', true)
      }
      const second = function single () {
        const audio = this.$refs.audio
        this.init()
        audio.play()
        this.$store.commit('set_play', true)
      }
      const third = function random () {
        const audio = this.$refs.audio
        this.init()
        const temp = this.songindex
        this.songindex = Math.floor(Math.random() * 1000) % this.playList.length
        console.log(Math.floor(Math.random() * 1000) % this.playList.length)
        if (this.songindex === temp) {
          this.songindex = (this.songindex - 1 + this.playList.length) % this.playList.length
        }
        this.$store.commit('set_song', this.songindex)
        audio.src = this.playList[this.songindex].url
        audio.play()
        this.$store.commit('set_play', true)
      }
      const forth = function lie () {
        const audio = this.$refs.audio
        this.init()
        if (this.songindex < this.playList.length) {
          this.songindex = (this.songindex + 1) % this.playList.length
          this.$store.commit('set_song', this.songindex)
          audio.src = this.playList[this.songindex].url
          audio.play()
          this.$store.commit('set_play', true)
        }
      }
      switch (this.index) {
        case 0:
          audio.onended = first.bind(this)
          break
        case 1:
          audio.onended = second.bind(this)
          break
        case 2:
          audio.onended = third.bind(this)
          break
        case 3:
          audio.onended = forth.bind(this)
          break
      }
    }
  },
  data () {
    return {
      list: [
        { class: 'iconfont icon-liebiaoxunhuan', title: '列表循环' },
        { class: 'iconfont icon-danquxunhuan', title: '单曲循环' },
        { class: 'iconfont icon-24gl-shuffle', title: '随机播放' },
        { class: 'iconfont icon-shunxubofang', title: '顺序播放' }],
      index: 0,
      wid: '0%',
      play: 'iconfont icon-bofang',
      timer: null,
      current: '00:00',
      end: '00:00',
      strtimer: null,
      strtime: 0,
      songindex: 0
    }
  },
  computed: {
    that () {
      return this
    }
  },
  props: {
    playList: {
      type: Array
    }
  },
  watch: {
  },
  mounted () {
    const audio = this.$refs.audio
    audio.src = this.playList[this.songindex].url
    audio.addEventListener('canplay', () => {
      const end = parseInt(audio.duration)
      const endSecond = parseInt(end % 60)
      const endMin = parseInt(end / 60)
      const endStr = (endMin >= 10 ? endMin : '0' + endMin) + ':' + (endSecond >= 10 ? endSecond : '0' + endSecond)
      this.end = endStr
    })
    audio.addEventListener('play', () => {
      this.timer = setInterval(() => {
        const rate = parseFloat(((audio.currentTime + 1) / audio.duration) * 100).toFixed(2) + '%'
        this.wid = rate
      }, 1000)
      this.strtimer = setInterval(() => {
        if (!audio.paused) {
          this.strtime++
          const current = this.strtime
          const currrentSecond = parseInt(current % 60)
          const currentMin = parseInt(current / 60)
          const currentStr = (currentMin >= 10 ? currentMin : '0' + currentMin) + ':' + (currrentSecond >= 10 ? currrentSecond : '0' + currrentSecond)
          this.current = currentStr
          // 张文凯编写，当对应下标歌词对应的时间与此刻时间相等时把该歌词传入$store
          const songWord = this.$store.state.songWord
          for (var i = 1; i < songWord.length; i++) {
            // eslint-disable-next-line camelcase
            const songWord_timeMin = parseInt(this.$store.state.songWord[i].time.substring(0, 2), 10)
            // eslint-disable-next-line camelcase
            const songWord_timeSecond = parseInt(this.$store.state.songWord[i].time.substring(3, 5), 10)
            // console.log('i=' + i)//success
            // console.log(this.$store.state.songWord[i].time.substring(0, 2))//success
            // console.log(this.$store.state.songWord[i].time.substring(3, 5))//success
            // eslint-disable-next-line camelcase
            if (songWord_timeMin === currentMin && songWord_timeSecond === currrentSecond) {
              // console.log('1')
              const currentSongWord = this.$store.state.songWord[i].word
              this.$store.commit('set_currentsongWord', currentSongWord)
              // console.log('2')
              break
            }
          }
          console.log(this.$store.state.currentsongWord)
        }
      }, 1000)
    })
    audio.addEventListener('pause', () => {
      clearInterval(this.timer)
      clearInterval(this.strtimer)
    })
    audio.onended = () => {
      const audio = document.getElementById('audio')
      this.init()
      this.songindex = (this.songindex + 1) % this.playList.length
      audio.src = this.playList[this.songindex].url
      audio.play()
      this.$store.commit('set_play', true)
    }
  }
}
</script>

<style scoped>
.player {
  position: absolute;
  left: 50%;
  width: 28%;
  height: 80%;
  transform: translateX(-50%);
  user-select: none;
}
.player a {
  display: block;
  width: 0;
  height: 0;
}
.last,
.next,
.stop,
.method,
.word {
  width: 42px;
  height: 42px;
  border-radius: 30px;
  position: absolute;
  left: 32%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  transition: all 0.4s ease-in-out;
}
.next {
  left: 68%;
}
.stop {
  left: 50%;
  background-color: #0000000a;
}
.method {
  left: 18%;
  font-size: 24px;
  color: #000;
  font-weight: 600;
}
.word {
  left: 82%;
  font-size: 18px;
}
.last:hover,
.next:hover,
.method:hover,
.word:hover {
  color: #ec4141;
}
.stop:hover {
  background-color: #00000019;
}
.slide_back,
.slide_forward {
  width: 100%;
  position: absolute;
  height: 4px;
  border-radius: 2px;
  background-color: #ccc;
  top: 80%;
  transform: translateY(-50%);
  transition: 0.6s width ease-in-out;
  transition: 0.2s height ease-in-out;
}
.slide_forward {
  background-color: #ec4141;
}
.slide_back:hover,
.slide_forward:hover {
  height: 6px;
}
.slide_forward:hover::before {
  content: '';
  height: 10px;
  width: 10px;
  border-radius: 4px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ec4141;
}
.end,
.current {
  position: absolute;
  font-size: 12px;
  color: #777;
  top: 50%;
  transform: translateY(-50%);
}
.current {
  left: -40px;
}
.end {
  right: -40px;
}
</style>
