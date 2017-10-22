<template>
  <div id="app">
    <sidebar></sidebar>

    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Globals/Sidebar'

  export default {
    name: 'yamtgs',
    components: {
      Sidebar
    }
  }
</script>

<style lang="scss">
  @import './scss/styles.scss';

  #content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100px;
    right: 0;
  }
</style>
