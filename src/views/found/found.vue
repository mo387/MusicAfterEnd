<template>
  <div class="found" id="found">
    <div class="router">
      <router-link v-for="item in found" :to="item.route" :key="item">{{item.content}}</router-link>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      found: [{
        content: '个性推荐',
        route: '/found/recommend'
      }, {
        content: '专属订制',
        route: '/found/exclusive'
      }, {
        content: '歌单',
        route: '/found/songlist'
      }, {
        content: '排行榜',
        route: '/found/rankinglist'
      }, {
        content: '歌手',
        route: '/found/singer'
      }, {
        content: '最新音乐',
        route: '/found/new'
      }]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.found {
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out;
  position: relative;
}
.found .container {
  width: 100%;
  height: calc(100% - 40px - 1.5em);
  background-color: #fff;
  position: absolute;
  top: calc(1.5rem + 40px);
}
.found .router {
  padding: 20px 0 20px 25px;
  width: calc(100% - 25px);
  height: 1.5rem;
  display: flex;
  font-size: 0;
  position: absolute;
  z-index: 10;
  background-color: #fff;
}
.router-link-active {
  font-size: 22px;
  font-weight: 600;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 80px;
  height: 4px;
  background-color: #ec4141;
  z-index: 10;
  border-radius: 3px;
  transform: translate(-50%);
}
a {
  width: 120px;
  letter-spacing: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 18px;
  position: relative;
  transition: 0.2s all ease-in-out;
}
</style>
