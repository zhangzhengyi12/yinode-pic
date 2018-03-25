<template>
  <div class="tencent">
    <form action="#" class="form" @submit.stop.prevent="onSubmit">
      <div class="item">
        <span class="name">APPID</span>
        <input type="text" v-model.trim="appid" />
      </div>
      <div class="item">
        <span class="name">SecretId</span>
        <input type="text" v-model.trim="secretid" />
      </div>
      <div class="item">
        <span class="name">SecretKey</span>
        <input type="text" v-model.trim="secretkey" />
      </div>
      <div class="item">
        <span class="name">Bucket</span>
        <input type="text" v-model.trim="bucket" />
      </div>
      <div class="btns">
        <button class="clear">清除所有</button>
        <button type="submit" class="save">保存</button>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

const tencentCloudSet = {
  appid: '',
  secretid: '',
  secretkey: '',
  bucket: ''
}

@Component({
  name: 'App'
})
export default class App extends Vue {
  appid = tencentCloudSet.appid
  secretkey = tencentCloudSet.secretkey
  secretid = tencentCloudSet.secretid
  bucket = tencentCloudSet.bucket
  @Prop() id !: number
  @Prop() currentData !: any
  beforeMount(){
    if(this.currentData){
      this.appid = this.currentData.appid
      this.secretkey = this.currentData.secretkey
      this.secretid = this.currentData.secretid
      this.bucket = this.currentData.bucket
    }
  }
  onSubmit() {
    if (this.checkNull()) {
      this.submit()
    } else {
      this.$notify({
        type: 'warn',
        title: '保存失败',
        text: '请确保内容全部填写完毕！',
        group:'foo'
      })
    }
  }
  checkNull() {
    if (this.appid === '' || this.secretkey === '' || this.secretid === '' || this.bucket === '') {
      return false
    }
    return true
  }
  submit(){
      let { appid, secretid, bucket, secretkey } = this
      this.$emit('saveCloud', {
        id: this.id,
        data: {
          appid,
          secretid,
          bucket,
          secretkey
        }
      })
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/style/commonCloudFormStyle.styl'
.tencent
  width 100%
</style>