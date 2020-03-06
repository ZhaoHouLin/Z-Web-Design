<template lang="pug">
.logo(:style='bgc')
  h1 zz
</template>

<script>
export default {
  computed: {
    bgc() {
      return this.$store.getters.bgc
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'
.logo
  z-index 100
  size(240px,240px)
  flexCenter()
  background-color #222
  position absolute
  // border-radius 28px 0 32px 0
  left -32px
  top -32px
  h1
    color #eee
    text-transform uppercase
    font-size 100px
</style>