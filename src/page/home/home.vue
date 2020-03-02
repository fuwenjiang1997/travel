<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from '@/page/home/components/header.vue'
import HomeSwiper from '@/page/home/components/swiper.vue'
import HomeIcons from '@/page/home/components/icons.vue'
import HomeRecommend from '@/page/home/components/recommend.vue'

export default {

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style></style>
