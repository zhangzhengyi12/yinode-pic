<template>

  <div class="upload">
    <div class="up-box" ref="upbox" @dragenter.prevent="onDragenter" @dragleave.prevent="onDragleave" @dragover.prevent="onDragover" @drop.prevent.stop="droped" :class="{enter:dragEnter}">
      <img :src="require('assets/upload.svg')" alt="">
      <span class="quick">
        快速上传，拖动图片到此处
      </span>
      <span class="or">or</span>
      <div class="file">
        <input type="file" ref="file" @change="onChangeFile" />
        <div class="btn" @click="onClickBtn()">选择文件</div>
      </div>
    </div>
  </div>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'upload'
})
export default class Upload extends Vue {
  dragEnter: boolean = false
  dragCount = 0
  mounted() {
    document.addEventListener('drop', (e: Event) => {
      e.preventDefault()
    })
  }
  onClickBtn() {
    ;(this.$refs.file as HTMLElement).click()
  }
  onChangeFile(e: any) {
    let files = e.target.files
    this.uploadFile(files)
  }
  uploadFile(files: Array<any>) {}
  onDragenter(e: Event) {
    this.dragCount++
    this.dragEnter = true
  }
  onDragleave(e: Event) {
    this.dragCount--
    if (this.dragCount === 0) {
      this.dragEnter = false
    }
  }
  onDragover(e: Event) {
    this.dragEnter = true
  }
  droped(e: any) {
    let files = e.dataTransfer.files
    this.dragEnter = false
  }
}
</script>

<style lang='stylus' scoped>
.upload
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  .up-box
    max-width 600px
    padding 50px 0
    margin-top 50px
    width 95%
    display flex
    flex-direction column
    align-items center
    background-color #eee
    border-radius 10px
    box-shadow 2px 3px 10px rgba(100, 100, 100, 0.5)
    &.enter
      background-color #ccc
    img
      width 80px
    .quick
      margin-top 10px
      color #707070
      font-size 22px
    .or
      color #707070
      margin-top 10px
    .file
      input
        display none
      .btn
        cursor pointer
        margin-top 10px
        background #707070
        color #fff
        border none
        border-radius 10px
        padding 8px 30px
        &:hover
          background #909090
</style>