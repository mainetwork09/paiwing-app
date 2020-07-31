import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import AllRaces from './components/races/AllRaces.vue'
import Step1 from './components/Step1.vue'
import Step2 from './components/Step2.vue'
import Step3 from './components/Step3.vue'
import Summary from './components/Summary.vue'
import Profile from './components/profile/Profile.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify/lib'
import "./scss/variables.scss"


Vue.prototype.$liff = window.liff
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)
//Vue.use(VueAxios)

const routes = [
  {
    path: '/', name: 'home', component: Home
  },
  {
    path: '/all-races', name: 'all-races', component: AllRaces
  },
  { path: '/step1', name: 'step1', component: Step1 },
  { path: '/step2', name: 'step2', component: Step2 },
  { path: '/step3', name: 'step3', component: Step3 },
  { path: '/summary', component: Summary },
  { path: '/profile', component: Profile },
]

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'history'
})

const vuetify = new Vuetify({
  customVariables: ['~/src/scss/variables.scss'],
  defaultAssets: false,
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
