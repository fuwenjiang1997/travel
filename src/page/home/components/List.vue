<template>
  <div>
    <div class="weekend-title">
      <span v-if="hasIconfont" class="iconfont" :class="hasIconfont"></span>
      {{lists.name}}
    </div>
    <ul class="area">
      <li class="item" v-for="item of lists.list" :key="item.id">
        <router-link :to="'/detail/' + item.id">
        <div class="img-wrapper">
          <img class="item-img" :src="item.img">
        </div>
        <div class="desc-area">
          <div class="title">{{item.title}}</div>
          <p class="des">{{item.desc}}</p>
          <home-price v-if="item.price" :price="item.price" />
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HomePrice from '@/common/price/Price'

export default {
  name: 'HomeList',
  data () {
    return {
    }
  },
  computed: {
    hasIconfont () {
      return this.lists.iconfont || false
    }
  },
  props: {
    lists: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    HomePrice
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
        .price
          font-size .38rem
          font-weight 550
          color: #ff7400
</style>
