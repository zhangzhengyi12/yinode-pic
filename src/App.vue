<template>
  <div id="app">
    <Top-bar/>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TopBar from 'components/header/header.vue'

@Component({
  name: 'App',
  components: {
    TopBar
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@import 'common/normalize/normalize.css'
</style>
