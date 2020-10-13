<template lang="pug">
.home
  h1(:style='fontColor') hi, i am raiden
  //- iframe(:src='src'  ref="iframe")
  
  
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      src: 'http://localhost:8080/Neon/index.html'
    }
  },
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
  // iframe 
  //   size(100%,100vh)
  //   position absolute
  //   // z-index 100

</style>