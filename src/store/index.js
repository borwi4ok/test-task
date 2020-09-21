import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: [
      'О хакатоне',
      'Формат',
      'Задания',
      'Таймлайн',
      'Жюри',
      'Программа',
      'Место',
      'Партнёры',
      'Контакты',
    ],
  },
  getters: {
    nav: (state) => state.nav,
  },
  mutations: {},
  actions: {},
  modules: {},
})
