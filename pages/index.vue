<template>
  <div class="wrap">
    <IndexHeader />
    <IndexSlideShow />
    <IndexAbout />
    <IndexApplication />
    <IndexAboutSystem />
    <IndexProductShow />
    <IndexSolution />
    <IndexSuccessCase />
    <!-- <div class="wei"></div> -->
    <CommonFooterindex />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  .wei {
    width: 100%;
    height: 70px;
    margin-top: 70px;
  }
}

</style>
