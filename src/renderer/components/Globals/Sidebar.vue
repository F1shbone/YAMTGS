<template>
  <nav id="sidebar">
    <ul class="list-unstyled">
      <li>
        <router-link to="lobby" class="nav-item">
          <i class="ion ion-ios-people"></i>
          <p>Lobby</p>
        </router-link>
      </li>
      <li><router-link to="match" class="nav-item">
          <i class="ion ion-ios-monitor"></i>
          <p>Match</p>
        </router-link>
      </li>

      <li class="seperator"></li>

      <li>
        <router-link to="cards" class="nav-item">
          <i class="ion ion-ios-albums"></i>
          <p>Cards</p>
        </router-link>
      </li>
      <li>
        <router-link to="decks" class="nav-item">
          <i class="ion ion-ios-copy"></i>
          <p>Decks</p>
        </router-link>
      </li>
      <li>
        <router-link to="draft" class="nav-item">
          <i class="ion ion-social-dropbox"></i>
          <p>Draft</p>
        </router-link>
      </li>

      <li class="seperator"></li>

      <li>
        <router-link to="settings" class="nav-item">
          <i class="ion ion-ios-cog"></i>
          <p>Settings</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
@import '../../scss/variables';
@import '../../scss/ionicons/ionicons-variables';

#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  padding: 10px 0;
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, .9) 100%
  );

  .seperator {
    margin: 15px;
    border-bottom: 2px solid $border-color;
  }

  .nav-item {
    display: block;
    padding: 2px 5px;
    color: $body-color;
    text-align: center;
    text-decoration: none;
    transition: background-color .3s;

    &:hover {
      background-color: $body-highlight;
    }

    .ion {
      margin-top: 10px;
      font-size: 36px;
      background: linear-gradient(-45deg, #a657cf 0%,#3593d1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:not(.router-link-active) {
      .ion-ios-people::before { content: $ionicon-var-ios-people-outline; }
      .ion-ios-monitor::before { content: $ionicon-var-ios-monitor-outline; }
      .ion-ios-albums::before { content: $ionicon-var-ios-albums-outline; }
      .ion-ios-copy::before { content: $ionicon-var-ios-copy-outline; }
      .ion-social-dropbox::before { content: $ionicon-var-social-dropbox-outline; }
      .ion-ios-cog::before { content: $ionicon-var-ios-cog-outline; }
    }

    p { margin: 0; }
  }
}
</style>
