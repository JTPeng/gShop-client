/*
通过mutations.间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
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
  }
}