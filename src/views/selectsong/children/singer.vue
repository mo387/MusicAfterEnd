<template>
  <div class="singer">
    <div class="box">
      <div class="sing" v-for="(item,index) in singerList" :key="item">
        <div class="head">
          <img :src="img(index)" alt />
        </div>
        <div class="name">{{item.singerName}}</div>
        <a href="#" class="link">
          <i class="iconfont">22222222</i>
        </a>
      </div>
    </div>
    <!-- <page /> -->
  </div>
</template>

<script>
// import page from '../../../components/page.vue'
export default {

  components: {},
  data () {
    return {
      currentpage: 1,
      pageCount: 10
    }
  },
  computed: {
    ifcurrent (item) {
      return item === this.currentpage
    },
    img () {
      return (index) => {
        return require(`@/assets/image/${this.singerList[index].singerHeadUrl.substring(this.singerList[index].singerHeadUrl.lastIndexOf('\\') + 1)}`)
      }
    }
  },
  mounted () {
    this.$public.searchSinger(this)
  },
  props: {
    singerList: {
      type: Array
    }
  }

}
</script>

<style scoped>
.singer {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 88%;
}
.pagebox {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.sing {
  width: calc(100% - 60px);
  height: calc(14.3% - 20px);
  border-bottom: 1px solid #eee;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  position: relative;
}
.sing:hover {
  background: rgb(245, 245, 245);
}
.head {
  height: 60px;
  width: 60px;
  border: 1px solid #333;
  border-radius: 5px;
  overflow: hidden;
}
.head img {
  width: 60px;
  height: 60px;
}
.name {
  margin-left: 20px;
}
.link {
  position: absolute;
  right: 20px;
  color: #ec4141;
  z-index: 10;
}
</style>
