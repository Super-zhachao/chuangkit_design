<template>
  <div id="app">
    <router-link to="/">启动页</router-link>
    <router-link to="/home">主页</router-link>
    <router-link to="/server_lu">商品服务列表</router-link>
    <router-link to="/form">表单</router-link>
    <router-link to="/pay">支付</router-link>
    <router-link to="/pay_su">支付成功</router-link>
    <router-link to="/order_cu">订单中心</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  @import "base/reset.css";

  html, body, #app {
    background: rgb(243, 244, 247);
    min-height: 100%;
    width: 100%;
  }
</style>

