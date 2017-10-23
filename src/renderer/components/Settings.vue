<template>
  <section class="settings-wrapper">
    <div class="container">
      <div class="row">
        <h1 class="page-header">Settings</h1>
      </div>

      <div class="row">
        <div class="col col-25">
          <settings-card />

          <settings-keybinding />
        </div>
        <!-- <div class="col">.column</div>
        <div class="col">.column</div>
        <div class="col">.column</div> -->
      </div>
    </div>
  </section>
</template>

<script>
  import SettingsCard from './Settings/Cards'
  import SettingsKeybinding from './Settings/Keybindings'

  export default {
    name: 'settings',
    components: {
      SettingsCard,
      SettingsKeybinding
    }
  }
</script>

<style scoped lang="scss">
@import '../scss/variables';

.settings-wrapper {
  margin: 20px;
}
.page-header {
  text-transform: uppercase;
}
.btn {
  line-height: 2.5rem;
}

.database-info {
  li {
    padding: 2px 5px;
    font-weight: 200;
    text-align: center;
    > span {
      display: block;
      // color: $body-highlight;
      // text-shadow: 1px 1px $body-color;
    }
  }
  li + li { border-left: 1px solid $border-color; }
}
</style>
