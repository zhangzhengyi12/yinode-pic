<template>
  <div class="home">
    <Upload/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Upload from '@/components/upload/upload.vue'
@Component({
  components: {
    Upload
  }
})
export default class Home extends Vue {}
</script>
