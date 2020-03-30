<template lang="pug">
.menu
  router-link(to='/')
    i.fas.fa-home(:style='fontColor')
  router-link(to='/resume')
    i.far.fa-file(:style='fontColor')
  router-link(to='/portfolio')
    i.fas.fa-palette(:style='fontColor')
  a(href="https://codepen.io/rodes",target='_blank')
    i.fab.fa-codepen(:style='fontColor')
  a(href="https://github.com/ZhaoHouLin",target='_blank')
    i.fab.fa-github-square(:style='fontColor')
  a(href="https://www.facebook.com/ZhaoHouLin",target='_blank')
    i.fab.fa-facebook-square(:style='fontColor')
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['fontColor'])
  }
}
</script>


<style lang="stylus">
@import '../assets/cssSetting.styl'
.menu
  size(auto,auto)
  position absolute
  right 16px
  top 4px
  background-color transparent
  flexCenter()
  i
    margin 2vw
    font-size 4vh
    color #222
    cursor pointer


</style>

