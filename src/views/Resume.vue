<template lang="pug">
.resume
  h1(:style='fontColor') Resume
</template>


<script>
export default {
  computed: {
    fontColor() {
      return this.$store.getters.fontColor
    }
  }
};
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'

.resume
  size(100%,100vh)
  background-color transparent
  // border 1px solid red
  position absolute
  flexCenter()
  h1
    font-size 30px
</style>