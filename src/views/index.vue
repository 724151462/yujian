<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt width="90%" height="400px">
      </el-carousel-item>
    </el-carousel>

    <div class="container">
      <div class="text-container">
        <h3>
          <b class="sx">|</b>公司介绍
        </h3>
        <p>泉州市禹建建筑工程有限公司是一家从事房屋建筑工程总承包、市政公用工程总承包等建筑民营企业。公司实行股份制，现在注册资本金5018万元，有职称技术人员十多人。</p>
      </div>
      <div class="text-container">
        <h3>
          <b class="sx">|</b>公司资质
        </h3>
        <p>
          建筑装修装饰工程专业承包贰级
          建筑工程施工总承包叁级
          公路工程施工总承包叁级
          水利水电工程施工总承包叁级
          市政公用工程施工总承包叁级
          地基基础工程专业承包叁级
          起重设备安装工程专业承包叁级
          钢结构工程专业承包叁级
          建筑机电安装工程专业承包叁级
          古建筑工程专业承包叁级
          城市及道路照明工程专业承包叁级
          环保工程专业承包叁级
          施工劳务不分等级
          模板脚手架专业承包不分等级
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/background.png"),
        require("@/assets/images/background.png"),
        require("@/assets/images/background.png")
      ]
    };
  },
  created() {
    this.$emit("active", this.$route.path);
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style>
.el-carousel__container {
  height: 400px;
}
.el-main {
  padding: 0 3%;
}
.text-container {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 20px auto;
  text-align: start;
}
.sx {
  font-weight: bold;
}
</style>
