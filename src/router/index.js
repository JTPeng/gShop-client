/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //配置所有路由
  routes:[  //多个路由用routes,数组的每一个元素就代表一个路由的配置
    //路由是对象.
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true,
      },
    },
    {
      path:'/order',
      component:Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true,
      },
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true,
      },
    },
    {
      path:'/login',
      component:Login
    },
    //默认显示msite页面
    {
      path:'/',
      redirect:'/msite'
    }

  ]
})
