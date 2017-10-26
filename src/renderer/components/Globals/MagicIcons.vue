<template>
  <span class="ms-container">
    <i
      class="ms"

      v-for="(icon, index) in icons"
      :key="index"
      :class="classes(icon)"
    />
  </span>
</template>

<script>
export default {
  name: 'magicIcons',
  props: {
    text:  {
      type: String,
      default: ''
    },
    msCost: {
      type: Boolean,
      default: true
    },
    msShadow: {
      type: Boolean,
      default: false
    },
    msSize: {
      type: Number,
      default: 1
    }
  },
  computed: {
    icons () {
      let parts = (this.text || '')
        .replace(/\}\{/g, ',')
        .replace(/\{/g, '')
        .replace(/\}/g, '')
        .split(',')

      return parts.map(this.symbol2class)
    }
  },
  methods: {
    classes (icon) {
      let msSize = `ms-${this.msSize}x`

      return {
        [icon]: true,
        [msSize]: true,
        'ms-cost': this.msCost,
        'ms-shadow': this.msShadow
      }
    },
    symbol2class (symbol) {
      switch (symbol) {
        // Colors
        case 'W': return 'ms-w'
        case 'U': return 'ms-u'
        case 'B': return 'ms-b'
        case 'R': return 'ms-r'
        case 'G': return 'ms-g'
        case 'C': return 'ms-c'
        case 'E': return 'ms-e'
        case 'S': return 'ms-s'
        // Phyrexian
        case 'P': return 'ms-p'
        case 'W/P': return 'ms-wp'
        case 'U/P': return 'ms-up'
        case 'B/P': return 'ms-bp'
        case 'R/P': return 'ms-rp'
        case 'G/P': return 'ms-gp'
        // Splitmana
        case 'W/U': return 'ms-wu ms-split'
        case 'W/B': return 'ms-wb ms-split'
        case 'U/R': return 'ms-ur ms-split'
        case 'U/B': return 'ms-ub ms-split'
        case 'B/R': return 'ms-br ms-split'
        case 'B/G': return 'ms-bg ms-split'
        case 'R/G': return 'ms-rg ms-split'
        case 'R/W': return 'ms-rw ms-split'
        case 'G/W': return 'ms-gw ms-split'
        case 'G/B': return 'ms-gb ms-split'
        // Numbers
        case '0': return 'ms-0'
        case '½': return 'ms-1-2'
        case '1': return 'ms-1'
        case '2': return 'ms-2'
        case '3': return 'ms-3'
        case '4': return 'ms-4'
        case '5': return 'ms-5'
        case '6': return 'ms-6'
        case '7': return 'ms-7'
        case '8': return 'ms-8'
        case '9': return 'ms-9'
        case '10': return 'ms-10'
        case '11': return 'ms-11'
        case '12': return 'ms-12'
        case '13': return 'ms-13'
        case '14': return 'ms-14'
        case '15': return 'ms-15'
        case '16': return 'ms-16'
        case '17': return 'ms-17'
        case '18': return 'ms-18'
        case '19': return 'ms-19'
        case '20': return 'ms-20'
        case 'X': return 'ms-x'
        case 'Y': return 'ms-y'
        case 'Z': return 'ms-z'
        // Symbols
        case 'T': return 'ms-tap'
        case 'Q': return 'ms-untap'
        case 'CHAOS': return 'ms-chaos'
        case 'PW': return 'ms-planeswalker'
        // Unglued/Unhinged
        case '100': return 'ms-100'
        case '1000000': return 'ms-1000000'
        case '∞': return 'ms-infinity'

        case 'hw': return 'ms-w ms-half'
        case 'hu': return 'ms-u ms-half'
        case 'hb': return 'ms-b ms-half'
        case 'hr': return 'ms-r ms-half'
        case 'hg': return 'ms-g ms-half'

        default: return `{${symbol}}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

