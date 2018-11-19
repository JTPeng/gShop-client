<template>
  <div id="app">
    <!--router-view 用于显示路由标签-->
    <router-view/>
    <!--使用组件-->
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
 //声明组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'


  export default {
    /*async*/ mounted(){
      this.getAddress()
     /* this.$store.dispatch('getCategorys')*/ //测试获取食品列表----返送请求的方式
      /*this.$store.dispatch('getAddress')*///测试获取地址----返送请求的方式
      /*const result = await reqFoodCategorys()
      console.log(result)*/
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo'])
    },
 //将组件映射成标签
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
