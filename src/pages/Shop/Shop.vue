<template>
<div>
  <ShopHeader/>
  <div id="tab">
    <div class="tab-item">
      <router-link to="/shop/goods">食品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop/ratings">评价</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop/info">信息</router-link>
    </div>
    <router-view/>
  </div>
</div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
  //注册成标签
  components:{
    ShopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
