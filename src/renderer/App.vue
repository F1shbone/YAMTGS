<template>
  <div id="app">
    <sidebar></sidebar>

    <div id="content">
      <transition name="slide">
        <router-view></router-view>
      </transition>
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

    overflow-x: hidden;

    > section {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: .3s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
</style>
