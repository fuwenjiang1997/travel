<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item">
        <img class="item-img" :src="require('@/assets/imgs/recommend/recommend1.jpg')">
        <div class="item-info">
          <p class="item-title">踏青预售 高端出游</p>
          <p class="item-desc">清迈、普吉、廊曼、素万那普等机场</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend'
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    border-bottom 1px solid #ccc
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color $darkTextColor
      .item-button
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        text-align center
</style>
