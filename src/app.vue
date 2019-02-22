<template>
  <div id="app">
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
    background: #F7F9FB;
    min-height: 100%;
    width: 100%;
  }
</style>

