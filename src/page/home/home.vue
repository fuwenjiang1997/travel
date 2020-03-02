<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/page/home/components/header.vue'
import HomeSwiper from '@/page/home/components/swiper.vue'
import HomeIcons from '@/page/home/components/icons.vue'

export default {

  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style></style>
