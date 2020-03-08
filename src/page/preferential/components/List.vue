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
      .item-title
        padding 0 .2rem
        line-height .8rem
        font-size .32rem
        .item-title-icon
          display inline-block
          width .36rem
          height .36rem
          margin-right .1rem
</style>
