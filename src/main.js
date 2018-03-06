// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Vue2Filters from 'vue2-filters'
import Notifications from 'vue-notification'
import App from './App'
import router from './router'
import store from './store/store'
import * as CONFIG from './config'

Vue.config.productionTip = false

Vue.prototype.$http = require('axios').create({
  baseURL: CONFIG.baseApi,
  config: {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    crossDomain: true
  }
})

Vue.prototype.$http.interceptors.response.use(function (response) {
  if (response.data.status === 2) {
    Vue.prototype.$http.get('/refresh_token', {
      headers: {
        'rongdo-token': response.config.headers['rongdo-token'],
        'code-refresh': response.data.code_refresh,
        'api-key': 'praisethesun'
      }
    }).then(
      () => {
        console.log('refresh done')
        Vue.prototype.$http(response.config)
      }
    )
  }

  return response
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$setToken = function (token) {
  this.$http.defaults.headers.common['rongdo-token'] = token
}

Vue.prototype.$removeToken = function (token) {
  delete this.$http.defaults.headers.common['rongdo-token']
}

Vue.use(VeeValidate)
Vue.use(Vue2Filters)
Vue.use(Notifications)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
