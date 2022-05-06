<template>
  <div class="introduction">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="qiantaiImg">
        <img :src="qiantaiImg" alt="" />
      </div>
      <div class="secondIntr" v-html="content"></div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "introduction",
  data() {
    return {
      breadName: "公司简介",
      qiantaiImg: "/introduction/qiantai.png",
      content: "",
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/server_config/list/COMPANY_INTRODUCE",
      });
      this.content = res.data.value;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.introduction {
  position: relative;
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .qiantaiImg {
      width: 1340px;
      img {
        width: 1340px;
      }
    }
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
</style>
