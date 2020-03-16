<template>
  <div class="remind">
    <span class="iconfont icon-tixing remind-icon-style" ></span>
    <p>{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'Remind',
  data () {
    return {
      desc: '自1月31日起，暂停给两周在中国生活的外国人签发旅游签证；暂停中越间往返航班；暂停办理经东兴-芒街口岸出入境的人员手续。'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .remind
    overflow auto
    padding .2rem .22rem
    color #f4660a
    background #fefaeb
    .remind-icon-style
      display inline-block
      float left
      margin-right .08rem
    p
      line-height .38rem
</style>
