<template>
  <div class="page">
    <div class="container">
      <div class="tipsImg">
        <img src="./img/paySuccessful.png" alt="支付成功">
      </div>
      <div class="tipsTitle">支付成功</div>
      <div class="tipsText">恭喜你下单成功！订单编号:1738 9383 9383</div>

      <button class="detailBtn">查看订单详情</button>
      <button class="previousBtn">上一步</button>
    </div>
    <div class="bottom">Copyright©chuangkit@2015-2016 京ICP备 14056892号-1</div>
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
@import "pay_s";
</style>
