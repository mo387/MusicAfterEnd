<template>
  <div class="songlist">
    <div class="top">
      <div class="left">
        <span class="leftTop">当前播放</span>
        <span class="leftBottom">共{{num}}首</span>
      </div>
      <div class="right">
        <div class="rightBottom">
          <a href="#">收藏全部</a>
          <a href="#" style="color:#5c88d9">清空列表</a>
        </div>
      </div>
    </div>
    <div class="list">
      <singlesong />
    </div>
  </div>
</template>

<script>
import singlesong from './singlesong.vue'

export default {
  components: { singlesong },

  data () {
    return {
      num: 0
    }
  }
}
</script>

<style scoped>
.songlist {
  width: 100%;
  height: 100%;
}
.top {
  padding: 16px 16px;
  height: 80px;
  width: calc(100% - 32px);
  font-weight: 600;
  font-size: 24px;
  border: 1px solid #ddd;
  display: flex;
}
.left {
  width: 50%;
}
.left span {
  display: block;
}
.leftTop {
  line-height: 54px;
}
.leftBottom {
  font-size: 14px;
  color: #aaa;
  font-weight: 500;
}
.right {
  width: 50%;
  position: relative;
}
.rightBottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
}
.rightBottom a {
  color: #666;
  font-weight: 500;
  font-size: 16px;
  display: block;
}
.list {
  width: 100%;
  height: calc(100% - 112px);
  overflow-y: auto;
}
</style>
