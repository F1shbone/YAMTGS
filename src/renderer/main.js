/* globals __static */

import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

import path from 'path'
import { remote } from 'electron'
import model from './model'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.db = Vue.prototype.$db = model

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.db.Open({
  filePath: path.join(remote.app.getPath('userData'), 'data.db'),
  schemaPath: __static
}).then(() => {
  new Vue({
    components: { App },
    router,
    store: require('./store').default,
    template: '<App/>'
  }).$mount('#app')
})
