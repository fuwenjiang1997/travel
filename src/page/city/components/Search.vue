<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div v-show="keyword" class="search-content" ref="searchWrapper">
      <ul class="content">
        <li
          class="search-item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li v-show="hasNoData" class="search-item">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { mapMutations } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      console.log(this)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (item.name.indexOf(this.keyword) > -1 || item.spell.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.searchScroll = new BScroll(this.$refs.searchWrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    padding 0 .1rem
    height .72rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      text-align center
      border-radius .1rem
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #cacaca
    .search-item
      line-height .62rem
      padding-left .2rem
      border-bottom 1px solid #ccc
      color #666
      background #fff
</style>
