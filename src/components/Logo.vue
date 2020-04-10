<template lang="pug">
.logo(:style='boderColor')
  h1(:style='fontColor') zz
  slot
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['bgc','boderColor','fontColor'])
  }
}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'
.logo
  user-select none
  z-index 100
  size(30vh)
  flexCenter()
  // background-color transparent
  border-right 2px solid #222
  border-bottom 2px solid #222
  position absolute
  h1
    color #222
    text-transform uppercase
    font-size 16vh

@media screen and (max-width: 1024px)
  .logo
    size(20vh)
    h1
      font-size 8vh


</style>