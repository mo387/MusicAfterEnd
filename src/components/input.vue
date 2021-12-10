<template>
  <div style="position:relative;height:44px;">
    <input :type="Type" :id="Title" class="input" placeholder=" " />
    <label :for="Title" class="input_Label">{{Title}}</label>
    <slot name="icon" class="input_icon"></slot>
  </div>
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  data () {

  },
  computed: {
    Title () { return this.inputName },
    Type () { return this.inputType }
  },
  methods: {
  }
}
</script>

<style scoped>
.input {
  height: 44px;
  width: 240px;
  border-radius: 22px;
  border: 0;
  border: 1px #e98c8c solid;
  overflow: hidden;
  padding: 0 4%;
  outline: 0;
}
.input_Label {
  position: absolute;
  top: 50%;
  left: 4%;
  transform: translateY(-50%);
  transition: 0.1s all ease-in-out;
}
.input:focus,
.input:not(:placeholder-shown) {
  border: 1px #ec4141 solid;
}
.input:focus + label,
.input:not(:placeholder-shown) + label {
  color: #ec4141;
  top: 0;
  background-color: white;
  font-weight: 600;
  font-size: 18px;
}
</style>
