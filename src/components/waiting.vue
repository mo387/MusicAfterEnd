<template>
  <div class="waiting">
    <div class="icon">
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
    </div>
    <svg>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        <feColorMatrix
          values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10
        "
        />
      </filter>
    </svg>
    <div class="title">Loading</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.waiting {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: #ffffffdd;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.6s all ease-in-out;
  z-index: 100;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 20px;
}
.icon {
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: url(#gooey);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icon span {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  display: block;
  animation: animate 5s ease-in-out infinite;
  animation-delay: calc(0.2s * var(--i));
}
.icon span::before {
  content: '';
  position: absolute;
  top: 0;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  background: linear-gradient(25deg, #d64c7f, #ee4758 50%);

  border-radius: 50%;
  opacity: calc(0.3 * var(--i));
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
