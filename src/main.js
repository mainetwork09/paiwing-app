import Vue from 'vue'
import App from './App.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Summary from './components/Summary.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify/lib'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Step1 },
  { path: '/step2', name: 'step2', component: Step2 },
  { path: '/step3', name: 'step3', component: Step3 },
  { path: '/summary', component: Summary },
]

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'history'
})

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
