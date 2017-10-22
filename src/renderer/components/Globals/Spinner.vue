<template>
  <div class="spinner">
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 38 38">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="a">
          <stop style="stop-color: #a657cf;stop-opacity:1" offset="0%"/>
          <stop style="stop-color: #3593d1;stop-opacity:1" offset="100%"/>
        </linearGradient>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white"/>
          <circle r="17" cx="19" cy="19" fill="black"/>
        </mask>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <circle fill="rgba(255, 255, 255, .2)" cx="19" cy="19" r="19" mask="url(#hole)" />
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2" transform="rotate(126.815 18 18)">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="950ms" repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    </svg>
    <p>Loading</p>
  </div>
</template>

<script>

  export default {
    name: 'spinner',
    props: {
      width: {
        required: true,
      },
      height: {
        required: true,
        validator (val) {
          return /[0-9]+/.test(val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .spinner {
    height: 175px;
    width: 175px;
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 9999;
  }

  .spinner > p {
    position: absolute;
    top: 50%;
    width: 175px;
    margin: 0;
    color: rgba(255, 255, 255, .2);
    font-size: 20px;
    font-family: sans-serif;
    font-weight: thin;
    text-align: center;
    transform: translateY(-50%);
  }
</style>
