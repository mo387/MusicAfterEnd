<template>
  <div class="imformation" id="imformation">
    <div class="top">
      <div class="toppart">
        <div class="num">1</div>
        <div class="title">动态</div>
      </div>
      <div class="toppart">
        <div class="num">1</div>
        <div class="title">关注</div>
      </div>
      <div class="toppart">
        <div class="num">1</div>
        <div class="title">粉丝</div>
      </div>
    </div>
    <div class="content">
      <a href="#">
        <div class="single">
          <i class="iconfont icon-huiyuanb"></i>
          <div>我的会员</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#">
        <div class="single">
          <i class="iconfont icon-wodexunzhang"></i>
          <div>等级</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#">
        <div class="single">
          <i class="iconfont icon-shangcheng"></i>
          <div>商城</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#">
        <div class="single">
          <i class="iconfont icon-gerenxinxishezhi"></i>
          <div>个人信息设置</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#">
        <div class="single">
          <i class="iconfont icon-bangdingshebei"></i>
          <div>绑定社交帐号</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#">
        <div class="single">
          <i class="iconfont icon-kefu"></i>
          <div>我的客服</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
      <a href="#" @click.prevent="loginout">
        <div class="single">
          <i class="iconfont icon-tuichu"></i>
          <div>退出</div>
          <i class="iconfont icon-xiangyou_fanhui"></i>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginout () {
      console.log(1)
      document.cookie = 'username=""'
    }
  }
}
</script>

<style scoped>
.imformation {
  width: 320px;
  background-color: #fff;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 2px 2px 10px #ddd;
  opacity: 0;
  transition: 0.6s all ease-in-out;
  display: none;
}
.top {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.toppart {
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.num {
  color: #333;
  font-weight: 600;
  font-size: 28px;
}
.title {
  font-size: 16px;
  color: #999;
}
.single {
  height: 30px;
  width: calc(100% - 20px);
  line-height: 30px;
  color: #666;
  padding: 10px;
  font-size: 22px;
  display: flex;
}
.single:hover {
  background-color: #ddd;
}
.single i {
  font-size: 22px;
}
.single div {
  font-size: 18px;
  padding-left: 5px;
  width: 80%;
}
</style>
