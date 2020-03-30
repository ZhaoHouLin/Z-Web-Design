<template lang="pug">
.shapeChange(:style='bgc' ,:class="{isOpen: $store.state.open}")
  .shape
    i(@click='shapeDot').fas.fa-dot-circle
    i(@click='shapeLine').fas.fa-slash
    i(@click='shapeSquare').far.fa-square
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['setShape']),
    shapeDot() {
      this.setShape({
        width: '10px',
        height: '10px',
        bdrs: ''
      })
    },
    shapeLine() {
      this.setShape({
        width: '',
        height: ''
      })
    },
    shapeSquare() {
      this.setShape({
        width: '100px',
        height: '100px',
        bdrs: '0px'
      })
    }
    
  },
  computed: {
    ...mapState(['colors','hexCode']),
    ...mapGetters(['colorCode','bgc'])
    
  }
}
</script>



<style lang="stylus">
@import '../assets/cssSetting.styl'
.shapeChange
  transition 0.5s
  left 0
  bottom 0
  opacity 0
  position absolute
  background-color #222
  size(140px,72px)
  border-radius 0 32px 0 28px
  flexCenter(flex-end,center)
  .shape
    size(240px,72px)
    flexCenter()    
    i 
      margin 16px
      color white
      cursor pointer
  
  &.isOpen
    opacity 1
    size(280px,72px)
    border-radius 0 32px 0 0
    left 24px
    
</style>

