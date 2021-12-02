<template>
  <div class="selectsong">
    <div class="title">找到100首单曲</div>
    <div class="link">
      <div class="single" v-for="item in link" :key="item.name">
        <router-link :to="item.url">{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: [{ name: '单曲', url: 'song' }, { name: '歌手', url: 'singer' }]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.selectsong {
  width: 100%;
  height: 100%;
}
.title {
  width: calc(100% - 56px);
  height: 40px;
  color: #333;
  line-height: 40px;
  padding: 16px 28px;
  font-size: 20px;
  font-weight: 600;
}
.link {
  padding: 0 20px;
  width: auto;
}
.single {
  float: left;
  margin: 10px;
  height: 1.5rem;
  line-height: 1.5rem;
}
a {
  color: #333;
  font-size: 20px;
  transition: 0.4s all ease-in-out;
}
.router-link-active {
  color: #000;
  font-weight: 600;
  font-size: 24px;
  position: relative;
}
.router-link-active::after {
  content: '';
  height: 8px;
  width: 50px;
  background-color: red;
  position: absolute;
  bottom: -10px;
  left: 0;
  border-radius: 4px;
}
</style>
