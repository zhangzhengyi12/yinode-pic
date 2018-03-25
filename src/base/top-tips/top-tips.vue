<template>
  <div class="topTips">
    <span class="text" v-if="tipsContent">{{tipsContent}}</span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({
  name:'topTips'
})

export default class App extends Vue{
  @Prop() tipsContent:string = ''
}
</script>

<style lang='stylus' scoped>
.topTips
  padding 5px 20px
  background-color #555
</style>