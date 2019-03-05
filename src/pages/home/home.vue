<template>
  <div class="page_home">
    <h1>定制设计服务推广</h1>

    <div class="head">
      <div class="head_title">创客贴-满足你的简单设计</div>
      <div class="head_btn">
        <div class="head_btn_text">选择设计</div>
      </div>
    </div>

    <!-- <div class="server">
      <div class="item_title">创客贴-定制设计服务</div>
      <div class="server_items">
        <div class="server_item" v-for="serverItem in server" :key="serverItem.key">
          <img class="server_item_img" :src="imgUrl" alt="标题 img">
          <div class="server_item_title">{{ serverItem.title }}</div>
          <div class="server_item_describe">{{serverItem.describe}}</div>
        </div>
      </div>
    </div>-->
    <!-- 定制设计服务 -->
    <div class="server">
      <div class="item_title">创客贴-定制设计服务</div>
      <div class="server_items">
        <div class="server_item">
          <img
            class="server_item_img"
            src="./img/server/server_pure_quality.png"
            alt="标题 img"
            style=" width: 65px;"
          >
          <div class="server_item_title">纯享品质</div>
          <div class="server_item_describe">1000+5年以上资深设计师为您提供优质纯享品质设计</div>
        </div>

        <div class="server_item">
          <img
            class="server_item_img"
            src="./img/server/server_design.png"
            alt="标题 img"
            style=" width: 48px;"
          >
          <div class="server_item_title">高效设计</div>
          <div class="server_item_describe">创客贴3000+签约设计师为您提供高效的设计服务</div>
        </div>
        <div style="width:1px;height: 139px; "></div>
        <div class="server_item">
          <img
            class="server_item_img"
            src="./img/server/process_process.png"
            alt="标题 img"
            style=" width: 58px;"
          >
          <div class="server_item_title">简洁流程</div>
          <div class="server_item_describe">只要告诉小创您的设计需求，小创为你解决，安心等</div>
        </div>

        <div class="server_item">
          <img
            class="server_item_img"
            src="./img/server/server_design_bao.png"
            alt="标题 img"
            style=" width: 59px;"
          >
          <div class="server_item_title">设计保障</div>
          <div class="server_item_describe">创客贴提供100%设计保障，坚决杜绝：设计延期问</div>
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div class="server_process">
      <div class="item_title">服务流程</div>
      <div class="process_items">
        <div class="process_item">
          <img class="process_img" src="./img/process/process_selecte_server.png" alt="选择服务">
          <div class="process_title">选择服务</div>
        </div>
        <!-- 箭头= 线段+箭头图片+线段 -->
        <div class="process_arrow">
          <div class="process_arrow_line"></div>
          <img class="process_arrow_arrow" src="./img/process/right_arrow.png" alt>
        </div>

        <div class="process_item">
          <img class="process_img" src="./img/process/process_demand.png" alt="填写需求支付">
          <div class="process_title">填写需求支付</div>
        </div>

        <div class="process_arrow">
          <div class="process_arrow_line"></div>
          <img class="process_arrow_arrow" src="./img/process/right_arrow.png" alt>
        </div>

        <div class="process_item">
          <img class="process_img" src="./img/process/process_communicate.png" alt="小创沟通需求">
          <div class="process_title">小创沟通需求</div>
        </div>

        <div class="process_arrow">
          <div class="process_arrow_line"></div>
          <img class="process_arrow_arrow" src="./img/process/right_arrow.png" alt>
        </div>

        <div class="process_item">
          <img class="process_img" src="./img/process/process_first_design.png" alt="设计初稿">
          <div class="process_title">设计初稿</div>
        </div>
        <div class="process_arrow">
          <div class="process_arrow_line"></div>
          <img class="process_arrow_arrow" src="./img/process/right_arrow.png" alt>
        </div>

        <div class="process_item">
          <img class="process_img" src="./img/process/process_custom_made.png" alt="客户定稿">
          <div class="process_title">客户定稿</div>
        </div>
      </div>

      <div class="selecte_design">
        <div class="selecte_design_btn">选择设计</div>
      </div>
    </div>
    <!-- 王牌设计师 -->
    <div class="designers">
      <div class="item_title">王牌设计师</div>

      <div class="designers_items">
        <div class="designers_item">
          <img class="designers_item_img" src="./img/designer/designer_2.png" alt="设计师1">
          <div class="designers_item_hover">
            <div class="designers_item_hover_designer_des">
              设计风格多样，为科技、企业集团、互联网、餐饮、医疗、连锁品牌等行业提供品牌创建与品牌升级服务，
              合作过的客有海得新能源、中国银行、999药业、成都多彩天府、路和管理，为设计团队带来了...
            </div>
            <img class="designers_item_hover_designer_head_img" src="./img/designer/designer_1.png">
          </div>

          <div class="designers_item_des">
            <div class="designers_item_des_name">Aimee</div>
            <div class="designers_item_des_level">初级设计师</div>
          </div>
        </div>

        <div class="designers_item">
          <img class="designers_item_img" src="./img/designer/designer_2.png" alt="设计师1">
          <div class="designers_item_hover">
            <div class="designers_item_hover_designer_des">
              设计风格多样，为科技、企业集团、互联网、餐饮、医疗、连锁品牌等行业提供品牌创建与品牌升级服务，
              合作过的客有海得新能源、中国银行、999药业、成都多彩天府、路和管理，为设计团队带来了...
            </div>
            <img class="designers_item_hover_designer_head_img" src="./img/designer/designer_1.png">
          </div>

          <div class="designers_item_des">
            <div class="designers_item_des_name">Aimee</div>
            <div class="designers_item_des_level">初级设计师</div>
          </div>
        </div>

        <div class="designers_item">
          <img class="designers_item_img" src="./img/designer/designer_3.png" alt="设计师1">
          <div class="designers_item_hover">
            <div class="designers_item_hover_designer_des">
              设计风格多样，为科技、企业集团、互联网、餐饮、医疗、连锁品牌等行业提供品牌创建与品牌升级服务，
              合作过的客有海得新能源、中国银行、999药业、成都多彩天府、路和管理，为设计团队带来了...
            </div>
            <img class="designers_item_hover_designer_head_img" src="./img/designer/designer_1.png">
          </div>

          <div class="designers_item_des">
            <div class="designers_item_des_name">Aimee</div>
            <div class="designers_item_des_level">初级设计师</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 优秀案例 -->
    <div class="excellent_case">
      <div class="item_title">优秀案例</div>
      <!-- style="background:url(../img/excelent_case/excelent_case_1.png);"
      style=" background: url(./img/headImg.png);"
       style="background: url('excelent_case_3.png?f2dd823676963e73d96dd4bb78c73405');"
      -->
      <div class="excellent_case_items">
        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_1.png?77331229908b8cd4354da52bc0abee38');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>

          <!-- <img
            class="excellent_case_item_img"
            src="./img/excelent_case/excelent_case_1.png"
            alt="帆布包设计"
            style="  height: 331px;  width: 433px;"
          >
          <div class="excellent_case_item_hover">
            <div class="excellent_case_item_hover_text1">New Badoo identity</div>
            <div class="excellent_case_item_hover_text2">帆布包设计</div>
          </div>-->
        </div>

        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_2.png?69cd991a77ae8b8ca4763ca32dce9c80');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>
        </div>
        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_3.png?f2dd823676963e73d96dd4bb78c73405');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>
        </div>
        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_4.png?50f2568eafc6639890e0462769c82d80 ');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>
        </div>
        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_5.png?5121aa3713fcbf5abddaa05099b4bd76');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>
        </div>

        <div class="excellent_case_item">
          <div
            class="excellent_case_item_img"
            style="background: url('http://localhost:8010/excelent_case_6.png?46d01120b11f652a544009bc026175e8');"
          >
            <div class="excellent_case_item_hover">
              <div class="excellent_case_item_hover_text1">New Badoo identity</div>
              <div class="excellent_case_item_hover_text2">帆布包设计</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom_area">
      <div class="bottom_area_tel">400-871-8211</div>
      <div class="bottom_area_btns">
        <div class="bottom_area_btn1">
          <div class="bottom_area_btn1_text">在线客服</div>
        </div>
        <div class="bottom_area_btn2">
          <div class="bottom_area_btn2_text">立即选择设计</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {
      msg: "home page",
      imgUrl: "../home/img/server/server_pure_quality.png",
      server: [
        {
          key: 1,
          img: "./img/server/server_pure_quality.png",
          title: "纯享品质",
          describe: "1000+5年以上资深设计师为您提供优质纯享品质设计"
        },
        {
          key: 2,
          img: "./img/server/server_design.png",
          title: "高效设计",
          describe: "创客贴3000+签约设计师为您提供高效的设计服务"
        },
        {
          key: 3,
          img: "./img/server/process_process.png",
          title: "简洁流程",
          describe: "只要告诉小创您的设计需求，小创为你解决，安心等"
        },
        {
          key: 4,
          img: "./img/server/server_design_bao.png",
          title: "设计保障",
          describe: "创客贴提供100%设计保障，坚决杜绝：设计延期问"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "home";
</style>
