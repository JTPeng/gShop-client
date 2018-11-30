/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS,
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state,{address}){ //包含数据的对象
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state){
    state.userInfo = { }
  },

  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods
  },

  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },

  [RECEIVE_INFO] (state,{info}){
    state.info = info
  },

  [INCREASE_FOOD_COUNT] (state,{food}){
    if (!food.count){
      Vue.set(food,'count',1)
      //将food加入到购物车cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREASE_FOOD_COUNT] (state,{food}){
    if (food.count){ //只有有值才去减
      food.count--
      //购物车cartFoods中的food为0时要移除它
      if (food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food,1))
      }
    }
  },

  [CLEAR_CART](state){
    //先将food中的count置为0
    state.cartFoods.forEach(food => food.count = 0)
    //将购物车置空
    state.cartFoods = []
  },

  [RECEIVE_SEARCH_SHOPS] (state,{searchShops}){
    state.searchShops = searchShops
  },
}
