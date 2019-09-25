import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Make sure to call Vue.use(Vuex) first if using a module system

export const store = new Vuex.Store({
    state: {
      result: 0
    },
  })