<template>
  <div class="userSongList">
    <div class="pic">
      <img :src="img" alt />
    </div>
    <div class="tabbar">
      <router-link to="song">歌曲</router-link>
    </div>
    <div class="routerView">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    img () {
      return this.$store.state.rightNowSongList.length === 0 ? '' : require(`@/assets/image/${this.$store.state.rightNowSongList.song[0].imgUrl.substring(this.$store.state.rightNowSongList.song[0].imgUrl.lastIndexOf('/') + 1)}`)
    }
  }
}
</script>

<style scoped>
.userSongList {
  height: 100%;
  width: 100%;
  position: relative;
}
.pic {
  height: 10vw;
  width: 10vw;
  position: absolute;
  top: 30px;
  left: 30px;
}
.pic img {
  width: 10vw;
  height: 10vw;
}
.tabbar {
  position: absolute;
  top: calc(10vw + 60px);
  left: 30px;
}
a {
  color: #000;
  font-size: 16px;
}
.router-link-active {
  font-weight: 600;
  font-size: 24px;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  height: 8px;
  width: 50px;
  background-color: #ec4141;
  border-radius: 25px;
}
.routerView {
  position: absolute;
  top: calc(10vw + 120px);
  width: 100%;
  height: calc(100% - 10vw - 120px);
}
</style>
