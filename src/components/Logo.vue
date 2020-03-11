<template lang="pug">
.logo(:style='bgc')
  h1 zz
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['bgc'])
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
  left -32px
  top -32px
  h1
    color #eee
    text-transform uppercase
    font-size 100px
</style>