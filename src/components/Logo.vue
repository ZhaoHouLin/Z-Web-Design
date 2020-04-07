<template lang="pug">
.logo(:style='bgc')
  h1 zz
  slot
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
  size(30vh)
  flexCenter()
  background-color #222
  position absolute
  h1
    color #eee
    text-transform uppercase
    font-size 16vh

@media screen and (max-width: 1024px)
  .logo
    size(20vh)
    h1
      font-size 8vh


</style>