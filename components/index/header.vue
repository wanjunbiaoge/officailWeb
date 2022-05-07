<template>
  <div class="header">
    <div class="nav">
      <img src="/index/Web1x/bdLogo.png" alt="logo" class="logo" />
      <ul class="middle">
        <li class="middleTitle">
          <nuxt-link to="/" class="middleTitleName">网站首页</nuxt-link>
        </li>
        <li class="aboutUs middleTitle">
          <div class="aboutUsName middleTitleName">
            关于我们<i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="aboutList middleTitleList">
            <li>
              <nuxt-link
                to="/about/introduction"
                class="aboutHover middleTitleHover"
                >公司简介</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/about/culture" class="aboutHover middleTitleHover"
                >企业文化</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about/qualifications"
                class="aboutHover middleTitleHover"
                >公司资质</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="product middleTitle">
          <div class="productName middleTitleName">
            产品展示<i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="productList middleTitleList">
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: { type: 'PRODUCT_WEAR', name: '穿戴类' },
                }"
                class="productHover middleTitleHover"
                >穿戴类</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: { type: 'PRODUCT_FUNCTION', name: '功能类' },
                }"
                class="productHover middleTitleHover"
                >功能类</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: {
                    type: 'PRODUCT_VEHICLE_TERMINAL',
                    name: '车载终端类',
                  },
                }"
                class="productHover middleTitleHover"
                >车载终端</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: { type: 'PRODUCT_HAND_HOLD', name: '手持便携类' },
                }"
                class="productHover middleTitleHover"
                >手持便携</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: {
                    type: 'PRODUCT_SHORT_MESSAGE',
                    name: '北斗短报文类',
                  },
                }"
                class="productHover middleTitleHover"
                >北斗短报文</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                :to="{
                  path: '/product/wearClass',
                  query: {
                    type: 'PRODUCT_HIGH_ACCURACY_SURVEY',
                    name: '高精度测量类',
                  },
                }"
                class="productHover middleTitleHover"
                >高精度测量</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="middleTitle">
          <nuxt-link to="/solution/solution" class="middleTitleName"
            >解决方案</nuxt-link
          >
        </li>
        <li class="middleTitle">
          <nuxt-link to="/successCase/successCase" class="middleTitleName"
            >成功案例</nuxt-link
          >
        </li>
        <li class="middleTitle">
          <div class="middleTitleName">
            新闻资讯<i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="middleTitleList">
            <li>
              <nuxt-link to="/news/company" class="middleTitleHover"
                >公司要闻</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/news/industry" class="middleTitleHover"
                >行业新闻</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li class="middleTitle">
          <nuxt-link to="/contact/contact" class="middleTitleName"
            >联系方式</nuxt-link
          >
        </li>
        <li class="middleTitle">
          <nuxt-link to="/recruit/recruit" class="middleTitleName"
            >诚聘</nuxt-link
          >
        </li>
      </ul>
      <div class="tel">
        <div class="text">
          <img src="/navTel.png" alt="" class="phoneLogo" />全国咨询电话
        </div>
        <div class="phoneNum">{{ phoneNumber }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/utils/fetchData";
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/server_config/list",
        data: {
          type: "SERVICE_PHONE",
        },
      });
      if (!res) return;
      this.phoneNumber = res.data[0].value;
    },
  },
};
</script>

<style scoped lang="less">
// .wrap {
//   width: 1366px;
//   height: 3000px;
//   margin: 0 auto;
//   color: #fff;
.header {
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 47px;
  background-color: rgba(0, 0, 0, 0.3);
  .nav {
    height: 47px;
    width: 1340px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      margin-top: 3px;
      width: 232px;
      height: 41px;
    }
    .tel {
      width: 125px;
      height: 41px;
      margin-top: 10px;
      .phoneNum {
        font-size: 14px;
        font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
        font-weight: 700;
        color: #3d93fd;
        line-height: 19px;
      }
      .text {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #3d93fd;
        line-height: 16px;
      }
      .phoneLogo {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        vertical-align: -2px;
      }
    }
    .middle {
      list-style: none;
      color: #fff;
      > li {
        float: left;
        margin-right: 10px;
        width: 86px;
        height: 44px;
        line-height: 47px;
        // border-bottom: 3px solid #3d93fd;
      }
      // .homePage {
      // width: 59px;
      // height: 19px;
      // font-size: 14px;
      // font-family: MicrosoftYaHei;
      // text-align: right;
      // color: #ffffff;
      // line-height: 19px;
      // }
      .middleTitle {
        a {
          color: #fff;
          font-family: MicrosoftYaHei;
        }
        > a {
          padding: 12px 15px;
        }
        text-align: center;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #fff;
        .middleTitleName:hover {
          color: #3d93fd;
          cursor: pointer;
        }
        .middleTitleList {
          width: 80px;
          display: none;
          background-color: #000;
          text-align: center;
          line-height: 30px;
        }
      }
      .middleTitleList .middleTitleHover:hover {
        cursor: pointer;
        // text-decoration: underline;
      }
      .middleTitleList li:hover {
        background-color: #3d93fd;
      }
      .middleTitle:hover {
        .middleTitleList {
          display: block;
        }
      }
    }
  }
}
// }
</style>
