<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner />
    <div class="content">
      123
<!--      <detail-list :list="list"></detail-list>-->
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
