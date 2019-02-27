<template>
  <div class="page">
    <div class="head_title">选择服务商品</div>
<!-- 顶部按钮区域 -->
    <div class="head_btn_area">
      <div class="head_btn_area_larges">
        <div class="head_btn_large">广告运营</div>
        <div class="head_btn_large">办公包装</div>
        <div class="head_btn_large">礼品设计</div>
        <div class="head_btn_large">品牌设计</div>
      </div>
      <div class="head_btn_area_smalls">
        <div class="head_btn_small">海报设计</div>
        <div class="head_btn_small">运营配图</div>
        <div class="head_btn_small">宣传单设计</div>
        <div class="head_btn_small">易拉宝/展架</div>
        <div class="head_btn_small">折页设计</div>
        <div class="head_btn_small">宣传册设计</div>
        <div class="head_btn_small">代金卷</div>
      </div>
    </div>



    <div class="server_area">
<div class="server_item"></div>
<div class="server_item"></div>
<div class="server_item"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "index page"
    };
  }
};
</script>

<style lang="less" scoped>
@import "server_l";
</style>
