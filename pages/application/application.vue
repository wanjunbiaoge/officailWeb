<template>
  <div class="application">
    <CommonHeader />
    <ApplicationBread :name="breadName" />
    <div class="container">
      <div class="left">
        <ApplicationInfo />
      </div>
      <div class="right">
        <div class="rightApplication">
          <ul>
            <li class="appList" v-for="item in applicationList" :key="item.id">
              <div class="appListImgbox">
                <img :src="item.src" alt="" />
              </div>
              <div class="infoBox">
                <nuxt-link class="title" to="/application/details">{{
                  item.title
                }}</nuxt-link>
                <p class="info">{{ item.info }}</p>
                <div class="timeBox">
                  <span
                    ><i class="el-icon-time"></i> {{ item.updateTime }}</span
                  >
                  <span><i class="el-icon-view"></i> {{ item.seeTimes }}</span>
                </div>
              </div>
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
      breadName: "",
      applicationList: [
        {
          id: 0,
          src: "/index/Web1x/success/cdgwc.png",
          title: "数据管理平台",
          info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
          updateTime: "2020-10-10",
          seeTimes: "123123",
        },
        {
          id: 1,
          src: "/index/Web1x/success/jingwu.png",
          title: "顶顶顶顶顶平台",
          info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
          updateTime: "2020-10-10",
          seeTimes: "123123",
        },
        {
          id: 2,
          src: "/index/Web1x/success/gongche.png",
          title: "去微软舒服平台",
          info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
          updateTime: "2020-10-10",
          seeTimes: "123123",
        },
        {
          id: 3,
          src: "/index/Web1x/success/luzhou.png",
          title: "德国汉堡峰会平台",
          info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
          updateTime: "2020-10-10",
          seeTimes: "123123",
        },
        {
          id: 4,
          src: "/index/Web1x/success/cdgwc.png",
          title: "护肤西安平台",
          info: "本系统专注于啥啥啥的大数据管理统专注于啥啥啥的大数据管统专注于啥啥啥的大数据数据管统专，，适合80字以内",
          updateTime: "2020-10-10",
          seeTimes: "123123",
        },
      ],
      pagenation: {
        pageTotal: 20,
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
.application {
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
      .rightApplication {
        overflow: hidden;
        .appList {
          float: left;
          width: 500px;
          height: 150px;
          margin-bottom: 30px;
          .appListImgbox {
            float: left;
            width: 200px;
            height: 150px;
            img {
              width: 100%;
            }
          }
          .infoBox {
            float: left;
            padding-left: 30px;
            width: 250px;
            height: 150px;
            .title {
              font-size: 18px;
              font-family: Microsoft YaHei, Microsoft YaHei-Bold;
              font-weight: 700;
              color: #333333;
            }
            .info {
              margin-top: 10px;
              font-size: 14px;
              color: #333333;
              height: 80px;
              line-height: 16px;
              display: -webkit-box;
              overflow: hidden;
              text-indent: 28px;
            }
            .timeBox {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
