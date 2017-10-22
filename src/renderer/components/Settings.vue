<template>
  <section class="settings-wrapper">
    <div class="container">
      <div class="row">
        <h1 class="page-header">Settings</h1>
      </div>

      <div class="row">
        <div class="col col-25">
          <settings-card></settings-card>

          <div class="card">
            <div class="card-header">
              <div class="title">Shortcuts:</div>
            </div>
            <div class="card-content">
              <key-bind v-model="leave" label="Leave game"></key-bind>
              <key-bind v-model="untap" label="Untap all"></key-bind>
              <key-bind v-model="life" label="Set Lifepoints"></key-bind>
              <key-bind v-model="dice" label="Roll dice"></key-bind>
              <key-bind v-model="shuffle" label="Shuffle Library"></key-bind>
            </div>
          </div>
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
  import KeyBind from './Globals/KeyBind'

  export default {
    name: 'settings',
    components: {
      SettingsCard,
      KeyBind
    },
    data () {
      return {
        leave: 'ctrl + q',
        untap: 'ctrl + u',
        life: 'ctrl + l',
        dice: 'ctrl + i',
        shuffle: 'ctrl + s'
      }
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
