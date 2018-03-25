<template>
  <div class="options">
    <transition name="topin">
      <div class="content" v-show="show">
        <h3 class="tips">选择存储方式，目前仅支持腾讯云最新版本</h3>
        <ul class="storge-list">
          <li class="item" :class="{active:activeCloudId === cloud.id}" v-for="(cloud,key) of cloudMap" :key="key">{{cloud.name}}</li>
        </ul>
        <div class="settings">
          <cloud-from @close="$emit('close')" :activeId="activeCloudId" />
        </div>
      </div>
    </transition>
    <transition name="opin">
      <div @click="$emit('close')" class="mask" v-show="show"></div>
    </transition>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import CloudFrom from '@/components/cloud-form/cloud-form.vue'
import cloudMap from '@/common/storge/cloudMap.ts'

@Component({
  name: 'options',
  components:{
    CloudFrom
  }
})
export default class App extends Vue {
  @Prop() show!: boolean
  activeCloudId = cloudMap.Tencent.id
  cloudMap = cloudMap
  getCurrentCloudSet(){
  }
  clg(i:any,v:any){
   console.log(i);
   console.log(v);
  }
}
</script>

<style lang='stylus' scoped>
.mask
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgba(200, 200, 200, 0.3)
  z-index 1
.content
  z-index 2
  position absolute
  left 50%
  transform translateX(-50%)
  top 50px
  background #fff
  padding 10px 30px
  border-radius 10px
  box-shadow 0px 0px 10px #aaa
  width 95%
  max-width 600px
  box-sizing border-box
  .tips
    font-size 12px
    color #666
  .storge-list
    display flex
    align-items center
    padding 0
    margin 0
    border-bottom 1px solid #ccc
    .item
      list-style none
      padding 5px 20px
      font-size 16px
      color #666
      border 1px solid #ccc
      border-radius 5px 5px 0 0
      margin-bottom -1px
      &.active
        border-bottom 1px solid #fff
.topin-enter, .topin-leave-to
  transform translate(-50%, -100px)
  opacity 0
.topin-enter-active, .topin-leave-active
  transition all 0.5s ease-out
.opin-enter, .opin-leave-to
  opacity 0
.opin-enter-active, .opin-leave-active
  transition all 0.3s
</style>