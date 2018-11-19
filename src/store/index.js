/*
vuex核心管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/*声明使用(插件需要声明使用)*/
Vue.use(Vuex)

export default new Vuex.Store({
  //传配置对象
  state,
  mutations,
  actions,
  getters
})
