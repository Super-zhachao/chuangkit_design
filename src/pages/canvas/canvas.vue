<template>
  <div class="demo-page">
    <div class="head_title">遮罩层</div>
    <div class="container">
      <div class="big_pic">
        <img class="big_pic_img" src="./img/home_big.png" alt="美图">
        <div class="big_pic_author">Eagle State · 羽国 — 插画设计</div>
      </div>
      <div class="big_pic_close">
        <img src="./img/close.png" alt="关闭">
      </div>
    </div>
    <!-- <canvas id="myCanvas" width="200" height="200" style="border:1px solid #d3d3d3;">您的浏览器不支持canvas</canvas>-->
    <button @click="aaaa">点击画图</button>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "index page"
    };
  },
  aaaa: function() {
    console.log("哈哈哈哈哈哈哈哈");
  },
  doCanvas: function() {
    console.log("哈哈哈哈哈哈哈哈");
    let content_html = document.getElementById("myCanvas"); //要转化的div
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(12.5, 8);
    ctx.lineTo(0, 16);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(-7.3, 8, 10.8, 0, Math.PI * 4, false);
    ctx.stroke();
    ctx.closePath();
  }
};
</script>

<style lang="less" scoped>
@import "canvas";
</style>
