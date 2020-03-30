<template lang="pug">
.resume
  h1(:style='fontColor') {{$route.name}}
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
        h4 疾病管制署 電腦硬體維護人員
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['fontColor'])
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
  flex-direction column
  text-transform capitalize
  h1
    position absolute
    top 6%
    left 20%
    text-align center
    text-transform capitalize
  .education,.experience
    margin-top 32px
    h2
      text-shadow 8px 4px 8px rgba(0,0,0,0.5)
    .info
      flexCenter()
      .senior,.university,.company1,.company2
        size(220px,auto)
        margin 16px
        h3,h4
          margin 8px 0

</style>