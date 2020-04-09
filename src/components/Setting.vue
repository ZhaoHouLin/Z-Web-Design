<template lang="pug">
.setting(:style='boderColor',@click='openOrNot' )
  i.fas.fa-cog(:style='fontColor')
  
</template>


<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['openOrNot']),

  },
  computed: {
    ...mapGetters(['bgc','boderColor','fontColor'])
  }
}
</script>


<style lang="stylus">
@import '../assets/cssSetting.styl'
.setting
  z-index 100
  size(72px,72px)
  flexCenter()
  position absolute
  border-radius 0 32px 0 28px
  border-right 2px solid #222
  border-top 2px solid #222
  left 0
  bottom 0
  cursor pointer
  i
    margin 2vw
    color #eee
    text-transform uppercase
  &:hover
    transition 0.5s
    i
      animation rotate 1s
      

</style>

