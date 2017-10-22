<template>
  <section class="draft-wrapper">
    <iframe src="http://tappedout.net/mtg-draft-simulator/" width="100%" height="100%" />
  </section>
</template>

<script>

  export default {
    name: 'draft',
    ready () {
      let browser = this.$el.querySelector('iframe')
      browser.mute()
    }
  }
</script>

<style scoped lang="scss">
.draft-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  iframe {
    border: 0 none;
  }
}
</style>
