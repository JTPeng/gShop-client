<template>
  <div id="app">
    <!--router-view 用于显示路由标签-->
    <router-view/>
    <!--使用组件-->
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  //声明组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{//将组件映射成标签
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
