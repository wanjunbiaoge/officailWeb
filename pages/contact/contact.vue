<template>
  <div class="contact">
    <CommonHeader />
    <ContactBread :name="breadName" />
    <div class="container">
      <div class="left">
        <ContactInfo />
      </div>
      <div class="right">
        <div id="map"></div>
        <div class="line"></div>
        <div class="contactBox">
          <div class="contactUs">
            <div class="title">联系我们   /   Contact Us</div>
            <div class="underline"></div>
            <p class="tel">联系电话：{{ contactInfo.tel }}</p>
            <p class="people">联系人：{{ contactInfo.people }}</p>
            <p class="mail">邮箱：{{ contactInfo.mail }}</p>
            <p class="address">地址：{{ contactInfo.address }}</p>
          </div>
          <div class="message">
            <p>
              <label for=""></label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
export default {
  head() {
    //引入百度地图
    return {
      script: [
        {
          src: "https://api.map.baidu.com/getscript?v=1.0&type=webgl&ak=hIW0tTxxfLQkTEuvSsuPTEtqEPAtXroh",
        },
      ],
    };
  },
  data() {
    return {
      breadName: "联系我们",
      contactInfo: {
        tel: "028-86036000",
        people: "袁先生",
        mail: "342924062@qq.com",
        address: "成都府城大道399号天府新谷10栋1501",
      },
    };
  },
  methods: {
    async getData() {
      console.log("getData");
    },
    initMap() {
      var map = new BMapGL.Map("map"); // 创建地图实例
      var point = new BMapGL.Point(104.063087, 30.592156); // 创建点坐标
      var marker = new BMapGL.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 16); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style lang="less" scoped>
.contact {
  .container {
    width: 1360px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .left {
      float: left;
      width: 200px;
      height: 600px;
    }
    .right {
      float: right;
      width: 1100px;
      height: 600px;
      border: 1px solid red;
      #map {
        width: 99%;
        height: 300px;
        border: 1px solid #aaa;
      }
      .line {
        width: 100%;
        margin: 20px 0;
        border: 1px solid #e6e6e6;
      }
      .contactBox {
        overflow: hidden;
        .contactUs {
          width: 520px;
          height: 230px;
          float: left;
          padding-left: 20px;
          border-right: 1px dashed #aaa;
          .title {
            font-size: 20px;
            font-weight: 700;
          }
          .underline {
            width: 80px;
            border: 1px solid gray;
            margin: 10px 0;
          }
          p {
            font-size: 16px;
            line-height: 25px;
            font-weight: bold;
            color: #333;
          }
        }
        .message{
          width: 520px;
          height: 230px;
          float: left;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
