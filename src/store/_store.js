import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    order: {
      order_id: '',
      firstname: '',
      lastname: '',
      phone: '',
      race_type: ''
    },
    race_items: [
      {
        race_id: 1,
        title: "Running Day #1",
        date_schedule: new Date("2021-02-14").toDateString(),
      },
      {
        race_id: 2,
        title: "Running Day #2",
        date_schedule: new Date("2021-03-14").toDateString(),
      },
      {
        race_id: 3,
        title: "Running Day #3",
        date_schedule: new Date("2021-01-17").toDateString(),
      },
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setOrderId(state, data) {
      state.order.order_id = data
    },
    setOrderDetail(state, data) {
      state.order.firstname = data.firstname
      state.order.lastname = data.lastname
      state.order.phone = data.phone
    },
    setOrderRaceType(state, data) {
      state.order.race_type = data
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    setOrderId(context, data) {
      context.commit('setOrderId', data)
    },
    setOrderDetail(context, data) {
      context.commit('setOrderDetail', data)
    },
    setOrderRaceType(context, data) {
      context.commit('setOrderRaceType', data)
    },
  }
})