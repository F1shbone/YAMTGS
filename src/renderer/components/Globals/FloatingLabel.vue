<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :class="classObject" @click="focusFormEl">
      {{ floatLabel }}
    </div>
    <slot></slot>
    <div class="input-highlight"></div>
  </div>
</template>

<script>
export default {
  name: 'floating-label',
  props: {
    on: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    },
    dispatch: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      formEl: undefined,
      isActive: false,
      isFocused: false
    }
  },
  mounted () {
    this.formEl = this.$el.querySelector('input, textarea, select')
    this.formEl.addEventListener('input', this.updateIsActive)
    this.formEl.addEventListener('input', this.updateIsFocused)
    this.formEl.addEventListener('blur', this.updateIsFocused)
    this.formEl.addEventListener('focus', this.updateIsFocused)
    this.dispatchInput()
  },
  beforeDestroy () {
    this.formEl.removeEventListener('input', this.updateIsActive)
    this.formEl.removeEventListener('input', this.updateIsFocused)
    this.formEl.removeEventListener('blur', this.updateIsFocused)
    this.formEl.removeEventListener('focus', this.updateIsFocused)
  },
  methods: {
    dispatchInput () {
      if (this.dispatch) {
        const event = document.createEvent('HTMLEvents')
        event.initEvent('input', true, false)
        this.formEl.dispatchEvent(event)
      }
    },
    focusFormEl () {
      this.formEl.focus()
    },
    updateIsActive (e) {
      this.isActive = e.target.value.length > 0
    },
    updateIsFocused (e) {
      this.isFocused = e.target === document.activeElement && this.isActive
    }
  },
  computed: {
    classObject () {
      return {
        'vfl-label-on-input': this.on && this.isActive,
        'vfl-label-on-focus': this.isFocused
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    width () {
      return this.formEl ? `${this.formEl.clientWidth}px` : 'auto'
    },
    floatLabel () {
      if (this.label) return this.label
      switch (this.formElType) {
        case 'input':
        case 'textarea':
          return this.formEl.placeholder
        case 'select':
          return this.formEl.querySelector('option[disabled][selected]').innerHTML
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables';

.vfl-has-label {
  position: relative;
  width: 100%;
}
.vfl-label {
  position: absolute;
  top: 0;
  left: 0.1em;
  overflow: hidden;
  font-size: 0.8em;
  color: #aaa;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-out;
}
.vfl-label-on-input {
  top: -1.3em;
  pointer-events: all;
  opacity: 1;
}
.vfl-label-on-focus {
  color: #0074d9;
}
.vfl-has-label input:focus,
.vfl-has-label textarea:focus,
.vfl-has-label select:focus {
  border-color: transparent;
  outline: 0;

  + .input-highlight {
    max-width: 1000px;
  }
}
.input-highlight {
  background-color: $color-primary;
  height: 2px;
  display: block;
  width: 100%;
  max-width: 0;
  margin-top: -15px;
  margin-bottom: 15px;
  transition: .3s;
  margin-left: auto;
  margin-right: auto;
}
</style>