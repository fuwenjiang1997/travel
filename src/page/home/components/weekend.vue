<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul class="area">
      <li class="item" v-for="(item, index) of list" :key="index">
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
  name: 'weekend',
  data () {
    return {
      list: [{
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
        padding-bottom 70%
        .item-img
          margin-bottom .2rem
          width 100%
          border-radius .3rem
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
