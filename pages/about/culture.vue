<template>
  <div class="culture">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="cultureContent" v-html="cultureContent"></div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "culture",
  data() {
    return {
      breadName: "企业文化",
      cultureContent: "",
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/server_config/list/CORPORATE_CULTURE",
      });
      this.cultureContent = res.data.value;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.culture {
  position: relative;
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
  }
}
</style>
