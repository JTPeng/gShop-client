/*
通过mutations.间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings,
  reqAddressSearchList
} from '../api'
export default {
//  异步获取地址
  async getAddress({commit,state}){//{commit}是固定的形式,第二个为传递的参数
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address}) //adderss要和mutation.js文件的一样,{}括号是固定这样写的
    }
  },
//  异步获取食品列表
  async getCategorys({commit}){
    //发送ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if (result.code === 0 ){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
//  异步获取商家列表
  async getShops({commit,state}){
    //发送ajax请求
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    //提交一个mutation
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步记录用户的登录信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if (result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },
  //异步登出请求
  async logout({commit}){
    const result = await reqLogout()
    if (result.code === 0){
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if (result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新了,去通知组件
      callback && callback()
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit},callback){
    const result = await reqShopRatings()
    if (result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      //数据更新了,去通知组件
      callback && callback()
    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if (result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },

  // 同步更新food中的count值
  updateFoodCount({commit},{isAdd,food}){
    if (isAdd){
      commit(INCREASE_FOOD_COUNT,{food})
    } else {
      commit(DECREASE_FOOD_COUNT,{food})
    }
  },
  //同步清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  },

  // 异步获取都说商家列表
  async searchShops({commit,state},keyWord){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddressSearchList(geohash,keyWord)
    if (result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  },
}
