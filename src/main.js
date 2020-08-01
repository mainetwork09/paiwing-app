import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuetify from 'vuetify/lib'
import Vuex from 'vuex'
import store from './store/_store'
import "./scss/variables.scss"


Vue.prototype.$liff = window.liff
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)
//Vue.use(VueAxios)


const vuetify = new Vuetify({
  customVariables: ['~/src/scss/variables.scss'],
  defaultAssets: false,
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
