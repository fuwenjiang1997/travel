<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="this.swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend :recommendList="this.recommendList"></home-recommend>
    <home-weekend :weekendList="this.weekendList"></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/page/home/components/Header.vue'
import HomeSwiper from '@/page/home/components/Swiper.vue'
import HomeIcons from '@/page/home/components/Icons.vue'
import HomeRecommend from '@/page/home/components/Recommend.vue'
import HomeWeekend from '@/page/home/components/Weekend.vue'
import HomeFooter from '@/page/footer/Footer.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeFooter
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then((res) => {
        let data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }).catch((res) => {
        console.log('获取数据失败')
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
