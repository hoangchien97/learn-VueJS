import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Make sure to call Vue.use(Vuex) first if using a module system

export const store = new Vuex.Store({
    state: {
      result: 0
    },
    // filter state để như mong muốn
    // ví dụ : lọc sv học giỏi , ...s
    getters: {
      getResult: state => {
        return state.result * 10;
      }
    }
  })