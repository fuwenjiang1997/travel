<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item">
        <img :src="require('@/assets/imgs/recommend/recommend1.jpg')">
        <div>
          <p class="title">这是一个title</p>
          <p class="des">这是一个内容</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend'
}
</script>

<style lang="stylus" scoped>
  .weekend-title
    margin-top .1rem
    line-height .8rem
    background #eee
    text-indent .2rem
</style>
