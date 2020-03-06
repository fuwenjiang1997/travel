<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul class="area">
      <li class="item" v-for="(item, index) of weekendList" :key="index">
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="desc-area">
          <div class="title">{{item.title}}</div>
          <p class="des">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
    }
  },
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .weekend-title
    margin-top .1rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .area
    display flex
    flex-wrap wrap
    padding-right .1rem
    padding-left .1rem
    .item
      width 50%
      min-width 50%
      padding .1rem
      box-sizing border-box
      .img-wrapper
        overflow hidden
        height 0
        padding-bottom 39%
        .item-img
          margin-bottom .15rem
          width 100%
          border-radius .2rem
          overflow hidden
      .desc-area
        .title
          height .54rem
          line-height .54rem
          font-size .32rem
          font-weight 450
          color #000
          ellipsis()
        .des
          line-height .4rem
          color #999
          ellipsis()
</style>
