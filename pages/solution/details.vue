<template>
  <div class="applicationDetail">
    <CommonHeader />
    <SolutionBread :name="detail.title" />
    <div class="container">
      <div class="introduce">
        <div class="introduceImg">
          <img :src="$imgUrl + detail.fileName" alt="" />
        </div>
        <div class="infoBox">
          <p class="title">{{ detail.title }}</p>
          <p class="info">{{ detail.subtitle }}</p>
          <div class="timeBox">
            <span><i class="el-icon-time"></i> {{ detail.time }}</span>
            <span><i class="el-icon-view"></i> {{ detail.viewCounts }}</span>
          </div>
        </div>
      </div>
      <div class="detailsBox">
        <div class="jianjie">简介</div>
        <div class="detailsInfo" v-html="detail.intro"></div>
      </div>
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
      detail: {},
    };
  },
  created() {
    this.getData(this.id);
  },
  methods: {
    async getData(id) {
      let res = await fetchData({
        url: "/solution/list/" + id,
      });
      this.detail = res.data;
      this.detail.fileName = "/attachment/get_file/" + this.detail.fileName;
    },
  },
};
</script>
<style lang="less" scoped>
.applicationDetail {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    height: auto;
    .introduce {
      width: 100%;
      height: 260px;
      overflow: hidden;
      .introduceImg {
        float: left;
        width: 350px;
        img {
          width: 100%;
        }
      }
      .infoBox {
        float: left;
        margin-left: 50px;
        width: 900px;
        height: 260px;
        font-family: Microsoft YaHei, Microsoft YaHei-Bold;
        color: #333333;
        .title {
          font-size: 24px;
          font-weight: 700;
        }
        .info {
          font-size: 20px;
          font-weight: 500;
          margin-top: 20px;
          text-indent: 40px;
          line-height: 25px;
          height: 170px;
        }
        .timeBox {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          margin-top: 20px;
        }
      }
    }
    .detailsBox {
      .jianjie {
        margin-top: 30px;
        width: 158px;
        height: 33px;
        background: #848e97;
        border-radius: 0px 33px 0px 0px;
        color: #fff;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
      }
      .detailsInfo {
        width: 100%;
        min-height: 286px;
        overflow: hidden;
      }
    }
  }
}
</style>
