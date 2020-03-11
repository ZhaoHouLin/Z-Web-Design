<template lang="pug">
.rgbToHex(:style='bgc' ,:class="{isOpen: $store.state.open}")
  .colorAll
    .color(v-for='(color,key,id) in colors')
      span {{key}}
      input(@mousemove='changeColor(color,id)' v-model='colors[key]' type="range" min="0" max="255" step="1" value="0")
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
    ...mapActions(['changeColor']),
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
    ...mapState(['colors','hexCode']),
    ...mapGetters(['colorCode','bgc'])
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
    .color
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

