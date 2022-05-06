<template>
  <div class="qualifications">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="honor">
        <div class="title">行业荣誉和地位</div>
        <p class="line"></p>
        <ul>
          <li class="honorImgBox" v-for="item in honorList" :key="item.id">
            <img :src="$imgUrl+ item.fileName" alt="" />
            <p class="info">{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <div class="certificate">
        <div class="title">管理体系认证证书</div>
        <p class="line"></p>
        <ul>
          <li
            class="certificateImgBox"
            v-for="item in certificateList"
            :key="item.id"
          >
            <img :src="$imgUrl+ item.fileName" alt="" />
            <p class="info">{{ item.title }}</p>
          </li>
        </ul>
      </div>
      <div class="patent">
        <div class="title">知识产权专利</div>
        <p class="line"></p>
        <ul>
          <li class="patentImgBox" v-for="item in patentList" :key="item.id">
            <img :src="$imgUrl+ item.fileName" alt="" />
            <p class="info">{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "qualifications",
  data() {
    return {
      breadName: "公司资质",
      honorList: [],
      certificateList: [],
      patentList: [],
    };
  },
  methods: {
    async getData() {
      let resHonor = await fetchData({
        url: "/company_aptitude/list",
        data: { aptitudeType: "APTITUDE_STATUS" },
      });
      let resCer = await fetchData({
        url: "/solution/list",
        data: { aptitudeType: "APTITUDE_CERTIFICATE" },
      });
      let resPaten = await fetchData({
        url: "/solution/list",
        data: { aptitudeType: "APTITUDE_PATENT" },
      });
      if (!resHonor && !resCer && !resPaten ) return;
      this.honorList = resHonor.data;
      this.certificateList = resCer.data;
      this.patentList = resPaten.data;

      this.honorList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
      this.certificateList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
      this.patentList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.qualifications {
  position: relative;
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .title {
      width: 165px;
      height: 30px;
      background: #848e97;
      border-radius: 0px 16px 0px 0px;
      line-height: 30px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }
    .line {
      border: 1px solid #848e97;
      margin-bottom: 20px;
    }
    .honor {
      overflow: hidden;
      .honorImgBox {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        width: 230px;
        height: 230px;
        padding: 10px;
        background: #ffffff;
        box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
        img {
          width: 230px;
          height: 180px;
        }
        .info {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }
      }
      .honorImgBox:nth-child(5) {
        margin-right: 0 !important;
      }
    }
    .certificate {
      overflow: hidden;
      .certificateImgBox {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        width: 300px;
        height: 250px;
        padding: 10px;
        background: #ffffff;
        box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
        img {
          width: 300px;
          height: 210px;
        }
        .info {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }
      }
      .certificateImgBox:nth-child(4) {
        margin-right: 0 !important;
      }
    }
    .patent {
      overflow: hidden;
      margin-bottom: 30px;
      .patentImgBox {
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        width: 230px;
        height: 300px;
        padding: 10px;
        background: #ffffff;
        box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
        img {
          width: 230px;
          height: 260px;
        }
        .info {
          margin-top: 20px;
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }
      }
      .patentImgBox:nth-child(5) {
        margin-right: 0 !important;
      }
    }
  }
}
</style>
