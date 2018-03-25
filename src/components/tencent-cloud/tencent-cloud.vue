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
      <div class="item">
        <span class="name">地域</span>
        <select v-model="region">
          <option disabled value="">请选择</option>
          <option :value="region.key" v-for="(region,index) of regions" :key="index">
          {{region.name}}  
          </option>
        </select>
      </div>
      <div class="btns">
        <button class="clear" @click.stop.prevent="onClear">默认</button>
        <button type="submit" class="save">保存</button>
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import tencentRegion from '@/common/storge/tencent'

interface tencetnCloudSet {
  appid: string
  secretid: string
  secretkey: string
  bucket: string
  region:string
}


const tencentCloudSet: tencetnCloudSet = {
  appid: '',
  secretid: '',
  secretkey: '',
  bucket: '',
  region: ''
}

@Component({
  name: 'App'
})
export default class App extends Vue {
  appid = tencentCloudSet.appid
  secretkey = tencentCloudSet.secretkey
  secretid = tencentCloudSet.secretid
  bucket = tencentCloudSet.bucket
  region = tencentCloudSet.region
  regions = tencentRegion
  @Prop() id: number
  @Prop() currentData: any
  beforeMount() {
    if (this.currentData) {
      this.appid = this.currentData.appid
      this.secretkey = this.currentData.secretkey
      this.secretid = this.currentData.secretid
      this.bucket = this.currentData.bucket
      this.region = this.currentData.region
    }
  }
  initSettings() {
    this.appid = tencentCloudSet.appid
    this.secretkey = tencentCloudSet.secretkey
    this.secretid = tencentCloudSet.secretid
    this.bucket = tencentCloudSet.bucket
    this.region = tencentCloudSet.region
  }
  onSubmit() {
    if (this.checkNull()) {
      this.submit()
    } else {
      this.$notify({
        type: 'warn',
        title: '保存失败',
        text: '请确保内容全部填写完毕！',
        group: 'foo'
      })
    }
  }
  onClear() {
    this.$emit('clearCloud', this.id)
    this.initSettings()
  }
  checkNull() {
    if (this.appid === '' || this.secretkey === '' || this.secretid === '' || this.bucket === '' || this.region === '') {
      return false
    }
    return true
  }
  submit() {
    let { appid, secretid, bucket, secretkey,region } = this
    this.$emit('saveCloud', {
      id: this.id,
      data: {
        appid,
        secretid,
        bucket,
        secretkey,
        region
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