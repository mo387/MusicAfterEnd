<template>
  <div class="container">
    <div class="box">
      <div class="boxtitle">
        <a href="#">
          <tab :content="title" style="font-size:22px" :ifhover="false">
            <template v-slot:icon_right>
              <i class="iconfont icon-xiangyou_fanhui" style="color:#666"></i>
            </template>
          </tab>
        </a>
      </div>
      <div class="boxcontent">
        <a href="#" v-for="item in content" :key="item">
          <list
            text="独家推送独家推送推送"
            number="1111111111111111"
            singer="22222"
            :leng="size"
            :ifplay="play"
            :ifsing="singer"
            :ifnum="num"
            :num_position="numposi"
            :icon="icon_num"
            :sing_icon="icon_sing"
            :src="item.picurl"
          ></list>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '@/components/tab.vue'
import List from '@/components/list.vue'
export default {
  components: { List, Tab },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      default: 200
    },
    play: {
      type: Boolean,
      default: true
    },
    num: {
      type: Boolean,
      default: true
    },
    singer: {
      type: Boolean,
      default: true
    },
    numposi: {
      type: String,
      default: 'top'
    },
    icon_sing: {
      type: String,
      default: 'iconfont icon-bofang add'
    },
    icon_num: {
      type: String,
      default: 'iconfont icon-bofang add'
    }
  },
  mounted () {
    console.log('加载了' + typeof (this.play))
  }
}
</script>

<style scoped>
.box {
  width: calc(100% - 10px);
  overflow: hidden;
  padding: 5px;
}
.boxtitle {
  width: 150px;
  height: 4rem;
  font-weight: 600;
  padding-left: 50px;
}
.boxcontent {
  padding: 0 50px;
}
</style>
