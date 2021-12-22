<template>
  <div class="songWord">
    <div class="left">
      <img :src="pic" alt />
    </div>
    <div class="right">
      <img :src="pic" alt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    songword () {
      return this.$store.state.currentsongWord
    },
    pic () {
      return this.$store.state.playlist.length === 0 ? '' : require(`@/assets/image/${this.$store.state.playlist[this.$store.state.songindex].imgUrl.substring(this.$store.state.playlist[this.$store.state.songindex].imgUrl.lastIndexOf('/') + 1)}`)
    }
  }
}
</script>

<style scoped>
.songWord {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  z-index: -100;
}
.right,
.left {
  height: 100%;
  width: 200px;
  position: absolute;
  font-size: 60px;
  writing-mode: vertical-rl;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s all ease-in-out;
}
.right {
  width: 20vw;
  right: 5vw;
  transform: translateX(50%);
}
.right img {
  height: 100%;
  transform: rotateY(180deg);
}
.left {
  width: 20vw;
  left: 5vw;
  transform: translateX(-50%);
}
.left img {
  height: 100%;
}
</style>
