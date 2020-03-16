<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner />
    <detail-remind></detail-remind>
    <div class="content">
<!--      <detail-list :list="list"></detail-list>-->
      <detail-simple :price="1930"></detail-simple>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailRemind from './components/Remind'
import DetailSimple from './components/Simple'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailRemind,
    DetailSimple
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
