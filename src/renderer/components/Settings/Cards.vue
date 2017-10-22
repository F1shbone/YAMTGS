<template>
  <div class="card">
    <div class="card-header">
      <div class="title">Cards:</div>
      <div class="subhead">Last update: 18.10.2017</div>
    </div>
    <div class="card-content">
      <div class="form-group">
        <floating-label>
          <input type="text" value="https://mtgjson.com/json/" placeholder="Base Set URL" />
        </floating-label>
      </div>
      <div class="form-group">
        <floating-label>
          <input type="text" value="https://magiccards.info/scans/en/" placeholder="Base Image URL" />
        </floating-label>
      </div>

      <div style="
        opacity: .54;
        font-size: 14px;
        letter-spacing: .01em;
        line-height: 20px;
      ">Stats</div>
      <ul class="list-unstyled list-inline database-info">
        <li>
          Cards
          <span>0</span>
        </li>
        <li>
          Sets
          <span v-html="sets.length"></span>
        </li>
        <li>
          Decks
          <span>0</span>
        </li>
      </ul>
    </div>
    <div class="card-actions">
      <button type="button" class="btn btn-secondary" @click="updateSets">
        <i class="ion ion-social-buffer outline"></i> Cardbase-Update
      </button>
      <button type="button" class="btn">
        Save
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import floatingLabel from '../Globals/FloatingLabel'

  export default {
    name: 'settings-card',
    components: {
      floatingLabel
    },
    computed: {
      ...mapGetters({
        sets: 'cards/sets'
      })
    },
    methods: {
      ...mapActions({
          updateSets: 'cards/updateSets'
      })
    }
  }
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.database-info {
  li {
    padding: 2px 5px;
    font-weight: 200;
    text-align: center;
    > span {
      display: block;
    }
  }
  li + li { border-left: 1px solid $border-color; }
}

.btn-secondary {
  position: relative;
  .ion {
    position: relative;
    top: 3px;
    font-size: 22px;
  }
}
</style>
