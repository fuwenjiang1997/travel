<template>
  <div class="wapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="sweiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        loop: true,
        autoplay: {
          delay: 3000
        }
      },
      swiperList: [{
        id: 1,
        imgUrl: require('@/assets/imgs/swiper1.jpg')
      }, {
        id: 2,
        imgUrl: require('@/assets/imgs/swiper2.jpg')
      }, {
        id: 3,
        imgUrl: require('@/assets/imgs/swiper3.jpg')
      }, {
        id: 4,
        imgUrl: require('@/assets/imgs/swiper4.jpg')
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wapper >>>.swiper-pagination-bullet-active
    background: #fff !important
  .wapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.25%
    .sweiper-img
      width: 100%
</style>
