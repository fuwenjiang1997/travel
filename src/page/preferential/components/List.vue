<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-content">{{item.content}}</div>
      <div v-if="item.child">
        <preferential-list :list="item.child"></preferential-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreferentialList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list
    .item
      padding 0 .2rem
      .item-title
        margin-top .1rem
        margin-bottom .2rem
        line-height .5rem
        font-size .32rem
        border-bottom 1px solid #ccc
        .item-title-icon
          display inline-block
          width .36rem
          height .36rem
          margin-right .1rem
      .item-content
        padding 0 .2rem
        font-size .28rem
        line-height .32rem
</style>
