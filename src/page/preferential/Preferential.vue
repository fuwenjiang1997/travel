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
        title: '成人票'
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
