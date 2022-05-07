<template>
  <div class="application">
    <!-- <el-carousel :interval="4000" type="card" height="590px">
      <el-carousel-item v-for="item in appList" :key="item.id">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel> -->
    <div class="title">应用领域</div>
    <div class="line"></div>
    <div class="wrapper horizontal demo1">
      <ul class="container">
        <li class="cards-list" v-for="item in appList" :key="item.id">
          <div class="img">
            <img :src="$imgUrl + item.fileName" alt="" />
            <div class="info">{{ item.title }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "application",
  head() {
    //引入三方JS，css
    return {
      link: [{ rel: "stylesheet", href: "/index/css/application.css" }],
      script: [
        { src: "/index/js/empile.js" },
        { src: "/index/js/application.js" },
      ],
    };
  },
  data() {
    return {
      appList: [],
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/application_area/list",
        data: {},
      });
      if (!res) return;
      this.appList = res.data;
      this.appList.map((item) => {
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
.application {
  width: 1340px;
  height: 660px;
  margin: 0 auto;
  margin-top: 30px;
  .title {
    margin: 0 auto;
    width: 220px;
    height: 37px;
    font-size: 28px;
    font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #000000;
    line-height: 37px;
  }
  .line {
    margin: 0 auto;
    margin-top: 5px;
    width: 42px;
    height: 2px;
    background: radial-gradient(#3e92fc, #00efe1, #00efe1);
    border-radius: 4px;
  }
  .container {
    .img {
      position: relative;
      .info {
        position: absolute;
        bottom: 39px;
        left: 38px;
        width: 84%;
        height: 60px;
        text-align: center;
        font-size: 18px;
        font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
        font-weight: 700;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.3);
        line-height: 60px;
      }
    }
  }
  // .el-carousel__item h3 {
  //   color: #475669;
  //   font-size: 14px;
  //   opacity: 0.75;
  //   line-height: 200px;
  //   margin: 0;
  // }

  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }

  // .el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
  // }
  // img {
  //   max-width: 100%;
  //   max-height: 100%;
  // }
}
</style>
