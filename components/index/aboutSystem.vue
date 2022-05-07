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
  position: relative;
  margin-top: 50px;
  .title {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 220px;
    transform: translate(-50%);
    height: 37px;
    font-size: 28px;
    font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
    font-weight: 700;
    text-align: center;
    color: #fff;
    line-height: 37px;
  }
  .line {
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translate(-50%);
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 40px;
    width: 42px;
    height: 2px;
    // background: radial-gradient(#3e92fc, #00efe1, #00efe1);
    background-color: #fff;
    border-radius: 4px;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
