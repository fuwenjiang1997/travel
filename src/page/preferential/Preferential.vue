<template>
  <div class="preferential">
    <preferential-header></preferential-header>
    <preferential-banner />
    <div class="content">
      <preferential-list :list="list"></preferential-list>
    </div>
  </div>
</template>

<script>
import PreferentialBanner from './components/Banner'
import PreferentialHeader from './components/Header'
import PreferentialList from './components/List'

export default {
  name: 'Preferential',
  data () {
    return {
      list: [{
        title: '成人票',
        child: [{
          title: '特殊人群',
          content: '身高1.3（含1.3米）米以下及6周岁（含6周岁）以下儿童实行免票；离休干部、现役军人、残疾人凭相 关证件经专用通道免费入园。（以上仅供参考，具体以景区现场安排为准，上述优惠政策，需到景区自行购买）。',
          child: [{
            title: '男人票',
            content: '北京地势西北高、东南低。西部、北部和东北部三面环山，东南部是一片缓缓向渤海倾斜的平原。境内流经的主要河流有：永定河、潮白河、北运河、拒马河等，多由西北部山地发源，穿过崇山峻岭，向东南蜿蜒流经平原地区，最后分别汇入渤海。北京的气候为典型的暖温带半湿润大陆性季风气候，夏季高温多雨，冬季寒冷干燥，春、秋短促。'
          }, {
            title: '女人票'}]
        }, {
          title: '女人票'}]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }]
    }
  },
  components: {
    PreferentialBanner,
    PreferentialHeader,
    PreferentialList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
