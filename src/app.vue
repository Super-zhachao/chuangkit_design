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
    background: rgb(243, 244, 247);
    min-height: 100%;
    width: 100%;
  }
</style>

