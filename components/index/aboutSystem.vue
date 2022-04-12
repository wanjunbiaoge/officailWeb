<template>
  <div class="aboutSystem">
    <div class="title">关于平台</div>
    <div class="line"></div>
    <img :src="aboutSystemImg" alt="">
  </div>
</template>
<script>
export default {
  name:'aboutSystem',
  data() {
    return {
      aboutSystemImg:'/index/Web2x/aboutSystem.png'
    }
  },
};
</script>
<style lang="less" scoped>
.aboutSystem {
  margin-top: 50px;
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
    margin-bottom: 40px;
    width: 42px;
    height: 2px;
    background: radial-gradient(#3e92fc, #00efe1, #00efe1);
    border-radius: 4px;
  }
  img{
    width: 100%;
    height: auto;
  }
}
</style>
