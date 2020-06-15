<template lang='pug'>
.app
  .dmLayer(:class="{isOpen: $store.state.dmOpen}" @click='dmOpenOrNot')
  .frame(:style='boderColor')
    Logo
    RGBtoHex
    ShapeChange
    Menu
    Setting
    //- PreviousAndNext
  Background
  transition(name='page' mode='out-in')
    router-view
  
    
</template>


<script>
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      fullWidth: 0,
      fullHeight: 0
    }
  },
  methods: {
    ...mapActions(['loadDms','dmOpenOrNot']),
  },
  computed: {
    ...mapGetters(['boderColor']),
    ...mapState(['dms'])
  },
  mounted() {
    const vm = this
    vm.fullWidth = window.innerWidth
  	vm.fullHeight = window.innerHeight
    window.onresize = () => {
      vm.fullWidth = window.innerWidth
      vm.fullHeight = window.innerHeight
    };
    this.loadDms()
  },
};
</script>


<style lang="stylus">
@import './assets/cssSetting.styl'
.app
  size(100%,100vh)
  background-color transparent
  position relative
  flexCenter()
  .dmLayer
    size(100%,100vh)
    position fixed
    background-color #222
    opacity 0
    display none
    
    &.isOpen
      opacity 0.5
      z-index 3
      display block
      flexCenter()


  .frame
    position relative
    z-index 2
    size(94%,90vh)
    background-color transparent
    border 2px solid #222
    border-radius 0 32px 32px 32px
    
.page-enter-active,.page-leave-active
  transition 0.5s
.page-enter,.page-leave-to
  opacity 0
    

</style>