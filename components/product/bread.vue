<template>
  <div class="bread">
    <img src="/introduction/nowHome.png" alt="" />
    <span class="nowSite">
      <span>当前位置 ：</span>
    </span>
    <nuxt-link to="/product/wearClass">产品展示</nuxt-link>
    <i>></i>
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>
<style lang="less" scoped>
.bread {
  width: 1340px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  a {
    color: #000;
    font-size: 13px;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    vertical-align: 0px;
  }
  .nowSite {
    line-height: 32px;
  }
  span {
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
