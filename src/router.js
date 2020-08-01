import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Race from './components/races/_id.vue'
import AllRaces from './components/races/AllRaces.vue'
import Register from './components/register/_id.vue'
import Register_SelectRaceType from './components/register/SelectRaceType.vue'
//import Register_SelectRaceGroup from './components/register/SelectRaceGroup.vue'
import Summary from './components/register/Summary.vue'
import Profile from './components/profile/Profile.vue'

const routes = [
  {
    path: '/', name: 'home', component: Home
  },
  {
    path: '/all-races', name: 'all-races', component: AllRaces
  },
  {
    path: '/race/:id', name: 'race', component: Race
  },
  {
    path: '/register', name: 'register', component: Register
  },
  {
    path: '/register/select-racetype', name: 'register-select-racetype', component: Register_SelectRaceType
  },
  { path: '/register/order-summary', component: Summary },
  { path: '/profile', component: Profile },
]

export default new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'history'
})