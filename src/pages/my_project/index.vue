<template>
  <div class="content">
    <div class="title">我的定制项目</div>
    <div class="status-tabs">
      <div class="tab" :class="currentIndex===0?'active':''" @click="getData(0)">全 部</div>
      <div class="tab" :class="currentIndex===1?'active':''" @click="getData(1)">进行中</div>
      <div class="tab" :class="currentIndex===2?'active':''" @click="getData(2)">已完成</div>
    </div>
    <!--没有数据时展示的页面开始-->
    <div class="nodata" v-if="list.length===0">
      <div class="nodata-img"></div>
      <div class="tip">您还没有属于您的定制设计</div>
      <div class="btn">选择设计</div>
    </div>
    <!--没有数据时展示的页面结束-->
    <!--有数据的时候展示页面开始-->
    <div class="data-list" v-else>
      <ul>
        <li v-for="item in  list" class="item">
          <div class="top-info">
            <span>项目编号：{{item.id}}</span>
            <span v-if="item.state==='ing'">距离提案时间：{{item.date}}</span>
          </div>
          <div class="main">
            <div class="left-block">
              <img :src="item.thumbnail" alt="略缩图" class="thumb">
              <div class="state" :class="item.state==='ing'?'state-ing':'state-ove'">
                {{item.state==='ing'?'进行中':'已完成'}}
              </div>
              <div class="type">优质服务</div>
            </div>
            <div class="right-block">
              <div class="btn">{{item.state==='ing'?'进入项目':'查看项目'}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--有数据的时候展示页面结束-->
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        currentIndex: -1,
        list: [],
      }
    },
    created: function () {
      this.getData(0)
    },
    methods: {
      // 获取数据接口
      getData: function (index) {
        if (index === this.currentIndex) {
          return
        }
        this.currentIndex = index;
        //虚拟数据
        this.list = [];
        if (index === 0 || index === 1) {
          this.list.push({
            id: '1728 38728487',
            state: 'ing',
            date: '1天12小时xxs',
            type: '优质服务',
            thumbnail: require('./img/thumb.png')
          })
        }
        if (index === 0 || index === 2) {
          this.list.push({
            id: '1728 38728487',
            state: 'dong',
            date: '2天12小时xxs',
            type: '优质服务',
            thumbnail: require('./img/thumb.png')
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "index.less";
</style>