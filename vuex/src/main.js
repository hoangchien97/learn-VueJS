import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// truy cap : store.state
// kich hoat thay doi : store.commit

store.commit('increment');
console.log(store.state.count);


new Vue({
  render: h => h(App),
}).$mount('#app')
