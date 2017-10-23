<template>
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
    <div class="card-actions">
      <button type="button" class="btn">
        Save
      </button>
    </div>
  </div>
</template>

<script>
  import KeyBind from '../Globals/KeyBind'

  export default {
    name: 'keybindings',
    components: {
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

<style lang="scss" scoped>

</style>

