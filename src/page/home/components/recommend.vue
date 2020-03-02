<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for = "(recommend, index) of recommendList" :key="index">
        <img class="item-img" :src="recommend.imgUrl">
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: [{
        id: 1,
        imgUrl: require('@/assets/imgs/recommend/recommend1.jpg'),
        title: '欢乐游乐场',
        desc: '情侣，小孩的欢乐场所，放假了，来这里享受你的美好周末吧'
      }, {
        id: 2,
        imgUrl: require('@/assets/imgs/recommend/recommend2.jpg'),
        title: '踏青预售 高端出c游',
        desc: '清迈、普吉、廊曼、素万那普等机场及调查活动会尽快的回复'
      }, {
        id: 3,
        imgUrl: require('@/assets/imgs/recommend/recommend3.jpg'),
        title: '踏青预售 高端出c游',
        desc: '清迈、普吉、廊曼、素万那普等机场及调查活动会尽快的回复'
      }, {
        id: 4,
        imgUrl: require('@/assets/imgs/recommend/recommend4.jpg'),
        title: '踏青预售 高端出c游',
        desc: '清迈、普吉、廊曼、素万那普等机场及调查活动会尽快的回复'
      }]
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
