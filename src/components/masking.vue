<template>
  <div class="masking" :style="{background:color}" id="masking"></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style>
.masking {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
</style>
