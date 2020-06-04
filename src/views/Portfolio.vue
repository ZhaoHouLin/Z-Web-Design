<template lang="pug">
.portfolio
  h1(:style='fontColor') {{$route.name}}
  swiper(ref='mySwiper' :options='swiperOptions' )
    .swiper-slide(v-for='dm in dms' :class="{isOpen: $store.state.dmOpen}")
      h2(:style='fontColor') {{dm.name}}
      img.cover.swiper-lazy(:src='dm.cover' @click='dmOpenOrNot' )
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
        effect: 'coverflow',
        // grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheel: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //   delay: 3000,
        // },
        // Some Swiper option/callback...
      },
    }
  },
  methods: {
    ...mapActions(['loadDms','dmOpenOrNot']),
  },
  computed: {
    ...mapGetters(['bgc','fontColor']),
    ...mapState(['dms']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.loadDms()
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
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
    bottom 2%
    right 24vh
    text-align center
    text-transform capitalize

  .swiper-container 
    z-index 3
    flexCenter()
    size(70vh,auto)
    padding-bottom 60px

  .swiper-slide
    flexCenter()
    flex-direction column
    h2
      margin-bottom 12px
      text-shadow 8px 8px 24px rgba(0,0,0,0.5)
    .cover
      size(300px,420px)
      background-color rgba(0,0,0,0.5)
      box-shadow 4px 4px 12px rgba(0,0,0,0.5)
      border-radius 8px
      cursor pointer
    &.isOpen
      .cover
        size(500px,auto)
    

  .swiper-pagination
    span 
      background-color rgba(0,0,0,0.5)
      size(10px)
      transition all 0.3s
    .swiper-pagination-bullet-active
      transition all 0.3s
      width 20px
      border-radius 8px


@media screen and (max-width: 1024px)
  .portfolio
    h1
      font-size 4vh
      left 24vh
    .swiper-container   
      transform scale(0.8)

@media screen and (max-width: 720px)
  .portfolio
    .swiper-container
      transform scale(0.6)
      margin 0
</style>