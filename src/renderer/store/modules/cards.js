import Vue from 'vue'
import * as _ from 'lodash'

import Set from '../db/model/set'

// initial state
const state = {
  sets: null
}

// getters
const getters = {
  sets: state => state.sets
}

// actions
const actions = {
  getSets ({ commit }) {
    commit('setSets', {
      sets: Vue.db.Set.get()
    })
  },
  updateSets ({ commit, state }) {
    Vue.http
      .get('https://mtgjson.com/json/AllSets.json')
      .then((response) => {
        var existingSets = Vue.db.Set.get([ 'code' ])
        _.forEach(response.data, (val, key) => {
          if (existingSets.indexOf(key) === -1) {
            let set = new Set(val)
            Vue.db.Set.add(set)
            commit('addSet', {
              set: set
            })
          }
        })

        Vue.db.Save()
      })
      .catch((err) => {
        console.error(err)
      })
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
