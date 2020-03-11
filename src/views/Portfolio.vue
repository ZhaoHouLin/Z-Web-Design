<template lang="pug">
  .portfolio
    h1(:style='fontColor') Portfolio
    

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
    font-size 30px
</style>