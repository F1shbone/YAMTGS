import Vue from 'vue'
import * as _ from 'lodash'

import Set from '../db/model/set'

const SETBLACKLIST = [ 'UNH', 'UGL' ]

// initial state
const state = {
  sets: []
}

// getters
const getters = {
  sets: state => state.sets
}

// actions
const actions = {
  async getSets ({ commit }) {
    let sets = await Vue.db.Set.get()
    commit('setSets', { sets: sets })
  },
  async updateSets ({ commit, state }) {
    let response = await Vue.http.get('https://mtgjson.com/json/AllSets.json')
    let existingSets = await Vue.db.Set.get()
    let borders = await Vue.db.Set.Border.get()
    let types = await Vue.db.Set.Type.get()

    existingSets = existingSets.map(item => { return item.code })
    existingSets = _.concat(existingSets, SETBLACKLIST)

    _.forEach(response.data, async (val, key) => {
      if (existingSets.indexOf(key) === -1) {
        val.border = _.find(borders, { name: val.border })
        val.type = _.find(types, { name: val.type })

        let set = new Set(val)
        await Vue.db.Set.add(set)
        commit('addSet', { set: set })
      }
    })

    Vue.db.Save()
  }
}

// mutations
const mutations = {
  addSet (state, payload) { state.sets.push(payload.set) },
  setSets (state, payload) { state.sets = payload.sets }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
