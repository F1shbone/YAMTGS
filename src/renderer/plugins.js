import Vue from 'vue'
import axios from 'axios'
import model from './model'

Vue.http = Vue.prototype.$http = axios
Vue.db = Vue.prototype.$db = model
