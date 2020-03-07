<template>
  <div  class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">
          所在城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          热门城市
        </div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="hotCity in hotCities"
            :key="hotCity.id"
            @click="handleCityClick(hotCity.name)"
          >
            <div class="button">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <ul class="item-list">
          <li
            class="item"
            v-for="city in item"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >
            {{city.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'List',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['wrapper'], {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  .list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .border-topbottom
      box-sizing border-box
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
      .button
        margin .1rem
        padding .01rem 0
        border .02rem solid #ccc
        text-align center
        border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
        border-bottom 1px solid #ccc
</style>
