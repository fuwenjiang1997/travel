<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont icon-xiazai6"></span>
      </div>
      <div class="header-input">
        <span class="iconfont icon-sousuo" ></span>
        热点城市/旅游
      </div>
      <router-link to="/city">
        <div class="header-right">
          北京<span class="iconfont icon-jiantou arrow-icon" ></span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varbles.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      text-align center
    .header-input
      flex 1
      margin-top .12rem
      margin-left .1rem
      padding-left .2rem
      height .62rem
      line-height .62rem
      color #ccc
      background #fff
      border-radius .1rem
    .header-right
      width 1.24rem
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .2rem
</style>
