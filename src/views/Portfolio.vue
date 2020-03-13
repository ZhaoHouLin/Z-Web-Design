<template lang="pug">
.portfolio
  h1(:style='fontColor') {{$route.name}}
  .works
    .test(v-for='dm in dms')
      h3 {{dm.name}}
      .cover(:style='bgcss(dm.cover)')
    

</template>		

<script>
import {mapGetters,mapState,mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['loadDms']),
    bgcss(url) {
			return {
				backgroundImage: "url(" + url + ")"
			};
		}
  },
  computed: {
    ...mapGetters(['fontColor']),
    ...mapState(['dms'])
  },
  mounted() {
    // this.loadDms()
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
    top 6%
    left 280px
    font-size 64px
    text-align center
    text-transform capitalize
  .works
    size(50%,50%)
    background-color #eee
    position absolute
    right 0
    bottom 20%
    .cover
      size(300px,300px)
</style>