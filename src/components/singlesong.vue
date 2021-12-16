<template>
  <div class="singlesong">
    <div class="songname">xxx歌</div>
    <div class="singername">
      <a href>xxx歌手</a>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
