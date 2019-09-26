import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Make sure to call Vue.use(Vuex) first if using a module system

export const store = new Vuex.Store({
    state: {
      result: 0
    },
    // filter state để như mong muốn
    // ví dụ : lọc sv học giỏi , ...
    getters: {
      getResult: state => {
        return state.result * 10;
      },
      getNameResult: state => {
        return state.result + ' name product'
      }
    },
    mutations: {
      incrementMutation(state,){
        state.result++;
      },
      decrementMutation(state){
        state.result--;
      }
    },
    actions: {
      // Function ES6 --- sync
      // mutation running gian tiep thong qua actions
      incrementActions : ({commit}) => {
        commit('incrementMutation')
      },
      // xu ly async
      asyncDecrement: ({commit}) => {
        setTimeout(()=>{
          commit('decrementMutation')
        }, 2000)
      }
    }
  })