<template>
  <div>
    <div :style="backgroundDiv" class="subbanner">
      <span>关于我们</span>
    </div>
    <div class="container">
      <div class="menu">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item index="1">公司介绍</el-menu-item>
          <el-menu-item index="2">公司资质</el-menu-item>
        </el-menu>
      </div>
      <div class="aboutusContainer" v-if="active === '1'">
        <p>泉州市禹建建筑工程有限公司是一家从事房屋建筑工程总承包、市政公用工程总承包等建筑民营企业。公司实行股份制，现在注册资本金5018万元，有职称技术人员十多人。</p>
        <p>面对日益激烈的市场竞争，公司坚持以人为本，尊重知识，尊重人才，积极创建企业精神文明和企业文化建设，用建筑企业的职业道德规范全体员工的思想行为。公司重视对人才的培养和再教育。建立岗位和工资制度，实行聘任制，极大的调动全体员工的积极性和创造力。面对广阔的建筑市场，公司坚持以市场为导向，强化企业承包管理有效资源的配置，以“质量第一、诚信为本、严格施工、规范管理”为宗旨，建立了标准化、规范化、制度化的科学管理制度。公司立足企业新起点，提出发展路子，在党中央的改革开放方针指引下，强化人与物力资源共勉共强，坚定事业信心，在优化小康社会创造社会风貌，美化人们生活，勇于攀登技术高峰，为我国的建筑业繁荣做出自己应有的贡献</p>
        <div>
            <img :src="require('@/assets/images/gaikuang.png')" width="50%" alt="" style="float:left">
            <img :src="require('@/assets/images/zuzhi.png')" width="50%" alt="" style="float:right">
        </div>
      </div>
      <div class="aboutusContainer" v-else>
        <div style="float:left; text-align:start; margin-top: 20px">
          施工总承包资质：<br>
          公路工程施工总承包叁级<br>
          水利水电工程施工总承包叁级<br>
          建筑工程施工总承包叁级<br>
          市政公用工程施工总承包叁级<br>
          <br>
          施工专业承包资质：<br>
          建筑装修装饰工程专业承包贰级<br>
          地基基础工程专业承包叁级<br>
          起重设备安装工程专业承包叁级<br>
          钢结构工程专业承包叁级<br>
          建筑机电安装工程专业承包叁级<br>
          古建筑工程专业承包叁级<br>
          城市及道路照明工程专业承包叁级<br>
          公路路面工程专业承包叁级<br>
          公路路基工程专业承包叁级<br>
          环保工程专业承包叁级<br>
          施工劳务不分等级<br>
          模板脚手架专业承包不分等级<br>
        </div>
        <div style="float: right; margin-top: 20px">
            <img :src="require('@/assets/images/zizhi.png')" width="400px" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/images/about.jpg") + ")"
      },
      active: "1"
    };
  },
  created() {
    this.$emit("active", this.$route.path);
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      this.active = index;
    }
  }
};
</script>

<style>
.aboutusContainer {
  display: inline-block;
  float: right;
  height: 400px;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
}
.aboutusContainer > p {
  text-align: start;
  text-indent: 2em;
}
</style>
