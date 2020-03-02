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
        imgUrl: 'https://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
      }, {
        id: 2,
        imgUrl: 'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      }, {
        id: 3,
        imgUrl: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }, {
        id: 4,
        imgUrl: 'https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
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
    padding-bottom: 31.25%
    .sweiper-img
      width: 100%
</style>
