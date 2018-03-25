<template>
  <div class="form">
    <tencent-cloud @clearCloud="onClear"
    :id="cloudMap.Tencent.id"
    @saveCloud="onSave" 
    v-show="activeId === cloudMap.Tencent.id"
    :currentData="tencetnCurrentSet"
     />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator"
import TencentCloud from '@/components/tencent-cloud/tencent-cloud.vue'
import cloudMap from '@/common/storge/cloudMap.ts'
import { Mutation,Getter } from 'vuex-class'
interface saveData {
  type:string,
  data:any
}
@Component({
  name:'cloudForm',
  components:{
    TencentCloud
  }
})

export default class App extends Vue{
  @Prop() activeId: number
  @Mutation('SAVE_CLOUD') saveCloud:any
  @Mutation('CLEAR_CLOUD') clearCloud:any
  @Getter('getCloudSettings') cloudSettings:any
  cloudMap = cloudMap
  onSave(data:saveData){
    this.saveCloud(data)
     this.$notify({
        type: 'success',
        title: '保存成功',
        text: '快去试试吧！',
        group:'foo'
      })
    this.$emit('close')
  }
  onClear(id:number){
    this.clearCloud(id)
    this.$notify({
        type: 'success',
        title: '已经清除',
        text: '重设当前云为默认状态！',
        group:'foo'
      })
  }
  get tencetnCurrentSet(){
    let id = cloudMap.Tencent.id
    let set = this.cloudSettings[id]
    if(set) return set
    return null
  }
}
</script>

<style lang='stylus' scoped>
.form
  width 100%
</style>