<template>
  <div class="content">
    <div class="title">
      选择服务商品
    </div>
    <div class="nav">
      <div class="main-nav">
        <div class="nav-item" v-for="(item,index) in nav" :class="main_select===index?'nav-active':''"
             @click="navSelect(index)">{{item.name}}
        </div>
      </div>
      <div class="min-nav">
        <div class="item" v-for="(item,index) in nav[main_select]['child']"
             :class="min_select===index?'item-active':''" @click="itemSelect(index)">{{item.name}}
        </div>
      </div>
    </div>
    <div class="taocan-wall">
      <div class="taocan-item">
        <div class="top-item">
          <div class="icon icon1"></div>
          <div class="title">优质服务</div>
          <div class="price colo1">单价：<span class="nowp">¥ 1200.00/P </span>&nbsp;&nbsp;&nbsp;&nbsp; 市场价：<span
              class="nowp">¥ <span
              class="oldp">1600.00</span>/P</span>
          </div>
          <div class="line colo1">
            <div class="left1"></div>
            <div class="cont">优质服务尊享权益</div>
            <div class="right1"></div>
          </div>
          <div class="detail">

          </div>
          <div class="num_wall">
            <div class="btn">-</div>
            <div class="num">1</div>
            <div class="btn">+</div>
          </div>
          <div class="money">
            应付金额：<span class="red">¥ 400.00</span>
          </div>
        </div>
        <div class="bottom-item">
          <div class="btn btn1">开始设计</div>
        </div>
      </div>
      <div class="taocan-item">
        <div class="top-item">
          <div class="icon icon2"></div>
          <div class="title">尊享服务</div>
          <div class="price colo2">单价：<span class="nowp">¥ 1200.00/P </span>&nbsp;&nbsp;&nbsp;&nbsp; 市场价：<span
              class="nowp">¥ <span
              class="oldp">1600.00</span>/P</span>
          </div>
          <div class="line colo2">
            <div class="left2"></div>
            <div class="cont">优质服务尊享权益</div>
            <div class="right2"></div>
          </div>
          <div class="detail">

          </div>
          <div class="num_wall">
            <div class="btn">-</div>
            <div class="num">1</div>
            <div class="btn">+</div>
          </div>
          <div class="money">
            应付金额：<span class="red">¥ 400.00</span>
          </div>
        </div>
        <div class="bottom-item">
          <div class="btn btn2">开始设计</div>
        </div>
      </div>
      <div class="taocan-item">
        <div class="top-item">
          <div class="icon icon3"></div>
          <div class="title">钻石服务</div>
          <div class="price colo3">单价：<span class="nowp">¥ 1200.00/P </span> &nbsp;&nbsp;&nbsp;&nbsp;市场价：<span
              class="nowp">¥ <span
              class="oldp">1600.00</span>/P</span>
          </div>
          <div class="line colo3">
            <div class="left3"></div>
            <div class="cont">优质服务尊享权益</div>
            <div class="right3"></div>
          </div>
          <div class="detail">

          </div>
          <div class="num_wall">
            <div class="btn">-</div>
            <div class="num">1</div>
            <div class="btn">+</div>
          </div>
          <div class="money">
            应付金额：<span class="red">¥ 400.00</span>
          </div>
        </div>
        <div class="bottom-item">
          <div class="btn btn3">开始设计</div>
        </div>
      </div>
    </div>
    <div class="title" style="margin: 69px 0 32px 0">
      服务案例
    </div>
    <div class="banner-wall">
      <img src="./img/banner.png" class="image"/>
      <div class="star">&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;</div>
      <div class="pingjia">
        <p class="text">客户：130****6576</p>
        <p class="text">评价：设计师很细心 提供的方案很多 每个都很有创意 经过长时间的内部讨论后才拿出了最终结果的方案很多都很有创意过长时间的内部经过长时间的时内部最终结果的方案很多很多……</p>
      </div>
      <div class="next"><img src="./img/chuangkit_design_arrow.png" class="arrow"/></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        main_select: 0,
        min_select: 0,
        nav: [
          {
            name: '广告运营',
            child: [
              {
                name: '海报设计',
                type: 0
              },
              {
                name: '运营配图',
                type: 0
              },
              {
                name: '宣传单设计',
                type: 0
              },
              {
                name: '易拉宝/展架',
                type: 0
              },
              {
                name: '折页设计',
                type: 0
              }, {
                name: '宣传册设计',
                type: 0
              }, {
                name: '代金券',
                type: 0
              },
            ]
          },
          {
            name: '办公包装',
            child: []
          },
          {
            name: '礼品设计',
            child: []
          },
          {
            name: '品牌设计',
            child: []
          }
        ]
      }
    },
    methods: {
      navSelect: function (index) {
        this.main_select = index
      },
      itemSelect: function (index) {
        this.min_select = index
      },
    }
  }
</script>


<style lang="less" scoped>
  @import "index";
</style>
