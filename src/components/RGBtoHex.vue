<template lang="pug">
.rgbToHex(:style='bgc' ,:class="{isOpen: $store.state.open}")
  .colorAll
    .colorR
      span R
      input(@input='changeColor(color.R,id=0)', v-model='color.R' type="range" min="0" max="255" step="1" value="0")
      label {{color.R}}
    .colorG
      span G
      input(@input='changeColor(color.G,id=1)', v-model='color.G' type="range" min="0" max="255" step="1" value="0")
      label {{color.G}}
    .colorB
      span B
      input(@input='changeColor(color.B,id=2)', v-model='color.B' type="range" min="0" max="255" step="1" value="0")
      label {{color.B}}
  .colorCode {{colorCode}}
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
 
    }
  },
  methods: {
    changeColor(code,id) {
      this.$store.commit('changeColor',{num:this.numToHex(+code),id:id})
    },
    numToHex(num) {
      num = num.toString(16);
      if (num.length < 2) {
        num = "0" + num;
      }
      return num
    },
    
  },
  computed: {
    ...mapState(['color','rCode','gCode','bCode','hexCode']),
    colorCode() {
     return this.$store.getters.colorCode
    },
    bgc() {
      return this.$store.getters.bgc
    }
  }
}
</script>



<style lang="stylus">
@import '../assets/cssSetting.styl'
.rgbToHex
  transition 0.5s
  left 0
  top 0
  position absolute
  size(auto,300px)
  transform scale(0)
  flexCenter()
  flex-direction column
  .colorAll
    flexCenter()
    .colorR,.colorG,.colorB
      size(auto,auto)
      flexCenter()
      flex-direction column
      color #eee
      span,input,label
        margin-bottom 8px
      input[type="range"]
        writing-mode bt-lr /* IE */
        -webkit-appearance slider-vertical
        size(60px,100px)
        overflow hidden    /* 限定範圍 */
        outline none     /* 避免點選會有藍線或虛線 */
        background-color #eee
        border 1px solid #000
        border-radius 2px
      label
        // flex 1
        flexCenter()
        text-align center
  .colorCode
    font-size 32px
    color #eee
    margin-top 8px
    // margin-bottom 20px
  &.isOpen
    transform scale(1)
    top 200px
    
</style>

