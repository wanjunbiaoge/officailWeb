<template>
  <div class="about">
    <div class="title">关于我们</div>
    <div class="line"></div>
    <p class="container" v-html="indexAboutContent"></p>
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "about",
  data() {
    return {
      indexAboutContent: "",
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/server_config/list/COMPANY_INTRODUCE",
      });
      this.indexAboutContent = res.data.value;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.about {
  width: 1340px;
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
    margin: 0 auto;
    margin-top: 40px;
    width: 1340px;
    height: 156px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    text-align: justify;
    color: #000000;
    line-height: 26px;
  }
}
</style>
