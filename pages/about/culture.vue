<template>
  <div class="culture">
    <CommonHeader />
    <AboutBread :name="breadName" />
    <div class="container">
      <div class="left">
        <AboutInfo />
      </div>
      <div class="right">
        <ul>
          <li v-for="item in cultureList" :key="item.id">
            <div class="title"><div class="lingxing"></div>{{ item.title }}</div>
            <p class="info">{{ item.info }}</p>
          </li>
        </ul>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadName: "企业文化",
      cultureList: [
        {
          id: 0,
          title: "成就客户",
          info: "为客户服务是海积存在的唯一理由，客户需求是海积发展的原动力。我们坚持以客户为中心，快速响应客户需求，持续为客户创造长期价值进而成就客户。为客户提供有效服务，是我们工作的方向和价值评价标尺，成就客户就是成就我们自己。",
        },
        {
          id: 1,
          title: "艰苦奋斗",
          info: "我们没有任何稀缺的资源可以依赖，唯有艰苦奋斗才能赢得客户的尊重与信赖。奋斗体现在为客户创造价值的一切细节中，以及在劳动的准备过程中为充实提高自己而做的努力。我们坚持以奋斗者为本，使奋斗者得到合理的回报。",
        },
        {
          id: 2,
          title: "至诚守信",
          info: "我们只有内心坦荡诚恳，才能言出必行，信守承诺。诚信是我们最重要的无形资产，海积坚持以诚信赢得客户。",
        },
        {
          id: 3,
          title: "自我批判",
          info: "自我批判的目的是不断进步，不断改进，而不是自我否定。只有坚持自我判断，才能倾听、扬弃和持续超越，才能跟容易尊重他人和与他人合作，实现客户、公司、团队和个人的共同发展。",
        },
        {
          id: 4,
          title: "开放进取",
          info: "为了更好地满足客户需求，我们积极进取、勇于开拓，坚持开放和创新。我们坚持客户需求导向，并围绕客户需求持续创新。",
        },
        {
          id: 5,
          title: "团结合作",
          info: "胜则举杯相庆，败则拼死相救。团队合作不仅是跨文化的群体协作精神，也是打破部门墙，提升流程效率的有力保障。",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.culture {
  .container {
    width: 1360px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    .left {
      float: left;
      width: 200px;
      height: 450px;
    }
    .right {
      float: right;
      width: 1100px;
      ul li {
        margin-bottom: 20px;
        height: 80px;
        border-bottom: 1px dashed #ccc;
        font-size: 15px;
        font-family: Microsoft YaHei, Microsoft YaHei-Bold;
        .title {
          font-weight: 700;
          margin-bottom: 10px;
          .lingxing{
            margin-right: 10px;
            display: inline-block;
            width: 9px;
            height: 9px;
            background: #3E93FC;
            transform: rotate(45deg);
          }
        }
        .info {
          text-indent: 30px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
