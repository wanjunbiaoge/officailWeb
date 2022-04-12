<template>
  <div class="slideShow">
    <el-carousel height="570px">
      <el-carousel-item v-for="item in slideList" :key="item.id">
        <img :src="item.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "slideShow",
  data() {
    return {
      slideList: [
        { id: 0, src: "/index/Web2x/a1-banner.png" },
        { id: 1, src: "/index/Web2x/a1-banner.png" },
        { id: 2, src: "/index/Web2x/a1-banner.png" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.slideShow {
  width: 100%;
  height: 570px;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel {
    position: absolute;
    top: 0;
    width: 100%;
    // z-index: -1;
  }
  img{
    width: 100%;
    height: auto;
  }
}
</style>
