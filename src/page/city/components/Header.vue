<template>
  <div>
    <div class="header">城市选择
      <router-link to="/">
        <span class="iconfont icon-xiazai6 header-back"></span>
      </router-link>
    </div>
    <city-search></city-search>
  </div>
</template>

<script>
import CitySearch from './Search'

export default {
  name: 'CityHeader',
  components: {
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varbles.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    font-size .32rem
    color #fff
    background $bgColor
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
