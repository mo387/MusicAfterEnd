<template>
  <div class="Login" id="Login">
    <a href="#" class="close">
      <i class="iconfont icon-cuowuguanbiquxiao" @click.prevent="close"></i>
    </a>
    <img src="@/assets/image/bg.png" alt class="bg" />
    <div class="top" ref="top">{{title}}</div>
    <div class="bottom_login" ref="login">
      <Input inputName="账号" class="margin" />
      <span :style="{visibility: ifHasName}">该账号不存在</span>
      <Input inputName="密码" inputType="password" class="margin" />
      <span>&nbsp;</span>
      <a href="#">
        <div class="button" @click="success">登录</div>
      </a>
      <div class="title">
        <a href="#" @click.prevent="toOther">还没有账号？立即注册</a>
      </div>
    </div>
    <div class="bottom_register" ref="register">
      <Input inputName="账号" class="margin" @input="registeCheckName" />
      <span :style="{visibility: ifHasName}">该账号已存在</span>
      <Input inputName="密码" inputType="password" class="margin" @input="registePassWordInput" />
      <span>&nbsp;</span>
      <Input inputName="重复密码" inputType="password" class="margin" @input="registeRePasswordInput" />
      <span :style="{visibility: ifPassWord}">两次输入的密码不一致</span>
      <a href="#">
        <div class="button" @click="registe">注册</div>
      </a>
      <div class="title">
        <a href="#" @click.prevent="toOther">已有账号，立即登录</a>
      </div>
    </div>
    <waiting id="loginWaiting" />
    <success id="loginSuccess" />
  </div>
</template>

<script>
import Input from './input.vue'
import debounce from '../util/optimize/debounce'
import Waiting from './waiting.vue'
import Success from './success.vue'
export default {
  components: { Input, Waiting, Success },
  data () {
    return {
      islogin: true,
      title: '登录',
      ifHasName: 'hidden',
      ifPassWord: 'hidden',
      registeName: '',
      registePassWord: '',
      registeRePassWord: ''
    }
  },
  methods: {
    success () {
      this.$tip.showSuccess('loginSuccess')
    },
    toOther () {
      if (this.islogin) {
        this.$refs.login.style.transform = 'translateY(60px)'
        this.$refs.login.style.opacity = '0'
        this.$refs.register.style.zIndex = '-1'
        this.$refs.register.style.display = 'flex'
        this.$refs.top.style.opacity = '0'
        setTimeout(() => {
          this.$refs.login.style.display = 'none'
          this.$refs.login.style.transform = ''
          this.$refs.register.style.opacity = '1'
          this.$refs.register.style.zIndex = '1'
          this.title = '注册'
          this.$refs.top.style.opacity = '1'
        }, 500)
        this.islogin = false
      } else {
        this.$refs.register.style.transform = 'translateY(60px)'
        this.$refs.register.style.opacity = '0'
        this.$refs.login.style.zIndex = '-1'
        this.$refs.login.style.display = 'flex'
        this.$refs.top.style.opacity = '0'
        setTimeout(() => {
          this.$refs.register.style.display = 'none'
          this.$refs.register.style.transform = ''
          this.$refs.login.style.opacity = '1'
          this.$refs.login.style.zIndex = '1'
          this.title = '登录'
          this.$refs.top.style.opacity = '1'
        }, 500)
        this.islogin = true
      }
    },
    close () {
      const login = document.getElementById('Login')
      login.style.opacity = '0'
      login.style.transform = 'translate(-50%, -50%) translateX(60px)'
      setTimeout(() => {
        login.style.display = 'none'
        login.style.transform = 'translate(-50%, -50%) translateX(-60px)'
      }, 500)
    },
    registeCheckName: debounce(async function (e) {
      this.registeName = e[0].target.value
      const { data } = await this.$http.get('/isRegisted', {
        userAccountThis: this.registeName
      })
      if (data.success === true) {
        this.ifHasName = 'visible'
      } else {
        this.ifHasName = 'hidden'
      }
    }, 500),
    registePassWordInput: debounce(function (e) { this.registePassWord = e[0].target.value }, 500),
    registeRePasswordInput: debounce(function (e) {
      this.registeRePassWord = e[0].target.value
      if (this.registePassWord !== this.registeRePassWord) {
        this.ifPassWord = 'visible'
      } else {
        this.ifPassWord = 'hidden'
      }
    }, 250),
    async registe () {
      console.log(1)
      this.$tip.showWaiting('loginWaiting')
      setTimeout(() => {
        this.$tip.hideWaiting('loginWaiting')
      }, 3000)
      // const parms = {
      //   userAccountThis: this.registeName,
      //   userPasswordThis: this.registePassWord
      // }
      // if (this.ifHasName === 'hidden' && this.ifPassWord === 'hidden') {
      //   const { data } = await this.$http({ url: '/registe', params: parms })
      //   console.log(data)
      // }
    }
  }
}
</script>

<style scoped>
.Login {
  position: absolute;
  height: 600px;
  width: 460px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-60px);
  z-index: 21;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #999;
  overflow: hidden;
  transition: 0.6s all ease-in-out;
  opacity: 0;
  display: none;
}
.bottom_register,
.bottom_login {
  width: 100%;
  height: 70%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.6s all ease-in-out;
}
.bottom_register {
  opacity: 0;
  z-index: -1;
}
.margin {
  margin: 10px 0;
  transform: translateX(-10px);
}
.button {
  margin: 14px;
  width: 260px;
  height: 44px;
  background: linear-gradient(25deg, #d64c6e, #ee4758 50%);
  border-radius: 22px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.top {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #ee4758;
  transition: 0.6s all ease-in-out;
  font-weight: 600;
}
.title a {
  color: #999;
  font-size: 16px;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}
.close i,
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 32px;
  color: #999;
  font-weight: 600;
}
span {
  color: red;
  font-size: 12px;
  transition: 0.6s all ease-in-out;
}
.button::before {
  content: '';
  height: 1px;
  width: 1px;
  background-color: #fff;
  transition: 0.4s all ease-in-out;
  border-radius: 100px;
  opacity: 0.1;
}
.button:hover::before {
  content: '';
  transform: scale(1000);
  opacity: 0.15;
}
</style>
