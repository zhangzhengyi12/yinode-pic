<template>
  <div id="app">
    <notifications group="foo" />
    <Top-bar @toggleOptionsBtn="toggleOptions" id="top"/>
    <router-view/>
    <options class="options" @close="toggleOptions" :show="displayOptions"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import TopBar from '@/components/header/header.vue'
import Options from '@/components/options/options.vue'

@Component({
  name: 'App',
  components: {
    TopBar,
    Options
  }
})
export default class App extends Vue {
  displayOptions = false
  toggleOptions(){
    this.displayOptions = !this.displayOptions
  }
}
</script>

<style lang="stylus">
@import 'common/normalize/normalize.css'

#app
  font-family 'Microsoft YaHei'
  #top
    box-shadow 0px 2px 10px rgba(80,100,100,.4)

.vue-notification {
  padding: 10px;
  margin: 20px 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }

  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}

// animatation

</style>
