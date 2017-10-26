<template>
  <section>
    <h1>Lobby</h1>
    <i class="ms ms-u"></i>
    <i class="ms ms-g ms-cost"></i>
    <i class="ms ms-c ms-cost"></i>
    <i class="ms ms-r ms-cost ms-shadow"></i>
    <i class="ms ms-wu ms-split ms-cost"></i>
    <i class="ms ms-2b ms-split ms-cost ms-shadow"></i>
    <i class="ms ms-w ms-cost ms-half"></i>

    <i class="ms ms-loyalty-up ms-loyalty-3"></i>
    <i class="ms ms-loyalty-down ms-loyalty-2"></i>

    <i class="ms ms-r ms-2x"></i> ms-2x
    <i class="ms ms-r ms-3x"></i> ms-3x
    <i class="ms ms-r ms-4x"></i> ms-4x
    <i class="ms ms-r ms-5x"></i> ms-5x
    <i class="ms ms-r ms-6x"></i> ms-6x

    <i class="ms ms-planeswalker ms-fw"></i> Planeswalker symbol
    <i class="ms ms-land ms-fw"></i> Land symbol

    <hr />

    <magic-icons text="{G}{R}" />
    /
    <magic-icons text="{1}{U}{W}" />
    /
    <magic-icons text="{R}{B}" :ms-cost="false" />
    /
    <magic-icons text="{R/G}" />
    /
    <magic-icons text="{E}" />
    /
    <magic-icons text="{C}" />
    /
    <magic-icons text="{W/P}" />
    /
    <magic-icons text="{T}" />
    /
    <magic-icons text="{hw}" />
    /
    <magic-icons text="{1000000}" />
    /
    <magic-icons text="{U/P}" :msSize="3" />
  </section>
</template>

<script>
  import magicIcons from './Globals/MagicIcons'

  export default {
    name: 'lobby',
    components: {
      magicIcons
    }
  }
</script>

<style scoped lang="scss">
  section { padding: 25px; }
  i { display: block; }
</style>
