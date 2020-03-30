<template lang="pug">
.rgbToHex(:style='bgc' ,:class="{isOpen: $store.state.open}")
  .colorAll
    .color(v-for='(color,key,id) in colors')
      span {{key}}
      input(@mousemove='colorChange(color,id)' @change='colorChange(color,id)' @input='colorChange(color,id)' v-model='colors[key]' type="range" min=0 max=255 step=1 )
      label {{color}}
  .colorCode {{colorCode}}
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['changeCode']),
    colorChange(rgbCode,id) {
        this.changeCode({
        hexCode: this.numToHex(+rgbCode),
        id: id
      })
    },
    numToHex(rgbCode) {
      let hexCode = rgbCode.toString(16);
      if (hexCode.length < 2) {
        hexCode = "0" + hexCode;
      }
      return hexCode
    },
    
  },
  computed: {
    ...mapState(['colors','hexCode']),
    ...mapGetters(['colorCode','bgc'])
    
  }
}
</script>



<style lang="stylus">
@import '../assets/cssSetting.styl'
.rgbToHex
  transition 0.5s
  left 4vh
  top 0
  opacity 0
  position absolute
  flexCenter()
  flex-direction column
  .colorAll
    flexCenter()
    .colorR,.colorG,.colorB,.color
      size(auto,auto)
      flexCenter()
      flex-direction column
      color #eee
      span,input,label
        margin-bottom 8px
      input[type="range"]
        writing-mode bt-lr /* IE */
        -webkit-appearance slider-vertical
        // -moz-appearance slider-vertical
        // -webkit-writing-mode vertical-lr
        // -moz-writing-mode vertical-lr
        size(60px,100px)
        overflow hidden    /* 限定範圍 */
        outline none     /* 避免點選會有藍線或虛線 */
        background-color #eee
        border 1px solid #000
        border-radius 2px
      label
        flexCenter()
        text-align center
  .colorCode
    font-size 4vh
    color #eee
    margin-top 8px
  &.isOpen
    opacity 1
    size(32%,36%)
    top 28vh
    
</style>

