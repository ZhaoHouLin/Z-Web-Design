<template lang="pug">
.portfolio
  h1(:style='fontColor') {{$route.name}}
  .spinner(v-show='!isLoad')
    .rect(v-for='rec in 5' :style='bgc')
  swiper(ref='mySwiper' :options='swiperOptions' )
    .swiper-slide(v-for='dm in imgData' :class="{isOpen: $store.state.dmOpen}")
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
      imgData: [],
      isLoad: false
    }
  },
  methods: {
    ...mapActions(['dmOpenOrNot']),
    handleImgLoad(imgArr) {
      let counter = 0
      let arrData = []
      for(let image in imgArr) {
        arrData.push(imgArr[image])
        const newImg = new Image()    //創建Image的DOM元素
        newImg.src = imgArr[image].cover
        newImg.onload = ()=> {
          counter++
          if(counter === arrData.length) {
            this.imgData = arrData
            this.isLoad = true
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['bgc','fontColor']),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    axios.get('https://raidennuxt.firebaseio.com/dms.json')
      .then(res => {
        this.handleImgLoad(res.data)
      })
      
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
        size(480px,auto)
    
  .swiper-pagination
    span 
      background-color rgba(0,0,0,0.5)
      size(10px)
      transition all 0.3s
    .swiper-pagination-bullet-active
      transition all 0.3s
      width 20px
      border-radius 8px

.spinner
  position absolute
  margin 100px auto
  width 100px
  height 60px
  text-align center
  font-size 10px
  & [class^="rect"]
    background-color #222
    height 100%
    width 6px
    margin 2px
    display inline-block
    -webkit-animation sk-stretchdelay 1.2s infinite ease-in-out
    animation sk-stretchdelay 1.2s infinite ease-in-out
  for i in 2 3 4 5  
    div:nth-child({i})
      -webkit-animation-delay -(1.2-((i - 1) / 10)) * 1s
      animation-delay -(1.2-((i - 1) / 10)) * 1s

@-webkit-keyframes sk-stretchdelay
  0%, 40%, 100% 
    -webkit-transform scaleY(0.4)
  20%
    -webkit-transform scaleY(1.0)

@keyframes sk-stretchdelay
  0%, 40%, 100%
    transform scaleY(0.4)
    -webkit-transform scaleY(0.4)
  20%
    transform scaleY(1.0)
    -webkit-transform scaleY(1.0)


@media screen and (max-width: 1024px)
  .portfolio
    h1
      font-size 4vh
      left 24vh
    .swiper-container   
      transform scale(0.8)
    .swiper-slide
      &.isOpen
        .cover
          transform scale(1)

@media screen and (max-width: 720px)
  .portfolio
    .swiper-container
    .swiper-slide
      &.isOpen
        .cover
          size(360px,auto)

@media screen and (max-width: 320px)
  .portfolio
    .swiper-slide
      .cover
        size(200px,300px)
      &.isOpen
        .cover
          size(300px,auto)
</style>