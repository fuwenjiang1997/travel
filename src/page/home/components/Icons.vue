<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.icon">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [{
        id: 1,
        desc: '酒店',
        icon: require('@/assets/imgs/icons/hotel.png')
      }, {
        id: 2,
        desc: '机票',
        icon: require('@/assets/imgs/icons/flight.png')
      }, {
        id: 3,
        desc: '火车票',
        icon: require('@/assets/imgs/icons/train.png')
      }, {
        id: 4,
        desc: '度假',
        icon: require('@/assets/imgs/icons/package.png')
      }, {
        id: 5,
        desc: '经典门票',
        icon: require('@/assets/imgs/icons/piao.png')
      }, {
        id: 6,
        desc: '海外酒店',
        icon: require('@/assets/imgs/icons/haiwaijipiao.png')
      }, {
        id: 7,
        desc: '低价机票',
        icon: require('@/assets/imgs/icons/jipiao.png')
      }, {
        id: 8,
        desc: '汽车票船票',
        icon: require('@/assets/imgs/icons/qichepiao.png')
      }, {
        id: 9,
        desc: '自由行',
        icon: require('@/assets/imgs/icons/ziyouxing.png')
      }, {
        id: 10,
        desc: '攻略',
        icon: require('@/assets/imgs/icons/gonglue.png')
      }, {
        id: 11,
        desc: '民俗客栈',
        icon: require('@/assets/imgs/dicons/minsu.png')
      }, {
        id: 12,
        desc: '专车自驾',
        icon: require('@/assets/imgs/dicons/zijiayou.png')
      }, {
        id: 13,
        desc: '赚钱·信用卡',
        icon: require('@/assets/imgs/dicons/zhuanqian.png')
      }, {
        id: 14,
        desc: '旅游团购',
        icon: require('@/assets/imgs/dicons/gouwu.png')
      }, {
        id: 15,
        desc: '一日游',
        icon: require('@/assets/imgs/dicons/yiriyou.png')
      }, {
        id: 16,
        desc: '特惠酒店',
        icon: require('@/assets/imgs/dicons/tehuijiudian.png')
      }, {
        id: 17,
        desc: '借钱',
        icon: require('@/assets/imgs/dicons/jieqian.png')
      }, {
        id: 18,
        desc: '白金卡',
        icon: require('@/assets/imgs/dicons/baijinka.png')
      }, {
        id: 19,
        desc: '游轮',
        icon: require('@/assets/imgs/dicons/youlun.png')
      }, {
        id: 20,
        desc: '周边短途',
        icon: require('@/assets/imgs/dicons/zhoubianduanlv.png')
      }],
      diconsList: [{
        id: 1,
        desc: '民俗客栈',
        icon: require('@/assets/imgs/dicons/minsu.png')
      }, {
        id: 2,
        desc: '专车自驾',
        icon: require('@/assets/imgs/dicons/zijiayou.png')
      }, {
        id: 3,
        desc: '赚钱·信用卡',
        icon: require('@/assets/imgs/dicons/zhuanqian.png')
      }, {
        id: 4,
        desc: '旅游团购',
        icon: require('@/assets/imgs/dicons/gouwu.png')
      }, {
        id: 5,
        desc: '一日游',
        icon: require('@/assets/imgs/dicons/yiriyou.png')
      }, {
        id: 6,
        desc: '特惠酒店',
        icon: require('@/assets/imgs/dicons/tehuijiudian.png')
      }, {
        id: 7,
        desc: '借钱',
        icon: require('@/assets/imgs/dicons/jieqian.png')
      }, {
        id: 8,
        desc: '白金卡',
        icon: require('@/assets/imgs/dicons/baijinka.png')
      }, {
        id: 9,
        desc: '游轮',
        icon: require('@/assets/imgs/dicons/youlun.png')
      }, {
        id: 0,
        desc: '周边短途',
        icon: require('@/assets/imgs/dicons/zhoubianduanlv.png')
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 40%
  .icons
    margin-top: .2rem
    padding-right .1rem
    padding-left .1rem
    .icon
      position relative
      float left
      height: 0
      width 20%
      padding-bottom 20%
      text-align center
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding 1px
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        right: 0
        left: 0
        bottom 0
        height: .44rem
        line-height: .44rem
        overflow hidden
        ellipsis()
</style>
