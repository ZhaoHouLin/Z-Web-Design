<template lang="pug">
.portfolio
  h1(:style='fontColor') {{$route.name}}
    

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

.portfolio
  size(100%,100vh)
  background-color transparent
  position absolute
  flexCenter()
  h1
    position absolute
    top 100px
    left 280px
    font-size 64px
    text-align center
    text-transform capitalize
</style>