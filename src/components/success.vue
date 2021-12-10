<template>
  <div class="success">
    <svg width="200" height="200">
      <circle
        fill="none"
        stroke="#f04747"
        stroke-width="10"
        cx="100"
        cy="100"
        r="95"
        class="circle"
        stroke-linecap="round"
        transofrom="rotate(-90 100 100)"
      />
      <polyline
        fill="none"
        stroke="#ec4141"
        stroke-width="12"
        points="44,100 86,140 152,60"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="tick"
      />
    </svg>
    <h2 class="title">Success</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.success {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffffdd;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s all ease-in-out;
  z-index: 30;
}
.title {
  position: absolute;
  top: calc(50% + 120px);
  left: 50%;
  transform: translate(-50%, -50%);
}
h2 {
  color: #f04747;
  font-size: 28px;
  opacity: 0;
  transition: 0.8s all ease-in-out;
}
.circle {
  stroke-dasharray: 597;
  stroke-dashoffset: 597;
}
.tick {
  stroke-dasharray: 165;
  stroke-dashoffset: 165;
}
</style>
