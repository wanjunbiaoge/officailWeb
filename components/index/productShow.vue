<template>
  <div class="productShow">
    <div class="title">产品展示</div>
    <div class="line"></div>
    <div class="productBox">
      <ul>
        <li class="car">
          <img src="/index/Web1x/productShow/car.png" alt="" />
          <span>车载终端类</span>
        </li>
        <li class="chuandai">
          <img src="/index/Web1x/productShow/chuandai.png" alt="" />
          <span>穿戴类</span>
        </li>
        <li class="hand">
          <img src="/index/Web1x/productShow/hand.png" alt="" />
          <span>车载手持类</span>
        </li>
        <li class="gongneng">
          <img src="/index/Web1x/productShow/gongneng.png" alt="" />
          <span>功能类</span>
        </li>
        <li class="celiang">
          <img src="/index/Web1x/productShow/celiang.png" alt="" />
          <span>高精度测量类</span>
        </li>
        <li class="beidou">
          <img src="/index/Web1x/productShow/beidou.png" alt="" />
          <span>北斗短报文类</span>
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
  name: "aboutSystem",
  data() {
    return {
      productShowImg: [
        { id: 0, src: "/index/Web1x/productShow/car.png" },
        { id: 1, src: "/index/Web1x/productShow/chuandai.png" },
        { id: 2, src: "/index/Web1x/productShow/hand.png" },
        { id: 3, src: "/index/Web1x/productShow/gongneng.png" },
        { id: 4, src: "/index/Web1x/productShow/celiang.png" },
        { id: 5, src: "/index/Web1x/productShow/beidou.png" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.productShow {
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
    position: relative;
    width: 1360px;
    height: 695px;
    ul li {
      position: absolute;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
      span {
        position: absolute;
        width: 120px;
        height: 24px;
        bottom: 20px;
        left: 20px;
        font-size: 18px;
        font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
        font-weight: 700;
        color: #ffffff;
      }
    }
    .car {
      width: 660px;
      height: 330px;
      top: 0;
      left: 0;
    }
    .chuandai {
      width: 315px;
      height: 330px;
      top: 0;
      left: 690px;
    }
    .hand {
      width: 325px;
      height: 695px;
      top: 0;
      right: 0;
    }
    .gongneng {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 0;
    }
    .celiang {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 345px;
    }
    .beidou {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 690px;
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
