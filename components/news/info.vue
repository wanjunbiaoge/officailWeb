<template>
  <div class="ProductList">
    <div class="logoBox">
      <div class="box">
        <img class="logo" src="/introduction/beidouLogo.png" alt="" />
      </div>
      <span class="text">新闻资讯</span>
    </div>
    <div class="asideNav">
      <ul>
        <li>
          <nuxt-link class="ProductItem" to="/news/company">公司要闻</nuxt-link>
        </li>
        <li>
          <nuxt-link class="ProductItem" to="/news/industry"
            >行业新闻</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div class="telbox">
      <div class="telLogoBox">
        <img src="/introduction/phone.png" alt="" />
      </div>
      <div class="phoneNum">
        <div class="phoneTop">
          <p>全国服务咨询电话</p>
          <p>{{ servicePhone }}</p>
        </div>
        <div class="phoneBottom">
          <p>全国业务咨询电话</p>
          <p>{{ bussinessPhone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  data() {
    return {
      servicePhone: "028-8603-6000",
      bussinessPhone: "181-0810-1510",
    };
  },
};
</script>
<style lang="less" scoped>
.ProductList {
  width: 200px;
  height: 600px;
  .logoBox {
    width: 200px;
    height: 200px;
    text-align: center;
    opacity: 0.8;
    background: #21324e;
    overflow: hidden;
    .box {
      margin: 20px auto;
      width: 130px;
      height: 130px;
    }
    .logo {
      width: 100%;
    }
    .text {
      font-size: 15px;
      color: #fff;
    }
  }
  .asideNav {
    width: 100%;
    .ProductItem {
      position: relative;
      display: block;
      width: 200px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background: #9098a6;
      color: #fff;
    }
    .ProductItem:hover {
      background: #3a96fc;
    }
    .nuxt-link-active {
      background: #3a96fc;
    }
    .nuxt-link-active::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: 0.09rem solid #3a96fc;
      border-left: 0.09rem solid #3a96fc;
      border-right: 0.09rem solid transparent;
      border-bottom: 0.09rem solid #3a96fc;
      position: absolute;
      right: 0;
      top: 30%;
      background: #fff;
      border-width: 6px;
    }
  }
  .telbox {
    width: 100%;
    height: 140px;
    margin-top: 20px;
    background: #21324e;
    opacity: 0.8;
    .telLogoBox {
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      width: 55px;
      height: 100%;
      border-right: 1px solid #fff;
    }
    .phoneNum {
      float: right;
      width: 143px;
      height: 100%;
      color: #fff;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 600;
      text-align: left;
      div {
        height: 70px;
        p {
          margin-top: 15px;
          // margin-left: 10px;
          text-align: left;
          padding-left: 7px;
        }
        p:last-child {
          margin-top: 10px;
          font-size: 16px;
        }
      }
      .phoneTop {
        overflow: hidden;
      }
    }
  }
}
</style>
