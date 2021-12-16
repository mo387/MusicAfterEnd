<template>
  <div class="page">
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
  </div>
</template>

<script>
export default {
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
  methods: {
    last () {
      if (this.currentpage !== 1) {
        this.currentpage--
      }
    },
    next () {
      if (this.currentpage !== this.pageCount) {
        this.currentpage++
      }
    },
    choosethis (index) {
      this.currentpage = index
    }
  }
}
</script>

<style scoped>
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
