<template>
  <div class="beidouClass">
    <CommonHeader />
    <ProductBread :name="breadName" />
    <div class="container">
      <div class="left">
        <ProductInfo />
      </div>
      <div class="right">
        <div class="rightBeidou">
          <ul>
            <li
              class="rightBeidouImgBox"
              v-for="item in beidouList"
              :key="item.id"
            >
              <img :src="item.src" alt="" />
              <p class="info">{{ item.info }}</p>
            </li>
          </ul>
        </div>
        <CommonPagenation :pagenation="pagenation" :getData="getData" />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadName: "北斗短报文类",
      beidouList: [
        { id: 0, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 1, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 2, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
        { id: 3, src: "/zizhi/guanli1.png", info: "环境管理体系认证证书" },
      ],
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
.beidouClass {
  .container {
    width: 1360px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .left {
      float: left;
      width: 200px;
      height: 600px;
    }
    .right {
      float: right;
      width: 1100px;
      .rightBeidou {
        overflow: hidden;
        .rightBeidouImgBox {
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
        .rightBeidouImgBox:nth-child(3) {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
