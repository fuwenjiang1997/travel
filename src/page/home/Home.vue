<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="this.swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-list :lists="this.preference"></home-list>
    <home-list :lists="this.tickets"></home-list>
    <home-list :lists="this.popular"></home-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/page/home/components/Header.vue'
import HomeSwiper from '@/page/home/components/Swiper.vue'
import HomeIcons from '@/page/home/components/Icons.vue'
import HomeRecommend from '@/page/home/components/Recommend.vue'
import HomeList from '@/page/home/components/List.vue'
import HomeFooter from '@/page/footer/Footer.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      preference: {},
      tickets: {},
      popular: {}
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeList,
    HomeFooter
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then((res) => {
        let data = res.data.data
        this.swiperList = data.swiperList
        this.preference = data.preference
        this.tickets = data.tickets
        this.popular = data.popular
      }).catch((res) => {
        console.log('获取数据失败')
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
