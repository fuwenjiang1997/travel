<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner />
    <detail-remind></detail-remind>
    <div class="content">
      123
<!--      <detail-list :list="list"></detail-list>-->
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailRemind from './components/remind'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailRemind
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
