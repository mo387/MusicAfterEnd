<template>
  <div class="tab" v-if="ifhover">
    <slot name="icon" class="icon"></slot>
    {{content}}
    <slot name="icon_right" class="icon"></slot>
  </div>
  <div class="tabwithout" v-else>
    <slot name="icon" class="icon"></slot>
    {{content}}
    <slot name="icon_right" class="icon"></slot>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
      require: true
    },
    ifhover: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.tabwithout,
.tab {
  height: 60px;
  transition: 0.2s all ease-out;
  padding: 0 15px;
  line-height: 60px;
  border-radius: 5px;
  font-size: 18px;
  user-select: none;
  color: #666;
  position: relative;
}
.tab:hover {
  background-color: rgb(238, 238, 238);
}
.icon i {
  height: 60px;
  width: 60px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
