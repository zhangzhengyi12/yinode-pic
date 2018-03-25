<template>
  <div class="top-bar">
    <div class="main">
      <div class="logo">
        <img :src="require('assets/logo.svg')" alt="">
      </div>
      <h1 class="name">一点图床</h1>
    </div>
    <div class="setting" @click="$emit('toggleOptionsBtn')">
      <img :src="require('assets/setting.svg')" alt="">
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'top-bar'
})
export default class App extends Vue {
  activeIndex = 0
}
</script>

<style lang='stylus' scoped>
.top-bar
  height 40px
  display flex
  justify-content space-between
  align-items center
  background-color #2EA9D3
  padding 0 10px
  .main
    display flex
    align-items center
    height 100%
    .logo
      img
        width 30px
    .name
      font-size 16px
      color #fff
      margin-left 5px
  .setting
    float right
    &:hover
      cursor pointer
      filter opacity(.8)
    img
      width 20px
</style>