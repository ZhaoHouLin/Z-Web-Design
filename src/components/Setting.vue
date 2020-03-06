<template lang="pug">
.setting(:style='bgc',@click='openOrNot' )
  i.fas.fa-cog
  //- transition(name='rgbToHex' mode='out-in')
  
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
.setting
  z-index 100
  size(100px,100px)
  flexCenter()
  background-color #222
  position absolute
  border-radius 0 32px 0 28px
  left 0
  bottom 0
  cursor pointer
  i

    margin 16px
    color #eee
    text-transform uppercase
    font-size 28px
  &:hover
    transition 0.5s
    i
      animation rotate 1s
      

</style>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    openOrNot(){
      this.$store.commit('openOrNot',!this.$store.state.open)
    }
  },
  computed: {
    bgc() {
      return this.$store.getters.bgc
    }
  }
}
</script>