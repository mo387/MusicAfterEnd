<template>
  <div class="song">
    <table class="table">
      <th style="width:3%;text-align:left"></th>
      <th style="width:4%;text-align:left"></th>
      <th style="width:31%;text-align:left">单曲名称</th>
      <th style="width:31%;text-align:left">歌手</th>
      <th style="width:31%;text-align:left">时长</th>
      <tr v-for="(item,index) in songList" :key="item" @dblclick="doubleclick(item)">
        <td>{{index+1}}</td>

        <td>
          <a href="#">
            <i class="iconfont icon-woxihuande"></i>
          </a>
          <a href="#">
            <i class="iconfont icon-xiazai"></i>
          </a>
        </td>

        <td>{{item.songName.replace('.mp3','')}}</td>
        <td>{{item.imgUrl.substring(item.imgUrl.lastIndexOf('/') + 1, item.imgUrl.lastIndexOf('.'))}}</td>
        <td>{{item.songTime}}</td>
      </tr>
    </table>
    <!-- <page style="position:absolute;bottom:30px" /> -->
    <!-- <div class="page">
      <div class="pagebox">
        <div class="single" @click="last">＜</div>
        <div
          class="single"
          v-for="index in pageCount"
          :key="index"
          :class="{choose:this.currentpage===index}"
          @click="choosethis(index)"
        >{{index}}</div>
        <div class="single" @click="next">＞</div>
      </div>
    </div>-->
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
    }
  },
  mounted () {
    // console.log(this.$store.state.Searchcontent)
    this.$public.searchSong(this)
  },
  methods: {
    doubleclick (item) {
      this.$store.commit('push_songlist', item)
    }
  },
  props: {
    songList: {
      type: Array
    }
  }
}
</script>

<style scoped>
.song {
  width: 92%;
  height: 100%;
  overflow-y: auto;
  padding: 0 4%;
  user-select: none;
}
::-webkit-scrollbar {
  width: 6px;
  /*height: 4px;*/
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}
.table {
  width: 100%;
  border: 0px solid;
  border-collapse: collapse;
}
.table tr td {
  border: 0px solid;
}
.table tr:nth-child(even) {
  background-color: rgb(246, 246, 246);
  border: none;
}
.table tr:hover {
  background-color: rgb(240, 240, 240);
}
.table th {
  height: 2rem;
  line-height: 2rem;
}
.table tr td a {
  display: block;
  color: #333;
  height: 100%;
  line-height: 100%;
  width: 50%;
  float: left;
}
.table tr {
  height: 2.4rem;
}
.page {
  width: 100%;
  height: 60px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagebox {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.single {
  height: 20px;
  width: 20px;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  border-radius: 4px;
  font-size: 12px;
}
.single:hover {
  background-color: rgb(240, 240, 240);
}
.choose {
  background-color: #ec4141;
  color: white;
  font-weight: 600;
}
.choose:hover {
  background-color: #ec4141;
  color: white;
  font-weight: 600;
}
</style>
