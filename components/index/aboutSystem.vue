<template>
  <div class="aboutSystem">
    <div class="title">关于平台</div>
    <div class="line"></div>
    <img :src="$imgUrl + aboutSystemImg" alt="" />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "aboutSystem",
  data() {
    return {
      aboutSystemImg: "",
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/server_config/list/ABOUT_PLATFORM",
        data: {},
      });
      if (!res) return;
      this.aboutSystemImg = "/attachment/get_file/" + res.data.value;
      
    },
  },
  mounted() {
    this.getData();
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
  img {
    width: 100%;
    height: auto;
  }
}
</style>
