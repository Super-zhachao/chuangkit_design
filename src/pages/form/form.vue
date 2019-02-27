<template>
  <div class="page_form">
    <div class="head_process">
      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="./img/form_sele_ser.png" alt="选择服务">
        <div class="head_proces_item1_text">选择服务</div>
      </div>

      <!-- 箭头= 线段+箭头图片+线段 -->
      <div class="process_arrow_1">
        <div class="process_arrow_1_line"></div>
        <img class="process_arrow_1_arrow" src="./img/right_arrow.png" alt>
      </div>

      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="./img/form_write_need.png" alt="填写需求">
        <div class="head_proces_item1_text">填写需求</div>
      </div>

      <!-- 箭头= 线段+箭头图片+线段 -->
      <div class="process_arrow_2">
        <div class="process_arrow_2_line"></div>
        <img class="process_arrow_2_arrow" src="./img/right_arrow.png" alt>
      </div>

      <div class="head_proces_item1">
        <img class="head_proces_item1_img" src="./img/form_pay.png" alt="确认并支付">
        <div class="head_proces_item1_text" style="width: 80px; ">确认并支付</div>
      </div>
    </div>
    <!-- 表单标题 -->
    <div class="form_title">
      <div class="form_title_1">需求表单</div>
      <div class="form_title_2">完成问卷大概需要10分钟，之后会有专业设计师客服与您确认信息并为您提供基于需求的设计策略建议，感谢您的宝贵时间！</div>
    </div>
    <!-- 表单详情 -->
    <div class="form_detail">
      <form class action="../" method="post">
        <!-- 联系方式 -->
        <div class="input_name">联系方式：</div>
        <div class="input_area">
          <div class="input_area_xing">*</div>
          <input class="input_box" type="text" name=" " placeholder="     姓名">
          <div class="err_warning" style="display:inline-flex;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <div class="input_area">
          <div class="input_area_xing">*</div>
          <input class="input_box" type="text" name=" " placeholder="     留下手机号方便小创联系您">
          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <!-- 项目名称： -->
        <div class="input_name">项目名称：</div>
        <div class="input_area">
          <div class="input_area_xing">*</div>
          <input class="input_box" type="text" name=" " placeholder="     为您的项目起一个名字吧">
          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <!-- 行业： -->
        <div class="input_name">行业：</div>
        <div class="input_area">
          <div class="input_area_xing">*</div>
          <!-- <input class="input_box" type="text" name=" " placeholder="     电商/销售"> -->
          <select class="input_box" name="hang_ye">
            <option class="input_box_text" value="volvo">电商/销售</option>
            <option class="input_box_text" value="saab">日化/日用</option>
            <option class="input_box_text" value="fiat">电子/家电产品</option>
            <option class="input_box_text" value="fiat">卫生/卫浴设备</option>
            <option class="input_box_text" value="fiat">餐饮/酒店/住宿</option>
            <option class="input_box_text" value="fiat">食品/饮品</option>
          </select>

          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <!-- 行业标签： -->
        <div class="input_name">行业标签：</div>
        <div class="input_area">
          <div class="input_area_xing">*</div>
          <input class="input_box" type="text" name=" " placeholder="     请填写您的行业标签，多个标签用空格隔开">
          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <!-- 公司介绍 -->
        <div class="input_name">公司介绍：</div>
        <div class="input_area" style="height:80px;">
          <div class="input_area_xing"></div>
          <input
            class="input_box"
            type="text"
            name=" "
            style="height:80px;"
            placeholder="     尽可能多的介绍品牌、产品、业务、定位等公司信息"
          >
          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
        <!-- 需求描述 -->
        <div class="input_name">需求描述：</div>
        <div class="input_area" style="height:80px;">
          <div class="input_area_xing" style=" margin: 31px 0px 11px 0px;">*</div>
          <input
            class="input_box"
            type="text"
            name=" "
            style="height:80px;"
            placeholder="     设计整体风格、视觉色彩等其他要求"
          >
          <div class="err_warning" style="display:none;">
            <img class="err_warning_text_img" src=" " alt="出错">
            <div class="err_warning_text">请输入您的姓名！</div>
          </div>
        </div>
      </form>
    </div>
    <!-- 上传文件 -->
    <div class="upload_files">
      <div class="upload_files_title">
        <div class="upload_files_title_text">上传文件</div>
        <div
          class="upload_files_title_des"
        >提示！设计师仅负责美术设计，你需要提供以下资料：1、文案具体内容（文字需要可复制粘贴的文档）2、 需要使用的内容图片（如果涉及到版权，则需要单独购买）。</div>
      </div>
      <!-- 分割线 -->
      <hr class="upload_files_hr">
      <div class="upload_files_btn_area">
        <button class="upload_files_btn">
          <div class="upload_files_btn_text">+上传附件</div>
        </button>
        <div
          class="upload_files_btn_des"
        >附件可上传大小不超过10M的 jpg,jpeg,png,txt,zip.xls,rar,xlsx,docx,doc,docm,pdf；上传可参考的图片（包括你的LOGO、竞品包装）或资料文档</div>
      </div>
      <!-- 已选择的文件 -->
      <div class="upload_files_seleted_file_area">
        <div class="upload_files_seleted_file_item">
          <div class="upload_files_seleted_file">
            <img class="upload_files_seleted_file_img" src="./img/yasuo.png" alt="压缩包">
            <div class="upload_files_seleted_file_name">需求xxx.rar</div>
          </div>
          <img class="upload_files_seleted_file_close_img" src="./img/close.png" alt="关闭">
        </div>
         <div class="upload_files_seleted_file_item">
          <div class="upload_files_seleted_file">
            <img class="upload_files_seleted_file_img" src="./img/yasuo.png" alt="压缩包">
            <div class="upload_files_seleted_file_name">需求xxx.rar</div>
          </div>
          <img class="upload_files_seleted_file_close_img" src="./img/close.png" alt="关闭">
        </div>
         <div class="upload_files_seleted_file_item">
          <div class="upload_files_seleted_file">
            <img class="upload_files_seleted_file_img" src="./img/yasuo.png" alt="压缩包">
            <div class="upload_files_seleted_file_name">需求xxx.rar</div>
          </div>
          <img class="upload_files_seleted_file_close_img" src="./img/close.png" alt="关闭">
        </div>
   
      </div>
      
    </div>

    <div class="step_btn_area">
      <div class="step_btn_pre">上一步
        <!-- <div class="step_btn_pre_text">上一步</div> -->
      </div>

      <div class="step_btn_next">下一步
        <!-- <div class="step_btn_next_text">下一步</div> -->
      </div>

      <div class="step_btn_selected">当前选择：广告运营 — 海报设计</div>
    </div>

    <div class="bottom">Copyright©chuangkit@2015-2016 京ICP备 14056892号-1</div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "index page",
      isDisplay1: "inline-flex"
    };
  }
};
</script>

<style lang="less" scoped>
@import "form";
</style>
