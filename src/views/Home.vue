<template lang="pug">
.home
  h1(:style='fontColor') hi, i am raiden
  
  
  
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['fontColor'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/cssSetting.styl'

.home
  size(100%,100vh)
  background-color transparent
  position absolute
  flexCenter()
  h1
    font-size 60px
    text-align center
    text-transform capitalize

</style>