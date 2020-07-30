import Vue from 'vue'
import App from './App.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Summary from './components/Summary.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Step1 },
  { path: '/step2', component: Step2 },
  { path: '/step3', component: Step3 },
  { path: '/summary', component: Summary },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
