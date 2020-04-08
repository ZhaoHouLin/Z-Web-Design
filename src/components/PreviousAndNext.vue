<template lang="pug">
.previousAndNext
  .previous(@click='previous')
    i.fas.fa-chevron-left(:style='fontColor')
  .next(@click='next')
    i.fas.fa-chevron-right(:style='fontColor')
</template>

<script>
import {mapGetters ,mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['fontColor'])
  },
  methods: {
    ...mapActions(['setCount']),
    previous() {
      this.setCount(-1)
    },
    next() {
      this.setCount(1)
    },
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