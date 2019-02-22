<template>
  <div class="content">
    <nav class="nav">
      <span class="nav-p">我的定制项目 ></span><span class="nav-c">PPT 16:9</span>
    </nav>
    <div class="main">
      <div class="step">
        <ul>
          <li>
            <div class="active">
              <div class="left">
                <span class="icon"></span>
                <p>设计需求信息</p>
              </div>
              <div class="right" :class="step>=1?'solid':''">
                <div class="line"></div>
                <div class="arrow">►</div>
                <div class="line"></div>
              </div>
            </div>
          </li>
          <li>
            <div :class="step>=1?'active':'no-active'">
              <div class="left">
                <span class="icon"></span>
                <p>出品提案</p>
              </div>
              <div class="right" :class="step>=2?'solid':''">
                <div class="line"></div>
                <div class="arrow">►</div>
                <div class="line"></div>
              </div>
            </div>
          </li>
          <li>
            <div :class="step>=2?'active':'no-active'">
              <div class="left">
                <span class="icon"></span>
                <p>修改提案</p>
              </div>
              <div class="right" :class="step>=3?'solid':''">
                <div class="line"></div>
                <div class="arrow">►</div>
                <div class="line"></div>
              </div>
            </div>
          </li>
          <li>
            <div :class="step>=3?'active':'no-active'">
              <div class="left">
                <span class="icon"></span>
                <p>设计完成</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--设计需求信息页面开始-->
      <div class="from-group" v-show="step===0">
        <div class="solid-line">
          <p>项目名字：<span>xxxxxxx</span></p>
        </div>
        <div class="dashed-line">
          <p>行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：<span>互联网</span></p>
          <p style="margin-left: 400px">行业标签：<span>美食外卖</span></p>
        </div>
        <div class="dashed-line">
          <p>公司介绍：</p>
          <textarea class="introduce">浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。
          </textarea>
        </div>
        <div class="dashed-line">
          <p>需求描述：</p>
          <textarea class="introduce" style="height: 155px">浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。
          </textarea>
        </div>
        <div class="dashed-line">
          <p>相关附件：</p>
          <ul class="zip-group">
            <li class="zip-item">
              <div class="icon"></div>
              <div class="name">需求xxxxx.rar</div>
            </li>
            <li class="zip-item">
              <div class="icon"></div>
              <div class="name">需求xxxxx.rar</div>
            </li>
            <li class="zip-item">
              <div class="icon"></div>
              <div class="name">需求xxxxx.rar</div>
            </li>
          </ul>
        </div>
      </div>
      <!--设计需求信息页面结束-->
      <!--还未提案页面开始-->
      <div class="wait-main" v-show="step===1&&list.length===0">
        <div class="wait-icon"></div>
        <div class="wait-title">设计师在加紧工作中请耐心等待</div>
      </div>
      <!--还未提案页面结束-->
      <!--提案页面开始-->
      <div class="data-list" v-show="step===1&&list.length>0">
        <ul>
          <li v-for="item in  list" class="item">
            <div class="top-info">
              <span>{{item.id}}</span>
              <span v-if="item.state==='ing'">提案时间：{{item.date}}</span>
            </div>
            <div class="list-main">
              <div class="left-block">
                <img v-for="img in item.thumbnail" :src="img" alt="略缩图" class="thumb">
              </div>
              <div class="right-block">
                <div class="btn" v-if="!hasechose">选中它</div>
                <div v-else :class="item.state==='chosed'?'chosed':'nochosed'"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--提案页面结束-->
      <!--修改提案 但还未选择提案 开始-->
      <div class="wait-main" v-show="step===2 & hasechose===false & satisfied===false">
        <div class="wait-icon1"></div>
        <div class="wait-title">您还未选择提案</div>
      </div>
      <!--修改提案 但还未选择提案 结束-->
      <!--修改提案 已选择提案 是否满意 开始-->
      <div class="wait-chose" v-show="step===2 & satisfied===false & hasechose===true & optimize===false">
        <div class="chose-title">您已经选中A方案</div>
        <div class="btn-group">
          <div class="chose-btn">满 意</div>
          <div class="chose-btn">优 化</div>
        </div>
      </div>
      <!--修改提案 已选择提案 是否满意 结束-->
      <!--提案优化开始-->
      <div class="from-group" v-show="step===2 & satisfied===false & hasechose===true & optimize===true"
           style="padding-bottom: 42px;">
        <div class="solid-line">
          <p>您已经选中A方案</p>
        </div>
        <div class="dashed-line custom">
          <p>优化设计需求：</p>
          <textarea class="introduce" style="height: 155px;width: 1051px;">色彩采用高级灰模式…….</textarea>
        </div>
        <div class="sub">
          <div class="sub-btn" v-if="!submit">发给小创</div>
          <div class="sub-btn disabled" v-else>已发送</div>
        </div>
        <div class="dashed-line custom" style="margin-top: 15px;" v-if="submit">
          <p>修改后提案：</p>
          <div class="wait-back" v-if="optimizeList.length===0">
            <div class="icon"></div>
            <div class="title">小创修改中，等待上传</div>
          </div>
          <div class="optimize" v-else>
            <img v-for="img in optimizeList" :src="img" alt="略缩图" class="thumb">
          </div>
        </div>
        <div class="sub" v-if="submit&optimizeList.length>0">
          <div class="sub-btn">已满意</div>
        </div>
      </div>
      <!--提案优化结束-->
      <!--优化已满意开始-->
      <div class="wait-main" v-show="step===2 & satisfied===true">
        <div class="wait-icon2"></div>
        <div class="wait-title" style="color: #4F4F4F;">小创已经修改完成</div>
      </div>
      <!--优化已满意结束-->
      <!--设计完成评价开始-->
      <div class="from-group" v-show="step===3"
           style="padding-bottom: 42px;">
        <div class="solid-line">
          <p style="color: #4F4F4F;">您的定制设计A方案</p>
        </div>
        <div class="dashed-line custom" style="align-items: center;">
          <ul class="zip-group">
            <li class="zip-item">
              <div class="icon"></div>
              <div class="name">定制设计A方案.rar</div>
            </li>
          </ul>
          <div class="download">下载到本地</div>
        </div>
        <div class="has-commit" v-if="commit">
          <div class="icon"></div>
          <div class="title">感谢您使用小创定制设计</div>
        </div>
        <div v-else class="commit">
          <div class="top-tip">
            <div class="title">
              给小创的服务给个评价吧？
            </div>
            <div class="star">
              <span v-for="item in 5" :class="item<=star0?'ch':''" @click="star(0,item)">&#9733;</span>
            </div>
          </div>
          <textarea class="commit-text"></textarea>
          <div class="top-tip">
            <div class="title">
              对于出品的案例您满意吗？
            </div>
            <div class="star">
              <span v-for="item in 5" :class="item<=star1?'ch':''" @click="star(1,item)">&#9733;</span>
            </div>
          </div>
          <textarea class="commit-text"></textarea>
          <div class="sub" style="margin-top: 32px">
            <div class="sub-btn">提交</div>
          </div>
        </div>
      </div>
      <!--设计完成评价结束-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        step: 0,
        hasechose: true,//是否选择提案
        optimize: true,//是否需要优化
        submit: true,//是否提交优化表单
        satisfied: true,//是否满意优化
        commit: false,//是否已经评价
        star0: 4,
        star1: 5,
        list: [
          {
            id: 'A方案',
            state: 'chosed',
            date: '1天12小时xxs',
            thumbnail: [require('./img/thumb.png'), require('./img/thumb.png'), require('./img/thumb.png')]
          },
          {
            id: 'B方案',
            state: 'nochosed',
            date: '1天12小时xxs',
            thumbnail: [require('./img/thumb.png'), require('./img/thumb.png'), require('./img/thumb.png')]
          }
        ],
        optimizeList: [require('./img/thumb.png'), require('./img/thumb.png'), require('./img/thumb.png')]
      }
    },
    methods: {
      star: function (index, star) {
        if (index === 0) {
          this.star0 = star;
        } else {
          this.star1 = star;
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "index.less";
</style>