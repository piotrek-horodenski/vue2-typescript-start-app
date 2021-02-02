import Vue from 'vue'

import App from '@/App.vue'
import config from '@/config'

config.forEach(cfg => cfg())

import { router } from '@/router'
import { store } from '@/store'

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
