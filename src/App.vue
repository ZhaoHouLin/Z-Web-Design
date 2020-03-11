<template lang='pug'>
.app
  .frame(:style='boderColor')
    Logo
    RGBtoHex
    Menu
    Setting
    PreviousAndNext
  Background
  transition(name='page' mode='out-in')
    router-view
  
    
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['boderColor'])
  }
};
</script>


<style lang="stylus">
@import './assets/cssSetting.styl'
.app
  size(100%,100vh)
  background-color transparent
  position relative
  posCenter()
  flexCenter()
  .frame
    position relative
    z-index 2
    size(94%,90vh)
    background-color transparent
    border 2px solid #222
    border-radius 32px

.page-enter-active,.page-leave-active
  transition 0.5s
.page-enter,.page-leave-to
  opacity 0
    
</style>