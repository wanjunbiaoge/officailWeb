<template>
  <div class="applicationDetail">
    <CommonHeader />
    <ApplicationBread :name="appDetail.title" />
    <div class="container">
      <div class="introduce">
        <div class="introduceImg">
          <img :src="appDetail.src" alt="" />
        </div>
        <div class="infoBox">
          <p class="title">{{ appDetail.title }}</p>
          <p class="info">{{ appDetail.info }}</p>
          <div class="timeBox">
            <span><i class="el-icon-time"></i> {{ appDetail.updateTime }}</span>
            <span><i class="el-icon-view"></i> {{ appDetail.seeTimes }}</span>
          </div>
        </div>
      </div>
      <div class="detailsBox">
        <div class="jianjie">简介</div>
        <div class="detailsInfo">
          {{ detailsInfo }}
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
      appDetail: {
        src: "/index/Web1x/success/cdgwc.png",
        title: "数据管理平台",
        info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据的大数的大数的大数管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
        updateTime: "2020-10-10",
        seeTimes: "123123",
      },
      detailsInfo: "专注于啥啥啥的大数据管理统专注于啥啥啥的大数据的大数的大数的大数管统专",
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
.applicationDetail {
  .container {
    width: 1360px;
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
      .detailsInfo{
        width: 100%;
        min-height: 286px;
        overflow: hidden;
        border: 1px solid pink;
      }
    }
  }
}
</style>
