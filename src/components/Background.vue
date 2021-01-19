<template lang="pug">
.bg
  .blurBg
  -var j=25
  .lines
    -for (var i=0;i<j;i++)
      .line(:style='shapeStyle')
      .line2(:style='shapeStyle')
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['bgc','shapeStyle'])
  }
}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'

.bg
  size(100vw,100vh)
  position absolute
  iframe 
    size(100%,100vh)
    position absolute
    border none
    // z-index 100
  .blurBg
    size(100vw,100vh)
    background-color #eee
    filter blur(72px)

  .lines
    opacity 0.2
    size(100vw, 100vh)
    posCenter()

    for n in 0...100
      .line:nth-child({n}), .line2:nth-child({n})
        size(n + '%', 2px)
        border-radius 50%
        background-color #222
        $posX = random(0, 100) + '%'
        $posY = random(0, 100) + '%'
        abpos($posX, $posY)
        transform translate(-$posX,-$posY)

      .line:nth-child({n})
        animation horizon 5s infinite
        animation-delay n * -0.1s

      .line2:nth-child({n})
        animation falling 5s infinite
        animation-delay n * -0.1s

@keyframes horizon
  0%, 100%
    opacity 0

  70%
    opacity 0.5

  0%
    transform translate(-100%, 0%)

  100%
    transform translate(100%, 0%)

@keyframes falling
  0%, 100%
    opacity 0

  70%
    opacity 0.5

  0%
    transform rotate(-45deg) translate(100%, -100%)

  100%
    transform rotate(-45deg) translate(-100%, 100%)
</style>