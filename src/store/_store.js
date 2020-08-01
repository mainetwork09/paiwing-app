import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: {
      order_id: '',
      race_id: '',
      firstname: '',
      lastname: '',
      phone: '',
      race_type: '',
      race_price: '',
      attendees: []
    },
    race_items: [
      {
        race_id: 1,
        title: "Running Day #1",
        date_schedule: new Date("2021-02-14").toDateString(),
        thumbnail: 'http://via.placeholder.com/90x90',
        cover: 'http://via.placeholder.com/400x320',
        race_types: [
          {
            race_type_name: "Funrun",
            race_type_detail: "5KM",
            race_price: 350,
          },
          {
            race_type_name: "Mini Marathon",
            race_type_detail: "10.5KM",
            race_price: 400,
          },
          {
            race_type_name: "Half Marathon",
            race_type_detail: "21KM",
            race_price: 500,
          }
        ],
        race_shirt_size_available: [
          { size_name: "XS", shirt_width: "34", shirt_height: "40" },
          { size_name: "S", shirt_width: "36", shirt_height: "40" },
          { size_name: "M", shirt_width: "38", shirt_height: "40" },
          { size_name: "L", shirt_width: "40", shirt_height: "40" },
          { size_name: "XL", shirt_width: "32", shirt_height: "40" },
          { size_name: "2XL", shirt_width: "44", shirt_height: "40" },
          { size_name: "3XL", shirt_width: "46", shirt_height: "40" },
          { size_name: "4XL", shirt_width: "50", shirt_height: "40" }
        ]
      },
      {
        race_id: 2,
        title: "Running Day #2",
        date_schedule: new Date("2021-03-14").toDateString(),
        thumbnail: 'http://via.placeholder.com/90x90',
        cover: 'http://via.placeholder.com/400x320',
      },
      {
        race_id: 3,
        title: "Running Day #3",
        date_schedule: new Date("2021-01-17").toDateString(),
        thumbnail: 'http://via.placeholder.com/90x90',
        cover: 'http://via.placeholder.com/400x320',
      },
    ]
  },
  mutations: {
    setOrderDetail(state, data) {
      state.order.order_id = data.order_id
      state.order.race_id = data.race_id
    },
    setOrderRaceType(state, data) {
      state.order.race_type = data
    }
  },
  actions: {
    setOrderDetail(context, data) {
      context.commit('setOrderDetail', data)
    },
    setOrderRaceType(context, data) {
      context.commit('setOrderRaceType', data)
    },
  }
})