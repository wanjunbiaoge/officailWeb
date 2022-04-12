<template>
  <div class="company">
    <CommonHeader />
    <NewsBread :name="breadName" />
    <div class="container">
      <div class="left">
        <NewsInfo />
      </div>
      <div class="right">
        <div class="rightNews">
          <ul>
            <li class="rightNewsImgBox" v-for="item in newsList" :key="item.id">
              <img :src="item.src" alt="" />
              <p class="info">{{ item.info }}</p>
              <nuxt-link
                class="toDetail"
                to="/news/companyNewsDetail"
              ></nuxt-link>
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
      breadName: "公司要闻",
      newsList: [
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
.company {
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
      .rightNews {
        overflow: hidden;
        .rightNewsImgBox {
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
          .toDetail {
            display: inline-block;
            width: 320px;
            height: 250px;
            margin-top: -240px;
          }
        }
        .rightNewsImgBox:nth-child(3) {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
