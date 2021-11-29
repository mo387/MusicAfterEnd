<template>
  <div class="all" :style="{width:len}">
    <div
      class="list"
      :style="{width:len,height:len}"
      @mouseover="show = show?show:!show"
      @mouseleave="show = !show?show:!show"
    >
      <img :src="src" :class="{ani:ifani}" />
      <div
        class="play"
        :class="{active:show}"
        :style="{top:play_posi,left:play_posi}"
        v-show="ifplay"
      ></div>
      <div class="number" :style="num_posi" v-show="ifnum">
        <i :class="icon"></i>
        {{num}}
      </div>
      <div class="singer" :style="singer_posi" v-if="ifsing">
        <i :class="sing_icon"></i>
        {{singer}}
      </div>
    </div>
    <div class="text">{{text}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    leng: {
      type: Number,
      default: 200
    },
    text: {
      type: String
    },
    number: {
      type: Number
    },
    icon: {
      type: String,
      default: 'iconfont icon-bofang add'
    },
    play_position: {
      type: Number,
      default: 82
    },
    num_position: {
      type: String,
      default: 'top'
    },
    ifplay: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      required: true
    },
    ifani: {
      type: Boolean,
      default: false
    },
    ifsing: {
      type: Boolean,
      default: true
    },
    ifnum: {
      type: Boolean,
      default: true
    },
    singer_position: {
      type: String,
      default: 'bottom'
    },
    singer: {
      type: String
    },
    sing_icon: {
      type: String,
      default: 'iconfont icon-bofang add'
    }
  },
  computed: {
    len () {
      return this.leng + 'px'
    },
    num () {
      if (this.number > 100000) {
        return parseInt(this.number / 100000) + '万'
      } else {
        return this.number
      }
    },
    play_posi () {
      return this.play_position + '%'
    },
    num_posi () {
      return this.num_position + ':0'
    },
    singer_posi () {
      return this.singer_position + ':0'
    }
  }
}
</script>

<style scoped>
.all {
  display: flex;
  float: left;
  flex-direction: column;
  margin: 10px;
}
.list {
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.play {
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #fff;
  transition: 0.6s all ease-in-out;
  opacity: 0;
  transform: translate(-50%, -50%);
}
.play::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 54%;
  transform: translate(-50%, -50%);
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 18px solid #ec4141;
}
.active {
  opacity: 1;
}
.all .text {
  width: 100%;
  height: 3rem;
  padding: 5px 0;
  user-select: none;
  color: #666;
  font-size: 16px;
}
.all .text:hover {
  color: #333;
}
.singer,
.number {
  padding: 5px;
  position: absolute;
  width: calc(100% - 10px);
  height: 1.5rem;
  color: #fff;
  text-align: right;
  font-size: 16px;
}
.singer {
  text-align: left;
}
.add {
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1px #fff;
}
.list img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.8s all ease-in-out;
}
.ani:hover {
  transform: scale(1.1);
}
</style>
