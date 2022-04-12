<template>
  <div class="solution">
    <div class="title">解决方案</div>
    <div class="line"></div>
    <div class="productBox">
      <ul>
        <li v-for="item in solutionList" :key="item.id">
          <img :src="item.src" alt="" />
        </li>
      </ul>
    </div>
    <div class="more">
      <nuxt-link to="/">更多</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "solution",
  data() {
    return {
      solutionList: [
        { id: 0, src: "/index/Web1x/solution/shuju.png" },
        { id: 1, src: "/index/Web1x/solution/shuju.png" },
        { id: 2, src: "/index/Web1x/solution/shuju.png" },
        { id: 3, src: "/index/Web1x/solution/shuju.png" },
        { id: 4, src: "/index/Web1x/solution/shuju.png" },
        { id: 5, src: "/index/Web1x/solution/shuju.png" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.solution {
  width: 1360px;
  margin: 0 auto;
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
  .productBox {
    width: 1360px;
    height: 665px;
    // border: 1px solid red;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    ul li {
      list-style: none;
      // float: left;
      margin-bottom: 20px;
      img {
        width: 430px;
        height: 320px;
      }
    }
  }
  .more {
    margin: 0 auto;
    margin-top: 40px;
    width: 241px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #3d93fd;
    a {
      padding: 10px 105px 10px 110px;
      line-height: 32px;
      color: #3d93fd;
    }
  }
}
</style>
