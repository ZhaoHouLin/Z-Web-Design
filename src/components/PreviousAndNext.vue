<template lang="pug">
.previousAndNext
  .previous
    i.fas.fa-chevron-left(:style='fontColor')
  .next
    i.fas.fa-chevron-right(:style='fontColor')
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
.previousAndNext
  size(10%,10%)
  flexCenter()
  position absolute
  right 16px
  bottom 0
  
  .previous,.next
    font-size 48px
    size()
    flexCenter()
    cursor pointer
    transition 0.5s
    &:hover
      transition 0.5s
      opacity 0.5
</style>