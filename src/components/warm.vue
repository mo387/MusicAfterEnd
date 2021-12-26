<template>
  <div class="wrong" id="err"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrong {
  height: 40px;
  width: 200px;
  background-color: #000000dd;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  transition: 0.4s all ease-in-out;
  z-index: 100;
}
</style>
