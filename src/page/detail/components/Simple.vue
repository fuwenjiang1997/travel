<template>
  <div class="simple">
    <div class="on-sale">
      <div class="sale">正在特惠</div>
      <p class="txt">亲子游，畅游“海上迪士尼”珍珠岛，首选国航</p>
    </div>
    <div class="content">
      <div class="title">重庆出发-跟团游 春节精选「芽庄+珍珠岛🔥二人立减400」优选国航｜泥浆浴+仙境湾｜赠大礼包</div>
      <div class="price">
        <detail-price :price="price"></detail-price>起/人
      </div>
      <div class="discount"></div>
      <div class="other"></div>
    </div>
  </div>
</template>

<script>
import DetailPrice from '@/common/price/Price'

export default {
  name: 'Simple',
  props: {
    price: Number
  },
  components: {
    DetailPrice
  }
}
</script>

<style lang="stylus" scoped>
  .simple
    padding .3rem .3rem 0
    .on-sale
      margin-bottom .1rem
      .sale
        display inline-block
        box-sizing border-box
        padding .06rem
        font-size .2rem
        border-radius .04rem
        color #fff
        background linear-gradient(to right, #FF554C, #FF7F57)
      .txt
        display inline-block
        color #FFA0A3
        background #FFF0F0
    .content
      .title
        font-size .36rem
        line-height .46rem
        color #000
      .price
        display inline
</style>
