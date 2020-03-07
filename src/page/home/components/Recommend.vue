<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul class="recommend-area">
      <router-link
        tag="li"
        class="item"
        v-for = "item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
    }
  },
  props: {
    recommendList: {
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
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .recommend-area
    padding-right .1rem
    padding-left .1rem
    .item
      display flex
      overflow hidden
      height 1.9rem
      border-bottom 1px solid #ccc
      .item-img
        min-width 1.7rem
        width 1.7rem
        height 1.7rem
        padding .1rem
      .item-info
        flex 1
        min-width 0
        .item-title
          line-height .54rem
          font-size .32rem
          ellipsis()
        .item-desc
          display block
          line-height .4rem
          color $darkTextColor
          ellipsis()
        .item-button
          margin-top .2rem
          line-height .44rem
          background #ff9300
          padding 0 .2rem
          border-radius .06rem
          color #fff
      &:last-child
        border-bottom none
</style>
