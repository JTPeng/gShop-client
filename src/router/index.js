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

//引入商家相关的理由组件
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
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
      path:'/search', // path 指路径
    component:Search,//指的是组件
      meta:{
        showFooter:true,
      },
    },
    {
      path:'/login',
      component:Login
    },
    //映射shop商店相关的组件
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        //代表进入商家页面时~默认为/shop/goods页面
        {
          path:'',
          redirect:'/shop/goods'
        },
      ]
    },
    //默认显示msite页面
    {
      path:'/',
      redirect:'/msite'
    }

  ]
})
