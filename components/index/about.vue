<template>
  <div class="about">
    <div class="title">关于我们</div>
    <div class="line"></div>
    <p class="container">{{indexAboutContent}}</p>
  </div>
</template>
<script>
export default {
  name:'about',
  data(){
    return{
      indexAboutContent:'四川北斗卫星导航平台有限公司成立于2014年、注册资金5000万元、国家级高新技术企业，作为四川省的“北斗导航民用服务中心”，为各行业提供安全可靠的位置运营服务，并重点致力于推广国家北斗产业化应用，融合北斗、互联网和车联网等新一代信息技术，提供“高精度安全定位”和“平台化运营服务”。 公司获得专利30多项，并被四川省政府认定为“信息安全产业重点培育企业”、“生产性服务示范单位”和“军民融合企业”；公司先后承担了省科技厅、省司法厅、省经信厅等多个重大专项的研发，最早在四川建设第一张高精度北斗增强网并开展示范应用，承建了省公安厅的北斗警用定位平台，同时承建了成都市、泸州市、乐山市市中区的北斗公务车管理调度平台。'
    }
  }
}
</script>
<style lang="less" scoped>
.about {
  width: 1360px;
  height: 250px;
  margin: 0 auto;
  margin-top: 40px;
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
    margin:0 auto;
    margin-top: 40px;
    width: 1360px;
    height: 156px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    text-align: justify;
    color: #000000;
    line-height: 26px;
    text-indent:30px;
  }
}
</style>
