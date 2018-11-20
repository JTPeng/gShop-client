/*
 入口js文件
 */
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui' //引入mint-ui的Button组件
//映射路由器
import router from './router'
import store from './store'

/*import store from './store'*/
//注册成全局组件标签
Vue.component(Button.name,Button) //(mt-Button)
new Vue({
  el:'#app',
  render: h => h(App),
  router,//使用上vue-router
  store
  /*store //使用上vuex*/
})
