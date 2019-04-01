<template>
  <div>
    <div :style="backgroundDiv" class="subbanner">
      <span>企业风采</span>
    </div>
    <div class="container">
      <div class="menu">
        <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item index="1">企业文化</el-menu-item>
          <el-menu-item index="2">企业荣誉</el-menu-item>
          <el-menu-item index="3">员工风采</el-menu-item>
        </el-menu>
      </div>
      <div class="companyContainer" v-if="active === '1'">
          <p>合作重于竞争 学习创造未来 考核重在发现</p>
          <p>荣誉源于责任 诚信实现价值 感恩当勤精进</p>
          <img :src="require('@/assets/images/logo.png')" width="500px" alt="">
      </div>
      <div class="companyContainer" v-else-if="active === '2'">
          <p>企业荣誉</p>
          <div>
            <img width="300px" :src="require('@/assets/images/honour1.png')" alt="">
            <img width="300px" :src="require('@/assets/images/honour2.png')" alt="">
          </div>
      </div>
      <div class="companyContainer" v-else>
          <p>最美平潭国庆游</p>
          <img :src="require('@/assets/images/pingtan.png')" width="800px" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/images/culture.jpg") + ")"
      },
      active: ''
    };
  },
  created() {
    this.$emit("active", this.$route.path);
  },
  methods: {
    handleSelect(index) {
        console.log(index)
        this.active = index
    }
  }
};
</script>

<style>
.companyContainer{
    display: inline-block;
    float: right;
    height: 400px;
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    font-family: cursive
}
</style>
