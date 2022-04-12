<template>
  <div class="qualifications">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="left">
        <AboutInfo />
      </div>
      <div class="right">
        <div class="honor">
          <div class="title">行业荣誉和地位</div>
          <p class="line"></p>
          <ul>
            <li class="honorImgBox" v-for="item in honorList" :key="item.id">
              <img :src="item.src" alt="" />
              <p class="info">{{ item.info }}</p>
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
              <img :src="item.src" alt="" />
              <p class="info">{{ item.info }}</p>
            </li>
          </ul>
        </div>
        <div class="patent">
          <div class="title">知识产权专利</div>
          <p class="line"></p>
          <ul>
            <li class="patentImgBox" v-for="item in patentList" :key="item.id">
              <img :src="item.src" alt="" />
              <p class="info">{{ item.info }}</p>
            </li>
          </ul>
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
      breadName: "公司资质",
      honorList: [
        { id: 0, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
        { id: 1, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
        { id: 2, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
        { id: 3, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
        { id: 4, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
        { id: 5, src: "/zizhi/zizhi1.png", info: "北斗导航民用服务中心" },
      ],
      certificateList: [
        { id: 0, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 1, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 2, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 3, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
      ],
      patentList: [
        { id: 0, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
        { id: 1, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
        { id: 2, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
        { id: 3, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
        { id: 4, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
        { id: 5, src: "/zizhi/zhuanli1.png", info: "计算机软件著作权登记证书" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.qualifications {
  position: relative;
  .container {
    width: 1360px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .left {
      float: left;
      width: 200px;
      height: 450px;
    }
    .right {
      float: right;
      width: 1100px;
      margin-bottom: 50px;
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
          margin-right: 32px;
          margin-bottom: 20px;
          width: 230px;
          height: 230px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
          img {
            width: 230px;
          }
          .info {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
          }
        }
        .honorImgBox:nth-child(4) {
          margin-right: 0 !important;
        }
      }
      .certificate {
        overflow: hidden;
        .certificateImgBox {
          float: left;
          margin-right: 32px;
          margin-bottom: 20px;
          width: 320px;
          height: 250px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
          img {
            width: 320px;
          }
          .info {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
          }
        }
        .certificateImgBox:nth-child(3) {
          margin-right: 0 !important;
        }
      }
      .patent {
        overflow: hidden;
        margin-bottom: 30px;
        .patentImgBox {
          float: left;
          margin-right: 32px;
          margin-bottom: 20px;
          width: 230px;
          height: 300px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
          img {
            width: 230px;
          }
          .info {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
          }
        }
        .patentImgBox:nth-child(4) {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
