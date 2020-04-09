<template lang="pug">
.shapeChange(:style='boderColor' ,:class="{isOpen: $store.state.open}")
  .shape
    i(@click='shapeDot' :style='fontColor').fas.fa-dot-circle
    i(@click='shapeLine' :style='fontColor').fas.fa-slash
    i(@click='shapeSquare' :style='fontColor').far.fa-square
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
    ...mapGetters(['colorCode','bgc','boderColor','fontColor'])
    
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
  background-color transparent
  size(140px,72px)
  border-radius 0 32px 0 28px
  border-top 2px solid #222
  border-right 2px solid #222
  flexCenter(flex-end,center)
  .shape
    size(240px,72px)
    flexCenter()    
    i 
      margin 16px
      color #222
      cursor pointer
  
  &.isOpen
    opacity 1
    size(280px,72px)
    border-radius 0 32px 0 0
    left 24px
    
</style>

