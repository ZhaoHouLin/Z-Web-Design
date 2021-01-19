<template lang="pug">
.logo(:style='boderColor')
  .workLink
    a(href="https://zhaohoulin.github.io/myP5jsWork/",target='_blank')
      h3 Go to
      h3 My p5*js work
    iframe(src='https://zhaohoulin.github.io/myP5jsWork/work/DigiCode/index.html')
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
  border-right 2px solid #222
  border-bottom 2px solid #222
  position absolute
  h1
    color #222
    text-transform uppercase
    font-size 16vh
  .workLink
    position absolute
    size()
    &:hover
      iframe
        opacity 1
    a
      z-index 3
      position absolute
      flexCenter()
      flex-direction column
      size()
      text-decoration none
      color transparent
      transition 0.5s
      &:hover
        h3 
          opacity 1
          color #fff
      h3
        text-align center
        font-weight bold
        opacity 0
        font-size 4vh
        text-shadow 4px 4px 8px rgba(0,0,0,1)

    iframe 
      position absolute
      size()
      border none
      opacity 0
      transition 0.5s

@media screen and (max-width: 1024px)
  .logo
    size(20vh)
    h1
      font-size 8vh

</style>