<template>
  <div class="successCase">
    <CommonHeader />
    <SuccessCaseBread :name="breadName" />
    <div class="container">
      <div class="right">
        <div class="rightApplication">
          <ul>
            <li class="appList" v-for="item in solutionList" :key="item.id">
              <div class="appListImgbox">
                <img :src="$imgUrl+item.fileName" alt="" />
              </div>
              <div class="infoBox">
                <nuxt-link class="title" :to="{path:'/successCase/details',query:{id:item.id}}">{{
                  item.title
                }}</nuxt-link>
                <p class="info">{{ item.subtitle }}</p>
                <div class="timeBox">
                  <span
                    ><i class="el-icon-time"></i> {{ item.time }}</span
                  >
                  <span><i class="el-icon-view"></i> {{ item.viewCounts }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <CommonPagenation :pagenation="pagenation" :getData="getData" />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
import fetchData from "@/utils/fetchData";
export default {
  data() {
    return {
      breadName: "",
      solutionList: [],
      pagenation: {
        pageTotal: 0,
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
        url: "/success_case/list/",
        data: {},
      });
      this.solutionList = res.data;
      this.solutionList.map((item) => {
        item.fileName = "/attachment/get_file/" + item.fileName;
      });
      this.pagenation.pageTotal = res.total;
      this.pagenation.pageNumber = res.pages;
    },
  },
};
</script>
<style lang="less" scoped>
.successCase {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .right {
      width: 1340px;
      .rightApplication {
        overflow: hidden;
        .appList {
          float: left;
          width: 600px;
          height: 200px;
          margin-right: 50px;
          margin-bottom: 30px;
          .appListImgbox {
            float: left;
            width: 250px;
            height: 200px;
            img {
              width: 100%;
            }
          }
          .infoBox {
            float: left;
            padding-left: 30px;
            width: 280px;
            height: 200px;
            .title {
              font-size: 18px;
              font-family: Microsoft YaHei, Microsoft YaHei-Bold;
              font-weight: 700;
              color: #333333;
            }
            .info {
              margin-top: 20px;
              font-size: 14px;
              color: #333333;
              height: 100px;
              line-height: 16px;
              display: -webkit-box;
              overflow: hidden;
              // text-indent: 28px;
            }
            .timeBox {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
