<template>
  <div class="swiper3D">
    <div class="single" v-for="(item,index) in pic" :key="item" :style="item.sty">
      <a href="#" v-if="index===one">
        <img :src="item.src" />
      </a>
      <img :src="item.src" v-else />
    </div>
    <div class="bottom">
      <div
        class="cicle"
        v-for="(item,index) in pic"
        :key="item"
        :style="{backgroundColor:index===one?'#ec4141':''}"
        @mouseover="update(index)"
      ></div>
    </div>
    <a href="#">
      <div class="last" @click.prevent="last">
        <i class="iconfont icon-xiangzuo_fanhui" style="color:white;font-size:22px"></i>
      </div>
    </a>
    <a href="#">
      <div class="next" @click.prevent="next">
        <i class="iconfont icon-xiangyou_fanhui" style="color:white;font-size:22px"></i>
      </div>
    </a>
  </div>
</template>

<script>
import { toRaw } from '@vue/reactivity'
export default {
  data () {
    return {
      pic: [],
      interval: 2000,
      one: 0,
      timer: null
    }
  },
  props: {
    picture: {
      type: Array,
      require: true
    },
    time: {
      type: Number,
      default: 5000
    },
    first: {
      type: Number,
      default: 0
    }
  },
  watch: {
    one (newv, oldv) {
      this.pic = this.change(newv, this.pic)
    }
  },
  mounted () {
    this.pic = toRaw(this.picture)
    this.interval = this.time
    this.one = this.first
    let diff = this.pic - 4
    if (diff < 0) {
      diff = Math.abs(diff)
      this.pic.slice(0, diff).forEach((item) => {
        this.pic.push({
          ...item
        })
      })
    }
    this.pic = this.change(this.one, this.pic)
    this.autoplay()
  },
  methods: {
    next () {
      clearInterval(this.timer)
      this.one = (this.one + 1 + this.pic.length) % this.pic.length
      this.autoplay()
    },
    last () {
      clearInterval(this.timer)
      this.one = (this.one - 1 + this.pic.length) % this.pic.length
      this.autoplay()
    },
    update (index) {
      clearInterval(this.timer)
      this.one = index
      this.autoplay()
    },
    change (index, pic) {
      const temp1 = (index + pic.length - 1) % pic.length
      const temp2 = index
      const temp3 = (index + pic.length + 1) % pic.length
      return pic.map((item, index) => {
        let transform = 'translate(-50%,-50%) scale(0.55)'
        let zIndex = 0
        switch (index) {
          case temp1:
            zIndex = 1
            transform = 'translate(-80%,-50%) scale(0.8)'
            break
          case temp2:
            zIndex = 2
            transform = 'translate(-50%,-50%) scale(1)'
            break
          case temp3:
            zIndex = 1
            transform = 'translate(-20%,-50%) scale(0.8)'
            break
        }
        item.sty = { transform, zIndex }
        return item
      })
    },
    autoplay () {
      this.timer = setInterval(() => {
        this.one = (this.one + this.pic.length + 1) % this.pic.length
      }, this.time)
    }
  }
}
</script>

<style scoped>
.swiper3D {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
}
.single {
  width: 64%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: 0.8s all ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 5px 10px #aaa;
}
.single img {
  width: 100%;
  height: 100%;
}
.bottom {
  height: 10%;
  width: 10%;
  display: flex;
  position: absolute;
  left: 50%;
  bottom: -10%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.cicle {
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #ccc;
}
.last,
.next {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #00000020;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.last {
  left: 8%;
}
.next {
  left: 92%;
}
</style>
