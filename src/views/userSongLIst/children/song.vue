<template>
  <div class="song">
    <table class="table">
      <th style="width:3%;text-align:left;"></th>
      <th style="width:4%;text-align:left"></th>
      <th style="width:31%;text-align:left">单曲名称</th>
      <th style="width:31%;text-align:left">歌手</th>
      <th style="width:31%;text-align:left">时长</th>
      <tr v-for="(item,index) in songlist" :key="item" @dblclick="add(item)">
        <td>{{index+1}}</td>
        <td>
          <a href="#">
            <i class="iconfont icon-xihuan" :style="like"></i>
          </a>
          <a href="#">
            <i class="iconfont icon-xiazai"></i>
          </a>
        </td>
        <td>{{item.songName.replace('.mp3','')}}</td>
        <td>{{item.singerName}}</td>
        <td>3</td>
      </tr>
    </table>
    <!-- <page /> -->
  </div>
</template>

<script>
// import page from '../../../components/page.vue'
export default {
  // components: { page },
  mounted () {
    // const SongListContent = this.$store.state.rightNowSongList
  },
  computed: {
    songlist () {
      return this.$store.state.rightNowSongList.song
    },
    like () {
      return this.$store.state.rightNowSongListName === 'Myfavouriteee' ? 'color: #ec4141' : 'color: white;-webkit-text-stroke: 1px #000'
    }
  },
  methods: {
    add (item) {
      this.$store.commit('push_songlist', item)
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
.table tr {
  height: 2rem;
  line-height: 2rem;
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
