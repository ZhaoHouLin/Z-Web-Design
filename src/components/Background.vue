<template lang="pug">
-var j=100
.lines
  -for (var i=0;i<j;i++)
    .line(:style='bgc')
    .line2(:style='bgc')
</template>

<script>
export default {
  computed: {
    bgc() {
      return this.$store.getters.bgc
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'

.lines
  opacity 0.5
  z-index 1
  size(100vw, 100vh)
  display flex
  justify-content center
  align-items center
  position absolute

  for n in 0...100
    .line:nth-child({n}), .line2:nth-child({n})
      size(n + '%', 1px)
      background-color #222
      $posX = random(-100, 100) + '%'
      $posY = random(-100, 100) + '%'
      abpos($posX, $posY)

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
    opacity 1

  0%
    transform translate(-100%, 0%)

  100%
    transform translate(100%, 0%)

@keyframes falling
  0%, 100%
    opacity 0

  70%
    opacity 1

  0%
    transform rotate(-45deg) translate(100%, -100%)

  100%
    transform rotate(-45deg) translate(-100%, 100%)
</style>