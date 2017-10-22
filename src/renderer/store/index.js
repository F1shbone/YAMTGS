import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
// Modules
import cards from './modules/cards'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [
    CreatePersistedState()
  ],
  actions,
  getters,
  modules: {
    cards
  },
  strict: debug
})
