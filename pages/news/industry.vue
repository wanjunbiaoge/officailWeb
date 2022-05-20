<template>
  <div class="company">
    <CommonHeader />
    <NewsBread :name="breadName" />
    <div class="container">
      <div class="news">
        <ul>
          <li class="newsImgBox" v-for="item in newsList" :key="item.id">
            <img :src="$imgUrl + item.fileName" alt="" />
            <p class="info">{{ item.title }}</p>
            <nuxt-link
              class="toDetail"
              :to="{ path: '/news/industryNewsDetail', query: { id: item.id } }"
            ></nuxt-link>
            <div class="timeBox">
              <div class="updateTime">
                <i class="el-icon-time" style="marginright: 5px"></i
                >{{ item.updateTime.split(" ")[0] }}
              </div>
              <div class="viewCounts">
                <i class="el-icon-view" style="marginright: 5px"></i
                >{{ item.viewCounts }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <CommonPagenation :pagenation="pagenation" :getData="getData" />
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  data() {
    return {
      breadName: "行业要闻",
      newsList: [],
      pagenation: {
        pageTotal: 10,
        pageNumber: 1,
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/news/list/",
        data: { type: "NEWS_INDUSTRY" },
      });
      this.newsList = res.data;
      this.newsList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
      this.pagenation.pageTotal = res.total;
      this.pagenation.pageNumber = res.pages;
    },
  },
};
</script>
<style lang="less" scoped>
.company {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .news {
      width: 1340px;
      overflow: hidden;
      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .newsImgBox {
          // float: left;
          margin-right: 20px;
          margin-bottom: 20px;
          width: 300px;
          height: 270px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0px 6px 11.52px 0.48px rgba(0, 0, 0, 0.13);
          img {
            width: 300px;
            height: 200px;
          }
          .info {
            height: 36px;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
          }
          .toDetail {
            display: inline-block;
            width: 300px;
            height: 250px;
            margin-top: -240px;
          }
        }
        .timeBox {
          display: flex;
          justify-content: space-between;
        }
        .newsImgBox:nth-child(4n) {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
