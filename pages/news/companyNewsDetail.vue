<template>
  <div class="companyNewsDetail">
    <CommonHeader />
    <NewsBread :name="breadName" />
    <div class="container">
      <div class="titleInfo">
        <p class="titleName">
          {{ newsInfo.title }}
        </p>
        <div class="timeBox">
          <span>发布时间：{{ newsInfo.updateTime }} </span>
          <span>浏览次数：{{ newsInfo.seeTimes }} </span>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadName: "详情",
      newsInfo: {
        title: "四川北斗组织召开“成华区公务用车管理平台”培训会",
        updateTime: "2020-10-10",
        seeTimes: "123132",
      },
      pagenation: {
        pageTotal: 10,
        pageNumber: 1,
      },
    };
  },
  methods: {
    async getData() {
      console.log("getData");
    },
  },
};
</script>
<style lang="less" scoped>
.companyNewsDetail {
  .container {
    width: 1360px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    height: auto;
    border: 1px solid red;
    min-height: 610px;
    background: #f9f9f9;
    .titleInfo {
      margin: 0 auto;
      width: 1200px;
      height: 150px;
      text-align: center;
      border-bottom: 1px solid #dcdcdc;
      overflow: hidden;
      .titleName {
        margin-top: 40px;
        margin-bottom: 50px;
        font-size: 28px;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      }
      .timeBox {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 400px;
        font-size: 14px;
      }
    }
  }
}
</style>
