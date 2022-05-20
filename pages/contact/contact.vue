<template>
  <div class="contact">
    <CommonHeader />
    <ContactBread :name="breadName" />
    <div class="container">
      <div class="content">
        <div id="map"></div>
        <div class="line"></div>
        <div class="contactBox">
          <div class="contactUs">
            <div class="title">联系我们 / Contact Us</div>
            <div class="underline"></div>
            <div v-html="contactDetail"></div>
          </div>
          <div class="message">
            <p>
              <label for="messageTitle">标题</label
              ><input type="text" v-model="form.title" id="messageTitle" />
            </p>
            <p>
              <label for="messageUser">联系人</label
              ><input type="text" v-model="form.contactMen" id="messageUser" />
            </p>
            <p>
              <label for="messageTel">联系电话</label
              ><input type="text" v-model="form.contactPhone" id="messageTel" />
            </p>
            <div>
              <label for="messageInfo">意向描述</label
              ><textarea id="messageInfo" v-model="form.messageDetail" />
            </div>
            <p>
              <label for="messageCode">验证码</label
              ><input type="text" v-model="form.authCode" id="messageCode" />
              <img
                :src="codeSrc"
                alt=""
                @click="getCode"
                style="cursor: pointer"
              />
            </p>
            <button type="submit" @click="submit">提交</button>
          </div>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import BASE_URL from "@/utils/env";
import fetchData from "@/utils/fetchData";
import axios from "axios";
export default {
  head() {
    //引入百度地图
    return {
      script: [
        {
          src: "https://api.map.baidu.com/api?v=1.0&type=webgl&ak=hIW0tTxxfLQkTEuvSsuPTEtqEPAtXroh",
        },
      ],
    };
  },
  data() {
    return {
      breadName: "",
      contactDetail: "",
      form: {
        title: "",
        contactMen: "",
        contactPhone: "",
        messageDetail: "",
        authCode: "",
        authentication: "",
      },
      // codeSrc: BASE_URL + "/message/auth_code",
      codeSrc: "",
    };
  },
  created() {
    this.getData();
    this.getCode();
  },
  methods: {
    async getCode() {
      let res = await fetchData({
        url: "/message/auth_code",
        method: "get",
      });
      if (!res) return;
      this.codeSrc = "data:image/png;base64," + res.data.authCode;
      this.form.authentication = res.data.authentication;
    },
    async getData() {
      let res = await fetchData({
        url: "/contact_us/list",
      });
      if (!res) return;
      this.contactDetail = res.data.contactDetail;
    },
    initMap() {
      var map = new BMapGL.Map("map"); // 创建地图实例
      var point = new BMapGL.Point(104.063087, 30.592156); // 创建点坐标
      var marker = new BMapGL.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 16); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    },
    async submit() {
      let res = await fetchData({
        url: "/message/insert",
        data: this.form,
      });
      if (!res) return;
      this.$message({
        message: "提交成功",
        type: "success",
      });
      for (let i in this.form) {
        this.form[i] = "";
      }
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
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;

    .content {
      width: 1300px;
      height: 600px;
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
          width: 620px;
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
        }
        .message {
          width: 550px;
          height: 250px;
          float: left;
          padding-left: 50px;
          div {
            height: 50px;
            margin-top: 15px;
            textarea {
              margin-left: 22px;
              width: 200px;
              border: 1px solid #ccc;
              outline: none;
              resize: none;
            }
          }
          p {
            height: 30px;
            line-height: 30px;

            label {
              display: inline-block;
              width: 70px;
              font-size: 13px;
            }
            input {
              border: 1px solid #ccc;
              line-height: 20px;
              width: 200px;
            }
          }
          button {
            width: 100px;
            border: 1px solid #ccc;
            padding: 5px;
            margin-top: 20px;
            margin-left: 70px;
            cursor: pointer;
          }
        }
      }
    }
    #messageCode {
      width: 100px;
    }
  }
}
</style>
