<template lang="pug">
.portfolio(@wheel.prevent="wheel")
  h1(:style='fontColor') {{$route.name}}
  .works
    .work(v-for='dm in dms')
      h2 {{dm.name}}
      img.cover(v-lazy='dm.cover')
    

</template>		

<script>
import {mapGetters,mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['loadDms']),
    wheel(evt){
      console.log(evt.deltaY)
      TweenMax.to(".work",0.8,{
        left: "-="+ evt.deltaY*2+"px"
      })
    },
  },
  computed: {
    ...mapGetters(['fontColor']),
    ...mapState(['dms'])
  },
  mounted() {
    this.loadDms()
  }

}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'

.portfolio
  size(94%,90vh)
  background-color transparent
  position absolute
  flexCenter()
  h1
    position absolute
    // top 4%
    // left 32vh
    bottom 2%
    right 24vh
    text-align center
    text-transform capitalize
  .works
    z-index 2
    flexCenter()
    size(70%,70%)
    bottom 10%
    .work
      position relative
      flexCenter()
      flex-direction column
      h2
        text-shadow 8px 8px 24px rgba(0,0,0,0.5)
      .cover
        size(300px,420px)
        box-shadow 4px 4px 12px rgba(0,0,0,0.5)
        margin 16px
        border-radius 8px

@media screen and (max-width: 1024px)
  .portfolio
    h1
      font-size 4vh
      left 24vh


</style>