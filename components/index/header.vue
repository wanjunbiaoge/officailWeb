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
              <nuxt-link to="/about/introduction" class="aboutHover middleTitleHover">公司简介</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/culture" class="aboutHover middleTitleHover">企业文化</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/qualifications" class="aboutHover middleTitleHover">公司资质</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="product middleTitle">
          <div class="productName middleTitleName">
            产品展示<i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="productList middleTitleList">
            <li>
              <nuxt-link to="/product/wearClass" class="productHover middleTitleHover">穿戴类</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/funcClass" class="productHover middleTitleHover">功能类</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/vehicleClass" class="productHover middleTitleHover">车载终端</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/holdClass" class="productHover middleTitleHover">手持便携</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/beidouClass" class="productHover middleTitleHover">北斗短报文</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/measureClass" class="productHover middleTitleHover">高精度测量</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/product/applicationClass" class="productHover middleTitleHover">应用案例</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="middleTitle">
          <nuxt-link to="/application/application" class="middleTitleName">解决方案</nuxt-link>
          <!-- <div class="middleTitleName">解决方案</div> -->
          <!-- <ul class="middleTitleList">
            <li>
              <nuxt-link to="/about/about" class="middleTitleHover"
                >警务</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/" class="middleTitleHover">非监禁系统</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="middleTitleHover">多媒体</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="middleTitleHover"
                >公务用车管理</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/" class="middleTitleHover">数据管理</nuxt-link>
            </li>
          </ul> -->
        </li>
        <li class="middleTitle">
          <div class="middleTitleName">
            新闻资讯<i class="el-icon-caret-bottom"></i>
          </div>
          <ul class="middleTitleList">
            <li>
              <nuxt-link to="/news/company" class="middleTitleHover">公司要闻</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/news/industry" class="middleTitleHover">行业新闻</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="middleTitle">
          <nuxt-link to="/contact/contact" class="middleTitleName">联系方式</nuxt-link>
        </li>
        <li class="middleTitle">
          <nuxt-link to="/recruit/recruit" class="middleTitleName">诚聘</nuxt-link>
        </li>
      </ul>
      <img src="/index/Web1x/bdtel.png" alt="tel" class="tel" />
    </div>
  </div>
</template>

<script>
export default {};
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
    width: 1360px;
    margin: 0 auto;
    .logo {
      float: left;
      margin-top: 6px;
      margin-right: 50px;
    }
    .tel {
      float: right;
      margin-top: 6px;
    }
    .middle {
      list-style: none;
      color: #fff;
      > li {
        float: left;
        margin-right: 40px;

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
          padding: 12px 22px;
        }
        width: 100px;
        text-align: center;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #fff;
        .middleTitleName:hover {
          color: #3d93fd;
          cursor: pointer;
        }
        .middleTitleList {
          display: none;
          background-color: #000;
          text-align: center;
          line-height: 30px;
        }
      }
      .middleTitleList .middleTitleHover:hover {
        cursor: pointer;
        text-decoration: underline;
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
