<template>
  <div class="keybind">
    <div class="keybind-label">{{label}}:</div>
    <div class="keybind-container" @click="test">
      <div class="keybind-input">
        <input type="text" :value="value" disabled />
        <div class="input-highlight"></div>
      </div>

      <div class="keybind-button-container">
        <button class="btn">
          <span class="keybind-text">Edit Keybind</span>
          <span class="keybind-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#4F545C"
                  fill-rule="nonzero"
                  d="M20,5 L4,5 C2.9,5 2.01,5.9 2.01,7 L2,17 C2,18.1 2.9,19 4,19 L20,19 C21.1,19 22,18.1 22,17 L22,7 C22,5.9 21.1,5 20,5 Z M11,8 L13,8 L13,10 L11,10 L11,8 Z M11,11 L13,11 L13,13 L11,13 L11,11 Z M8,8 L10,8 L10,10 L8,10 L8,8 Z M8,11 L10,11 L10,13 L8,13 L8,11 Z M7,13 L5,13 L5,11 L7,11 L7,13 Z M7,10 L5,10 L5,8 L7,8 L7,10 Z M16,17 L8,17 L8,15 L16,15 L16,17 Z M16,13 L14,13 L14,11 L16,11 L16,13 Z M16,10 L14,10 L14,8 L16,8 L16,10 Z M19,13 L17,13 L17,11 L19,11 L19,13 Z M19,10 L17,10 L17,8 L19,8 L19,10 Z"
                />
                <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"/>
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'keybind',
  props: {
    label: {
      default: ''
    },
    value: {
      defalt: ''
    }
  },
  methods: {
    test () {
      console.log('Change!')
      this.$emit('input', 'ctrl + esc') //this.keybind)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/variables';

  .keybind {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 15px;

    .keybind-label {
      display: flex;
      flex: 1 1 33%;
      line-height: 40px;
    }

    .keybind-container {
      position: relative;
      display: flex;
      flex: 0 1 66%;
      border: 0 none;
      border-bottom: 1px solid $border-color;
      transition: border-color .3s ease-in-out;
      cursor: pointer;
    }

    // Input
    .keybind-input {
      width: 100%;

      input {
        // overwrite default input
        margin-bottom: 0;
        border: 0 none;
        opacity: 1;
        cursor: pointer;
        // default
        color: $body-color;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
        font-weight: 700;
        padding: .6rem 5.6rem .6rem 0rem;
        text-overflow: ellipsis;
        text-transform: uppercase;
        overflow: hidden;
        user-select: none;
        white-space: nowrap;

        &:focus,
        &:active { border: 0 none; }
      }

      .input-highlight {
        background-color: $color-primary;
        height: 2px;
        display: block;
        width: 100%;
        max-width: 0;
        transition: .3s;
        margin-left: auto;
        margin-right: auto;
      }
    }

    // Button
    .keybind-button-container {
      position: absolute;
      top: 0; right: 0;
      width: 140px;
      max-width: 56px;
      text-overflow: ellipsis;
      overflow: hidden;
      user-select: none;
      white-space: nowrap;
      transition: max-width .2s ease-in-out;

      button {
        width: 100%;
        min-width: initial;
        height: 38px;
        margin: 0;
        padding: 0 1rem;
        &:hover { background-color: transparent; }
      }

      .keybind-text,
      .keybind-icon {
        position: absolute;
        top: 0;
        display: block;
        overflow: hidden;
        transition: opacity .2s ease-in-out,transform .2s ease-in-out;;
      }

      .keybind-text {
        line-height: 38px;
        opacity: 0;
        transform: translate3d(200%, 0, 0);
      }
      .keybind-icon {
        left: 16px;
        top: 7px;
        width: 24px;
        height: 24px;
        opacity: 1;
        transform: translateZ(0);
      }
    }

    // Active State
    .keybind-container:hover {
      border-color: $color-primary;

      .keybind-input {
        input { padding: .6rem 14.0rem .6rem 0rem; }
        .input-highlight { max-width: 1000px; }
      }

      .keybind-button-container {
        max-width: 140px;

        .keybind-text {
          opacity: 1;
          transform: translateZ(0);
        }
        .keybind-icon {
          opacity: 0;
          transform: translate3d(200%, 0, 0);
        }
      }
    }
  }
</style>

