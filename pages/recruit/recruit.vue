<template>
  <div class="recruit">
    <CommonHeader />
    <RecruitBread :name="breadName" />
    <div class="container">
      <div class="content" v-html="employmentDetail"></div>
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
      employmentDetail: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await fetchData({
        url: "/employment/list/",
        data: {},
      });
      this.employmentDetail = res.data[0].employmentDetail;
    },
  },
};
</script>
<style lang="less" scoped>
.recruit {
  .container {
    width: 1340px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .content {
    }
  }
}
</style>
