<template>
  <div class="music">
    <a href="#">
      <div class="pic">
        <img :src="img" :alt="singer" />
      </div>
    </a>
    <div class="title">
      {{songname}}
      <a href="#">
        <i class="iconfont icon-xihuan add" @click.prevent="like" :style="love"></i>
      </a>
    </div>
    <div class="singer">
      <a href="#">{{singer}}</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    like () {
      if (this.love !== 'color: #ec4141') {
        this.love = 'color: #ec4141'
      } else {
        this.love = 'color: white;-webkit-text-stroke: 1px #000'
      }
    }
  },
  props: {
    songlist: {
      type: Array
    }
  },
  data () {
    return {
      love: 'color: white;-webkit-text-stroke: 1px #000'
    }
  },
  computed: {
    songname () {
      return this.$store.state.songlist[this.$store.state.songindex].songname
    },
    singer () {
      return this.$store.state.songlist[this.$store.state.songindex].singer
    },
    img () {
      return this.$store.state.songlist[this.$store.state.songindex].img
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
}
.music a {
  display: block;
  width: 0;
  height: 0;
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
</style>
