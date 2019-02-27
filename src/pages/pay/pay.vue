<template>
  <div class="page">
    <!-- 顶部流程提示 -->
    <div class="head_process">
      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="../form/img/form_sele_ser.png" alt="选择服务">
        <div class="head_proces_item1_text">选择服务</div>
      </div>

      <!-- 箭头= 线段+箭头图片+线段 -->
      <div class="process_arrow_1">
        <div class="process_arrow_1_line"></div>
        <img class="process_arrow_1_arrow" src="../form/img/right_arrow.png" alt>
      </div>

      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="../form/img/form_write_need.png" alt="填写需求">
        <div class="head_proces_item1_text">填写需求</div>
      </div>

      <!-- 箭头 -->
      <!-- 箭头= 线段+箭头图片+线段 -->
      <div class="process_arrow_2">
        <div class="process_arrow_2_line"></div>
        <img class="process_arrow_2_arrow" src="../form/img/right_arrow.png" alt>
      </div>

      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="../form/img/form_sure_pay.png" alt="确认并支付">
        <div class="head_proces_item1_text" style="width: 80px; ">确认并支付</div>
      </div>
    </div>
    <!-- 订单区域 -->
    <div class="order_area">
      <!-- 订单信息 -->
      <div class="order_info">
        <div class="order_info_title">订单确认</div>
        <div class="order_info_time">2017/03/12 20:23:56</div>
        <div class="order_info_id">订单号：1728 3872 8487</div>
      </div>
      <hr class="order_hr">
      <!-- 订单详情 -->
      <div class="order_detail">
        <img class="order_detail_img" src="./img/pay_order_img.png" alt="订单">
        <div class="order_detail_type">
          <div class="order_detail_type_big">广告运营</div>
          <div class="order_detail_type_small">海报设计</div>
        </div>
        <div class="order_detail_level">优质服务</div>
        <!-- 价格 -->
        <div class="order_detail_money">
          <div class="order_detail_price">
            <div class="order_detail_price_discount">￥ 890.00</div>
            <div class="order_detail_price_original">￥ 1200.00</div>
          </div>
          <div class="order_detail_number1">
            <div class="order_detail_number2">x 1</div>
          </div>
        </div>
      </div>
      <hr class="order_hr">
      <div class="order_total">
        <div class="order_total_title">合计</div>
        <div class="order_total_price">￥ 890.00</div>
      </div>
      <hr class="order_hr">
      <div class="pay_type">
        <div class="pay_type_title">选择支付方式</div>
      </div>

      <hr class="order_hr">
      <div class="pay_type_content">
        <div class="pay_type_content1">
          <div class="pay_type_content1_text">账户余额</div>
        </div>
        <div class="pay_type_content1">
          <!-- 支付宝 -->
          <img class="pay_type_content1_img" src="./img/pay_type/ali_pay.png" alt>
        </div>
        <div class="pay_type_content3">
          <!-- 微信 -->
          <img class="pay_type_content1_img" src="./img/pay_type/wechat_pay.png" alt>
        </div>
      </div>
    </div>
    <!-- 底部按钮区域 -->
    <div class="step_btn_area">
      <button class="step_btn_pre">上一步
        <!-- <div class="step_btn_pre_text">上一步</div> -->
      </button>

      <div class="step_btn_agree">
        <input type="checkbox" name="category" value="今日话题">同意创客贴服务协议
      </div>

      <div class="pay_money_text">应付金额</div>
      <div class="pay_money_value">¥899.00</div>

      <div class="step_btn_pay">支付
        <!-- <div class="step_btn_pay_text">支付</div> -->
      </div>
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
@import "pay";
</style>
