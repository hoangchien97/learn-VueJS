import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes/index' // export const routes

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return { x: 0, y: 0 }
  },
})

Vue.config.productionTip = false;

/* Router guards
  to : Route: target điều hướng
  from :  Route: tuyến hiện tại đang đc điều đi
  next: Function: Giải quyết hook
*/
router.beforeEach((to, from, next) => {
  // console.log('Global route guards !...');
  next();
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
