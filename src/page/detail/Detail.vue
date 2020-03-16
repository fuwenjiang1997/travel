<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner :imgs="imgs" />
    <detail-remind></detail-remind>
    <div class="content">
<!--      <detail-list :list="list"></detail-list>-->
      <detail-simple
        :price="1930"
        :listDiscount="listDiscount"
        :listOther = "listOther"
      ></detail-simple>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailRemind from './components/Remind'
import DetailSimple from './components/Simple'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      listDiscount: [{
        id: 1,
        desc: '现金红包'
      }, {
        id: 2,
        desc: '专享红包'
      }, {
        id: 3,
        desc: '代金劵'
      }],
      listOther: [{
        id: 1,
        desc: '舒适游'
      }, {
        id: 2,
        desc: '二次确认'
      }],
      imgs: ['https://imgs.qunarzz.com/vs_ceph_vs_tts/8d89217f-fbcb-4273-9354-84a326e94e20.jpg_r_390x260x95_f8ae5345.jpg',
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/40f15858-3e82-4c52-886c-67bff804dfb2.jpg_r_390x260x95_3d4d4343.jpg']
    }
  },
  methods: {
    getDetailInfo (id) {
      axios.get('/api/detail?id=' + id).then((res) => {
        console.log(res.data)
      }).catch((res) => {
        console.log(res.msg)
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailRemind,
    DetailSimple
  }
}
</script>

<style lang="stylus" scoped>
</style>
