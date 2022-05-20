<template>
  <div class="slideShow">
    <el-row>
      <el-col :span="24">
        <el-carousel
          id="el-carousel"
        >
          <el-carousel-item v-for="item in slideList" :key="item.id">
            <img :src="$imgUrl + item.fileName" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  name: "slideShow",
  data() {
    return {
      slideList: [],
      bannerHeight: 680,
      screenWidth: 1920,
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/banner/list",
        data: {},
      });
      if (!res) return;
      this.slideList = res.data;
      this.slideList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
    },
    setSize1() {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.screenWidth = width;
      //图片                高 / 宽  700 / 1920
      this.bannerHeight = (680 / 1920) * this.screenWidth - 50;
      document.getElementById("el-carousel").style.height =
        this.bannerHeight + "px";
    },
    setSize() {
      this.bannerHeight = (680 / 1920) * this.screenWidth - 50;
      document.getElementById("el-carousel").style.height =
        this.bannerHeight + "px";
    },
  },
  mounted() {
    this.setSize1();
    const that = this;
    //监听浏览器窗口大小改变
    window.addEventListener(
      "resize",
      function () {
        var width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        that.screenWidth = width;
        that.setSize();
      },
      false
    );
    this.getData();
  },
};
</script>
<style lang="less">
.slideShow {
  width: 100%;
  .el-carousel__container {
    height: 100% !important;
    img {
      display: inline-block;
      height: auto;
      width: 100%;
    }
  }
  .el-carousel__indicators--horizontal{
    bottom:25px
  }
  .el-carousel__button{
    height: 5px;
  }
}

</style>
