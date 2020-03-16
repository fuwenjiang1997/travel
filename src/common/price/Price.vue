<template>
  <div class="price">
    <span class="iconfont icon-renminbi icon-fontsize"></span>
    {{price}}
  </div>
</template>

<script>
export default {
  name: 'Price',
  props: {
    price: Number
  }
}
</script>

<style lang="stylus" scoped>
  .price
    font-size .38rem
    font-weight 550
    color: #ff7400
  .icon-fontsize
    font-size .28rem
</style>
