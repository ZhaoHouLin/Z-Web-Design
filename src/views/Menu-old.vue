<template lang="pug">
    .menu
      .avatar
        img(src="https://scontent.ftpe2-2.fna.fbcdn.net/v/t1.0-9/16174790_10206578654498836_2019346947418276175_n.jpg?_nc_cat=109&_nc_ohc=F4IZgi3nl6kAX94Px7a&_nc_ht=scontent.ftpe2-2.fna&oh=7ef2b80d32cda59b617ccb0770157210&oe=5EF80DB9", alt="alt")
        h1 林炤后
        h3 zhao hou lin
      .list
        router-link(to='/')
          i.fas.fa-home
        router-link(to='/resume')
          i.far.fa-file
        router-link(to='/portfolio')
          i.fas.fa-palette
        a(href="https://codepen.io/rodes",target='_blank')
          i.fab.fa-codepen
        a(href="https://github.com/ZhaoHouLin",target='_blank')
          i.fab.fa-github-square
        a(href="https://www.facebook.com/ZhaoHouLin",target='_blank')
          i.fab.fa-facebook-square
</template>

<style lang="stylus">
@import '../assets/cssSetting.styl'
.menu
    z-index 100 
    background-color #222
    size(40%,100vh)
    flexCenter()
  .avatar
    flexCenter()
    flex-direction column
    size(auto,auto)
    img 
      size(200px,200px)
      border-radius 16px
      margin-bottom 16px
    h1,h3
      color white
    h3
      text-transform capitalize

  .list
    position absolute
    bottom 0
    flexCenter()
    i
      margin 16px
      font-size 24px
      color #eee
      cursor pointer
      margin-bottom 32px

@keyframes rotate
    0%
        transform rotate(0deg)

    100%
        transform rotate(360deg)
</style>

<script>
export default {
    data() {

    }
}
</script>