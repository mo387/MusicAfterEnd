<template>
  <div class="song">
    <song />
  </div>
</template>

<script>
import song from '../../selectsong/children/song.vue'
export default {
  components: { song }

}
</script>

<style scoped>
.song {
  width: 100%;
  height: 100%;
}
</style>
