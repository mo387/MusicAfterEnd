<template>
  <div class="recommend">
    <div class="top">
      <swiper-3-d :picture="image" />
    </div>
    <!-- 推荐歌单 -->
    <container title="推荐歌单" :content="songlist_content" />
    <!-- 播客 -->
    <container title="播客" :content="play_content" :play="false" :num="false" />
    <!-- 听听 -->
    <container
      title="听听"
      :content="listen_content"
      :singer="false"
      numposi="bottom"
      icon_num="iconfont icon-redu"
    />
    <!-- 看看 -->
    <container title="看看" :content="watch_content" size="254" icon_num="iconfont icon-redu" />
  </div>
</template>

<script>
import swiper3D from '../../../components/swiper3D.vue'
import Container from '../../../components/container.vue'
export default {
  data () {
    return {
      image: [{
        src: require('@/assets/image/banner1.jpg')
      }, {
        src: require('@/assets/image/banner2.jpg')
      }, {
        src: require('@/assets/image/banner3.jpg')
      }, {
        src: require('@/assets/image/banner4.jpg')
      }],
      songlist_content: [{
        picurl: require('@/assets/image/0.jpeg')
      }, {
        picurl: require('@/assets/image/1.jpeg')
      }, {
        picurl: require('@/assets/image/2.jpeg')
      }, {
        picurl: require('@/assets/image/3.jpeg')
      }, {
        picurl: require('@/assets/image/4.jpeg')
      }, {
        picurl: require('@/assets/image/5.jpeg')
      }, {
        picurl: require('@/assets/image/6.jpeg')
      }, {
        picurl: require('@/assets/image/7.jpeg')
      }, {
        picurl: require('@/assets/image/8.jpeg')
      }, {
        picurl: require('@/assets/image/9.jpeg')
      }],
      play_content: [{
        picurl: require('@/assets/image/10.jpeg')
      }, {
        picurl: require('@/assets/image/11.jpeg')
      }, {
        picurl: require('@/assets/image/12.jpeg')
      }, {
        picurl: require('@/assets/image/13.jpeg')
      }, {
        picurl: require('@/assets/image/14.jpeg')
      }],
      listen_content: [{
        picurl: require('@/assets/image/15.jpeg')
      }, {
        picurl: require('@/assets/image/16.jpeg')
      }, {
        picurl: require('@/assets/image/17.jpeg')
      }, {
        picurl: require('@/assets/image/18.jpeg')
      }, {
        picurl: require('@/assets/image/19.jpeg')
      }],
      watch_content: [{
        picurl: require('@/assets/image/20.jpeg')
      }, {
        picurl: require('@/assets/image/21.jpeg')
      }, {
        picurl: require('@/assets/image/22.jpeg')
      }, {
        picurl: require('@/assets/image/23.jpeg')
      }]
    }
  },
  components: { swiper3D, Container }
}

</script>

<style scoped>
.recommend {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
}
.recommend::-webkit-scrollbar {
  width: 4px;
}
.recommend::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}
.top {
  width: 100%;
  height: 40%;
}
</style>
