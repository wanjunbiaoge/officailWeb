<template>
  <div class="successCase">
    <div class="title">成功案例</div>
    <div class="line"></div>
    <div class="productBox">
      <ul>
        <li v-for="item in successList" :key="item.id">
          <img :src="$imgUrl + item.fileName" alt="" />
          <nuxt-link
            :to="{ path: '/successCase/details/', query: { id: item.id } }"
            class="successCaseLink"
          ></nuxt-link>
          <div class="info">
            <div class="infoTitle">{{ item.title }}</div>
            <div class="infoSubtitle">{{ item.subtitle }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="more">
      <nuxt-link to="/successCase/successCase">更多</nuxt-link>
    </div>
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";

export default {
  name: "aboutSystem",
  data() {
    return {
      successList: [],
    };
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/success_case/list",
        data: {},
      });
      if (!res) return;
      this.successList = res.data;
      this.successList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="less" scoped>
.successCase {
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
    width: 1340px;
    height: 665px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    ul li {
      list-style: none;
      // float: left;
      position: relative;
      margin-bottom: 20px;
      img {
        width: 430px;
        height: 320px;
      }
      .successCaseLink {
        position: absolute;
        display: inline-block;
        width: 430px;
        height: 320px;
        left: 0;
        top: 0;
      }
      .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 84px;
        background: rgba(0, 0, 0, 0.4);
        color: #ffffff;
        .infoTitle {
          height: 24px;
          font-size: 18px;
          font-family: MicrosoftYaHei, MicrosoftYaHei-Bold;
          font-weight: 700;
          text-align: left;
          line-height: 24px;
          margin-top: 15px;
          margin-left: 20px;
        }
        .infoSubtitle {
          margin-top: 6px;
          margin-left: 20px;
          font-size: 14px;
          height: 19px;
          line-height: 19px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
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
