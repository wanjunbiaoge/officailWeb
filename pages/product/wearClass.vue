<template>
  <div class="wearClass">
    <CommonHeader />
    <ProductBread :name="breadName" />
    <div class="container">
      <div class="right">
        <ul>
          <li class="rightWearImgBox" v-for="item in wearList" :key="item.id">
            <img :src="$imgUrl + item.fileName" alt="" />
            <p class="info">{{ item.title }}</p>
          </li>
        </ul>
        <CommonPagenation :pagenation="pagenation" :getData="getData" />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  watchQuery: true,
  watchQuery: ["type"],
  asyncData({ query }) {
    return {
      type: query.type,
      breadName: query.name,
    };
  },
  data() {
    return {
      wearList: [],
      pagenation: {
        pageTotal: 0,
        pageNumber: 1,
      },
    };
  },
  watch: {
    type(value) {
      this.$router.push({
        path: "/product/wearClass",
        query: { type: value },
      });
      this.getData();
    },
    immediate: true,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/product/list/",
        data: { type: this.type },
      });
      this.wearList = res.data;
      this.wearList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
      this.pagenation.pageTotal = res.total;
      this.pagenation.pageNumber = res.pages;
    },
  },
};
</script>
<style lang="less" scoped>
.wearClass {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;

    .right {
      float: right;
      width: 1340px;
      ul {
        width: 1340px;
        overflow: hidden;
        .rightWearImgBox {
          float: left;
          margin-right: 20px;
          margin-bottom: 30px;
          width: 300px;
          height: 230px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
          img {
            width: 300px;
            height: 200px;
          }
          .info {
            margin-top: 20px;
            font-size: 14px;
            font-weight: 700;
            text-align: center;
          }
        }
        .rightWearImgBox:nth-child(4) {
          margin-right: 0 !important;
        }
        .rightWearImgBox:nth-child(8) {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
