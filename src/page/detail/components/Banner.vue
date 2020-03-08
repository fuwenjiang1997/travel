<template>
  <div>
    <div class="banner">
      <img class="banner-img" @click="handleBallayClick" src="https://img1.qunarzz.com/vs_ceph_vs_tts/f006a01a-b9d5-4ba5-af8b-f1668daebc21.jpg_r_640x420x95_f596f9d0.jpg" />
      <div class="banner-info">
        <div class="txt">
          <span class="banner-title">产品编号</span>
          <span>3774567312</span>
        </div>
        <div class="banner-number">
          <span class="banner-count">1/{{imgs.length}}<span class="iconfont icon-tupian tupian-iconfont" ></span></span>
        </div>
      </div>
    </div>
    <common-gallary v-show="showGallary" :imgs="imgs" @close="handleBallayClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://imgs.qunarzz.com/vs_ceph_vs_tts/8d89217f-fbcb-4273-9354-84a326e94e20.jpg_r_390x260x95_f8ae5345.jpg',
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/40f15858-3e82-4c52-886c-67bff804dfb2.jpg_r_390x260x95_3d4d4343.jpg']
    }
  },
  methods: {
    handleBallayClick () {
      this.showGallary = !this.showGallary
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 67%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      left 0
      right 0
      bottom -.2rem
      box-sizing border-box
      padding: 0 .24rem .56rem .3rem;
      line-height .8rem
      height 1.2rem
      font-size .24rem
      color #fff
      background linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0))
      .txt
        flex 1
        font-size .28rem
        .banner-title
          padding-right .1rem
      .banner-number
        .tupian-iconfont
          display inline-block
          vertical-align middle
          font-size .32rem
          line-height 1
</style>
