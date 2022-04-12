<template>
  <div class="introduction">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="left">
        <AboutInfo />
      </div>
      <div class="right">
        <div class="qiantaiImg">
          <img :src="qiantaiImg" alt="" />
        </div>
        <div class="firstIntr">
          <img src="/introduction/sanjiao.png" alt="" />
          {{ firstInfo }}
        </div>
        <div class="secondIntr">
          <img src="/introduction/sanjiao.png" alt="" />
          {{ secondIntr }}
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
      breadName: "公司简介",
      qiantaiImg: "/introduction/qiantai.png",
      firstInfo:
        "四川北斗卫星导航平台有限公司成立于2014年、注册资金5000万元、国家级高新技术企业，作为四川省的“北斗导航民用服务中心”，为各行业提供安全可靠的位置运营服务，并重点致力于推广国家北斗产业化应用，融合北斗、互联网和车联网等新一代信息技术，提供“高精度安全定位”和“平台化运营服务”。",
      secondIntr:
        "公司获得专利30多项，并被四川省政府认定为“信息安全产业重点培育企业”、“生产性服务示范单位”和“军民融合企业”；公司先后承担了省科技厅、省司法厅、省经信厅等多个重大专项的研发，最早在四川建设第一张高精度北斗增强网并开展示范应用，承建了省公安厅的北斗警务定位平台，同时承建了成都市北斗公务车管理高度平台。",
    };
  },
};
</script>
<style lang="less" scoped>
.introduction {
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
      .qiantaiImg {
        width: 1100px;
        img {
          width: 100%;
        }
      }
      .firstIntr,
      .secondIntr {
        font-size: 17px;
        margin-top: 30px;
        text-indent: 20px;
        line-height: 25px;
        img {
          width: 9px;
          height: 9px;
        }
      }
    }
  }
}
</style>
