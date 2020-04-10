<template lang="pug">
.resume
  h1(:style='fontColor') {{$route.name}}
  .screen
    .pages(:style='changePage')
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
      .experience
        h2 experience
        .info
          .company1
            .period 2013 - 20017
            h3 翰碁有限公司
            h4 助理工程師
          .company2
            .period 2017 - Now
            h3 藍新資訊股份有限公司
            h4 疾病管制署 硬體維護人員
</template>


<script>

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['fontColor','changePage']),
    
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
    
  .screen
    overflow hidden
    white-space nowrap
    size(480px,70%)
    flexCenter()
    position relative
    .pages
      transition 0.5s
      size(auto,auto)
      flexCenter()
      position absolute
      .education,.experience
        size(auto,auto)
        h2
          // text-shadow 8px 4px 8px rgba(0,0,0,0.5)
        .info
          flexCenter()
          .senior,.university,.company1,.company2
            size(220px,auto)
            margin 16px
            h3,h4
              margin 8px 0

@media screen and (max-width: 1024px)
  .resume
    flex-direction column
    h1
      font-size 4vh
      left 24vh
    .screen
      left 16px
      top 16px
      size(240px,70%)
      .pages
        .education,.experience
          .info
            flex-direction column
</style>