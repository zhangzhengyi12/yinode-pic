<template>
  <div class="top-bar">
    <div class="logo">
      <img :src="require('assets/logo.svg')" alt="">
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator"

@Component({
  name:'top-bar'
})

export default class App extends Vue{
  
}
</script>

<style lang='stylus' scoped>
.top-bar
  .logo
    img
      width 
</style>