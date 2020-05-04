<template lang="pug">
.portfolio(@wheel.prevent="wheel")
  h1(:style='fontColor') {{$route.name}}
  swiper(ref='mySwiper' :options='swiperOptions')
    .swiper-slide(v-for='dm in dms')
      h2(:style='fontColor') {{dm.name}}
      img.cover.swiper-lazy(:src='dm.cover')
      .swiper-lazy-preloader.swiper-lazy-preloader-white
    .swiper-pagination(slot='pagination')
  //- .swiper-button-next
  //- .swiper-button-prev
    

</template>		

<script>
import {mapGetters,mapState,mapActions} from 'vuex'

export default {
  data() {
    return {
      swiperOptions: {
        lazy: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
        // Some Swiper option/callback...
      }
    }
  },
  methods: {
    ...mapActions(['loadDms']),
    // wheel(evt){
    //   console.log(evt.deltaY)
    //   TweenMax.to(".work",0.8,{
    //     left: "-="+ evt.deltaY*2+"px"
    //   })
    // },
  },
  computed: {
    ...mapGetters(['fontColor']),
    ...mapState(['dms']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.loadDms()
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(1, 1000, false)
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

  .swiper-container 
    // border 1px solid #000
    z-index 100
    flexCenter()
    size(70%,70%)

  .swiper-slide
    flexCenter()
    flex-direction column
    h2
      text-shadow 8px 8px 24px rgba(0,0,0,0.5)
    .cover
      size(300px,420px)
      background-color rgba(0,0,0,0.5)
      box-shadow 4px 4px 12px rgba(0,0,0,0.5)
      margin 16px
      border-radius 8px


@media screen and (max-width: 1024px)
  .portfolio
    h1
      font-size 4vh
      left 24vh


</style>