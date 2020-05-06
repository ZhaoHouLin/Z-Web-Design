<template lang="pug">
.resume
  //- PreviousAndNext
  h1(:style='fontColor') {{$route.name}}
  swiper(ref='mySwiper' :options='swiperOptions')
    .swiper-slide
      .education
        h2 education
        .info
          .senior
            .period 2005 - 2008
            h3 松山高級工農職業學校
            h4 資訊科
          .university
            .period 2008 - 2012
            h3 國立台北科技大學
            h4 光電工程系
    .swiper-slide
      .experience
        h2 experience
        .info
          .company1
            .period 2013 - 2017
            h3 翰碁有限公司
            h4 助理工程師
          .company2
            .period 2017 - Now
            h3 藍新資訊股份有限公司
            h4 疾病管制署 硬體維護人員
    .swiper-pagination(slot='pagination')
  //- .swiper-button-next(:style='fontColor')
  //- .swiper-button-prev(:style='fontColor')
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      swiperOptions: {
        effect: 'coverflow',
        loop: true,
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
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // Some Swiper option/callback...
      }
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['fontColor','changePage']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>

<style lang="stylus">
@import '../assets/cssSetting.styl'

.resume
  size(94%,90vh)
  background-color transparent
  position absolute
  flexCenter()
  text-transform capitalize
  h1
    position absolute
    bottom 2%
    right 24vh
    text-align center
    text-transform capitalize
  .swiper-container 
    z-index 3
    flexCenter()
    size(600px,auto)
    padding-bottom 36px
    .swiper-slide
      flexCenter()
      .education,.experience      
        .info
          flexCenter()
          .senior,.university,.company1,.company2
            size(220px,auto)
            margin 16px
            h3,h4
              margin 8px 0

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
  .resume
    h1
      font-size 4vh
      left 24vh
    .swiper-container 
      .swiper-slide
        .education,.experience
          transform scale(0.8)      
          .info
            flex-direction column

</style>