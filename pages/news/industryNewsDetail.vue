<template>
  <div class="companyNewsDetail">
    <CommonHeader />
    <NewsBread :name="breadName" />
    <div class="container">
      <div class="titleInfo">
        <p class="titleName">
          {{ detail.title }}
        </p>
        <div class="timeBox">
          <span>发布时间：{{ detail.updateTime }} </span>
          <span>浏览次数：{{ detail.viewCounts }} </span>
        </div>
      </div>
      <div class="wang" v-html="detail.newsDetail"></div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  asyncData({ query }) {
    return {
      id: query.id,
    };
  },
  data() {
    return {
      breadName: "详情",
      detail: {},
    };
  },
  created() {
    this.getData(this.id);
  },
  methods: {
    async getData(id) {
      let res = await fetchData({
        url: "/news/list/" + id,
      });
      this.detail = res.data;
      this.detail.fileName = "/attachment/get_file/" + this.detail.fileName;
    },
  },
};
</script>
<style lang="less" scoped>
.companyNewsDetail {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    height: auto;
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
    .wang {
      width: 1200px;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}
</style>
