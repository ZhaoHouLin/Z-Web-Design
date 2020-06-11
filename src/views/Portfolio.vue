<template lang="pug">
.portfolio
  h1(:style='fontColor') {{$route.name}}
  swiper(ref='mySwiper' :options='swiperOptions' )
    .swiper-slide(v-for='dm in dms' :class="{isOpen: $store.state.dmOpen}")
      h2(:style='fontColor') {{dm.name}}
      img.cover.swiper-lazy(v-lazy='dm.cover' @click='dmOpenOrNot' )
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
      dms: [
        {
          name: "揭密阿卡貝拉",
          cover: "https://drive.google.com/uc?export=view&id=1HlD4ualiSWZ6TGJTzHFl68ehOhgNjbs4",
        },
        {
          name: "Liar Xmas",
          cover: "https://drive.google.com/uc?export=view&id=1reXylXZy4aBQfIcj6yRdILVFF9qZ360V",
        },
        {
          name: "2017棒球經典賽轉播",
          cover: "https://drive.google.com/uc?export=view&id=1YHUdeMwZzwo9ZfH9O6EzCpcI6t0EeZ9X",
        },
        {
          name: "LOL 2016 MSI",
          cover: "https://drive.google.com/uc?export=view&id=129qZrqvtKgOY9WJcs7K7UwqDod5CZfBP",
        },
        {
          name: "LOL S5世界賽轉播",
          cover: "https://drive.google.com/uc?export=view&id=1_FmcYafV_Y0jpkIychxEUqwkYFm7FngM",
          "description": "Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green.",
          "open": false
        },
        {
          name: "MCA場租辦法",
          cover: "https://drive.google.com/uc?export=view&id=1JA6uHaoeSuszKxMtnh3bdFAyfold5yCt",
        },
        {
          name: "MBC DM",
          cover: "https://drive.google.com/uc?export=view&id=16zhxtKWsI-qDJ9vGiyua2BbuHDjsfpcn",
        },
        {
          name: "魔法數字學",
          cover: "https://drive.google.com/uc?export=view&id=1C4iWZDEJGCDCqdDLvMk6t_92bb6Z7xPN",
        }
      ],
      swiperOptions: {
        loadPrevNext: true,
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
    // ...mapState(['dms']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    // this.loadDms()
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