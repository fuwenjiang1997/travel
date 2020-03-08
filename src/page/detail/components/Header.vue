<template>
  <div class="detail-header">
    <div class="bg" :style="opacityStyle"></div>
    <router-link to="/">
      <div class="header-left">
        <div class="box-circle" v-bind:class="{bfColor: !opacityStyle.opacity}">
          <span class="iconfont icon-xiazai6 iconfont-size"></span>
        </div>
      </div>
    </router-link>
    <div class="header-right">
      <div class="box-circle" v-bind:class="{bfColor: !opacityStyle.opacity}">
        <span class="iconfont icon-icon-test iconfont-size" ></span>
      </div>
      <div class="box-circle" v-bind:class="{bfColor: !opacityStyle.opacity}">
        <span class="iconfont icon-shenglvehao iconfont-size" ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top < 20) {
        let opacity = top / 20
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        if (this.opacityStyle.opacity !== 1) {
          this.opacityStyle = { opacity: 1 }
        }
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .detail-header
    position fixed
    top .08rem
    left 0
    width 100%
    height $detailHeaderHeight
    z-index 10
    .header-left
      position absolute
      left .08rem
    .header-right
      position absolute
      right .08rem
    .box-circle
      display inline-block
      z-index 9
      width $detailHeaderHeight
      height $detailHeaderHeight
      line-height $detailHeaderHeight
      text-align center
      border-radius 50%
      color #fff
      .iconfont-size
        position relative
        z-index 11
        font-size .52rem
    .bfColor
      background-color: rgba(0, 0, 0, 0.5)
    .bg
      position absolute
      top -.08rem
      right -1px
      bottom -1px
      left -1px
      z-index 10
      background $bgColor
</style>
