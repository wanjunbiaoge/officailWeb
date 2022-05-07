<template>
  <div class="productShow">
    <div class="title">产品展示</div>
    <div class="line"></div>
    <div class="productBox">
      <ul>
        <li class="car">
          <img src="/index/Web1x/productShow/car.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: { type: 'PRODUCT_VEHICLE_TERMINAL', name: '车载终端类' },
            }"
            class="productLink carLink"
          ></nuxt-link>
          <span>车载终端类</span>
        </li>
        <li class="chuandai">
          <img src="/index/Web1x/productShow/chuandai.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: { type: 'PRODUCT_WEAR', name: '穿戴类' },
            }"
            class="productLink wearLink"
          ></nuxt-link>
          <span>穿戴类</span>
        </li>
        <li class="hand">
          <img src="/index/Web1x/productShow/hand.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: { type: 'PRODUCT_HAND_HOLD', name: '手持便携类' },
            }"
            class="productLink holdLink"
          ></nuxt-link>
          <span>手持便携类</span>
        </li>
        <li class="gongneng">
          <img src="/index/Web1x/productShow/gongneng.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: { type: 'PRODUCT_FUNCTION', name: '功能类' },
            }"
            class="productLink funLink"
          ></nuxt-link>
          <span>功能类</span>
        </li>
        <li class="celiang">
          <img src="/index/Web1x/productShow/celiang.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: {
                type: 'PRODUCT_HIGH_ACCURACY_SURVEY',
                name: '高精度测量类',
              },
            }"
            class="productLink celiangLink"
          ></nuxt-link>
          <span>高精度测量类</span>
        </li>
        <li class="beidou">
          <img src="/index/Web1x/productShow/beidou.png" alt="" />
          <nuxt-link
            :to="{
              path: '/product/wearClass',
              query: { type: 'PRODUCT_SHORT_MESSAGE', name: '北斗短报文类' },
            }"
            class="productLink beidouLink"
          ></nuxt-link>
          <span>北斗短报文类</span>
        </li>
      </ul>
    </div>
    <div class="more">
      <nuxt-link to="/product/wearClass">更多</nuxt-link>
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
  width: 1340px;
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
    width: 1340px;
    height: 685px;
    .productLink {
      position: absolute;
      top: 0;
      left: 0;
    }
    ul li {
      position: absolute;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
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
      .carLink {
        width: 660px;
        height: 330px;
      }
    }
    .chuandai {
      width: 315px;
      height: 330px;
      top: 0;
      left: 680px;
      .wearLink {
        width: 315px;
        height: 330px;
      }
    }
    .hand {
      width: 325px;
      height: 685px;
      top: 0;
      right: 0;
      .holdLink {
        width: 325px;
        height: 685px;
      }
    }
    .gongneng {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 0;
      .funLink {
        width: 315px;
        height: 330px;
      }
    }
    .celiang {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 345px;
      .celiangLink {
        width: 315px;
        height: 330px;
      }
    }
    .beidou {
      width: 315px;
      height: 330px;
      bottom: 0;
      left: 680px;
      .beidouLink {
        width: 315px;
        height: 330px;
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
  .more:hover {
    background-color: #3d93fd;
    a {
      color: #fff;
    }
  }
}
</style>
