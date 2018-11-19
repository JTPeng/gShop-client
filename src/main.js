/*
 入口js文件
 */
import Vue from 'vue'
import App from './App.vue'
//映射路由器
import router from './router'
import store from './store'
/*import store from './store'*/

new Vue({
  el:'#app',
  render: h => h(App),
  router,//使用上vue-router
  store
  /*store //使用上vuex*/
})
