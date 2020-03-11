<template lang="pug">
.resume
  h1(:style='fontColor') Resume
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

.resume
  size(100%,100vh)
  background-color transparent
  position absolute
  flexCenter()
  h1
    font-size 30px
</style>