// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './services/firebase'
import VueResource from 'vue-resource'
import cheerio from 'cheerio'
import Axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuefire)
Vue.use(VueResource)
Vue.use(cheerio)
Vue.use(Axios)
Vue.use(Vuex)

Vue.config.productionTip = false

Vue.component('other', require('./components/Other.vue'))

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    chess: firebase.database.ref('chess').orderByChild('created_at')
  },
  router,
  store: new Vuex.Store(store),
  template: '<App/>',
  components: {App}
})
