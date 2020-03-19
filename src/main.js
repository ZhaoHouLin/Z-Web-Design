import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import Setting from './components/Setting.vue'
import RGBtoHex from './components/RGBtoHex.vue'
import PreviousAndNext from './components/PreviousAndNext.vue'

import Background from './components/Background.vue'

Vue.component("Logo", Logo)
Vue.component("Menu", Menu)
Vue.component("Setting", Setting)
Vue.component("RGBtoHex", RGBtoHex)
Vue.component("PreviousAndNext", PreviousAndNext)
Vue.component("Background", Background)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: '',
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
