<template>
  <div class="check" id="checkAll">
    <div class="pic">
      <div class="top" id="LoginTop">
        <div class="cicletopabso" id="loginpic"></div>
        <div class="cicletop" ref="cicleTop"></div>
      </div>
      <div class="bottom" id="checkblock">
        <div class="slide" id="loginslide"></div>
        <div class="cicle" id="Logincicle"></div>
      </div>
      <div class="white" id="loginWhite">您的速度超过了99%的用户</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: '',
      time: ''
    }
  },
  methods: {
  },
  mounted () {
    const cicle = document.getElementById('Logincicle')
    const block = document.getElementById('checkblock')
    const Left = block.getBoundingClientRect().x
    const slide = document.getElementById('loginslide')
    const white = document.getElementById('loginWhite')
    const all = document.getElementById('checkAll')
    const cicletop = this.$refs.cicleTop
    let flag = false
    let right = false
    cicle.addEventListener('mousedown', e => {
      flag = true
    })
    cicle.addEventListener('mouseup', e => {
      flag = false
      if (!right) {
        cicle.style.left = 0 + 'px'
        cicletop.style.left = 0 + 'px'
        slide.style.width = 28 + 'px'
      }
    })
    document.onmousemove = e => {
      if (!flag) {
        return false
      }
      if (e.target !== cicle) {
        return
      }
      const left = e.pageX - block.getBoundingClientRect().x - e.target.clientWidth / 2
      if (left < Left || left > 264) {
        return
      }
      cicle.style.left = left + 'px'
      cicletop.style.left = left + 'px'
      slide.style.width = left + 56 + 'px'
      const canBeRight = Math.abs(left - 224)
      if (canBeRight <= 5) {
        right = true
        white.style.display = 'flex'
        setTimeout(() => {
          white.style.opacity = '1'
        }, 50)
        setTimeout(() => {
          all.style.opacity = '0'
        }, 1000)
        setTimeout(() => {
          all.style.display = 'none'
          cicle.style.left = 0 + 'px'
          cicletop.style.left = 0 + 'px'
          slide.style.width = 28 + 'px'
          white.style.opacity = '0'
          white.style.display = 'null'
          this.$emit('success')
        }, 1600)
      }
    }
  }
}
</script>

<style scoped>
.check {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  background-color: #ffffffdd;
  user-select: none;
  transition: 0.4s all ease-in-out;
  opacity: 0;
  display: none;
}
.pic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 280px;
  width: 70%;
}
.top {
  height: 80%;
  background-image: url('../assets/image/0.jpeg');
  background-size: 100%;
  background-attachment: 0;
}
.bottom {
  height: 20%;
  overflow: hidden;
  margin-top: 30px;
}
.cicletopabso,
.cicletop,
.cicle {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  position: absolute;
  box-shadow: 5px 0px 5px #ec4141;
  background-color: #fff;
}
.slide {
  content: '';
  position: absolute;
  height: 56px;
  width: 28px;
  background-image: linear-gradient(358.3deg, #ec4141 12.9%, #f8b3b3 134.3%);
  border-radius: 28px;
}
.cicletop {
  position: absolute;
  box-shadow: 0px 0px 0px #ddd;
  background-image: url('../assets/image/0.jpeg');
  top: 30%;
  background-position-x: calc(70% - 8px);
  background-position-y: calc(30% - 8px);
  border: 1px solid rgb(155, 155, 155);
  border-radius: 0;
}
.cicletopabso {
  position: absolute;
  box-shadow: 0px 0px 0px #ddd;
  border: 1px solid rgb(155, 155, 155);
  background-image: url('../assets/image/0.jpeg');
  top: 30%;
  left: 70%;
  background-position-x: calc(70% - 8px);
  background-position-y: calc(30% - 8px);
  border-radius: 0;
}
.cicletopabso::after {
  content: '';
  position: absolute;
  width: 56px;
  height: 56px;
  background-color: #00000099;
}
.white {
  height: 80%;
  width: 100%;
  background-color: #ffffffdd;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ec4141;
  font-size: 24px;
  display: none;
  opacity: 0;
  transition: 0.6s all ease-in-out;
}
</style>
