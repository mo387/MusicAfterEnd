<template>
  <div class="singlesong" @dblclick="doubleclick">
    <div
      class="songname"
      style="color:#333;font-size:16px"
    >{{this.$store.state.playlist.length===0?'':singlesong.songName.replace('.mp3','')}}</div>
    <div class="singername">
      <a
        href="#"
      >{{this.$store.state.playlist.length===0?'':singlesong.imgUrl.substring(singlesong.imgUrl.lastIndexOf('/') + 1, singlesong.imgUrl.lastIndexOf('.'))}}</a>
    </div>
    <div class="icon" v-show="songindex === this.$store.state.songindex">
      <i class="iconfont icon-yinliang"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singlesong: {
      type: Object
    },
    songindex: {
      type: Number
    }
  },
  methods: {
    doubleclick () {
      this.$store.commit('set_song', this.songindex)
    }
  }
}
</script>

<style scoped>
.singlesong {
  width: calc(100% - 20px);
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  transition: 0.4s all ease-in-out;
  position: relative;
}
.singlesong:hover {
  background-color: rgb(238, 238, 238);
}
.singername {
  position: absolute;
  left: 50%;
  top: 0;
}
.singername a {
  color: #999;
  font-size: 16px;
}
.icon {
  position: absolute;
  right: 20px;
  font-size: 18px;
  color: red;
  top: 50%;
  transform: translateY(-50%);
}
</style>
