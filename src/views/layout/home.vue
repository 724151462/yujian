<template>
  <el-container>
    <el-header>
      <div class="header">
        <img :src="require('@/assets/images/logo.png')" :width="100" alt>
        <el-menu
          style="float: right; font-size: 16px; font-weight: bold"
          background-color="#409EFF"
          :default-active="activeIndex"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item
            v-for="(menu, index) in menuList"
            :key="index"
            :index="menu.path"
          >{{menu.name}}</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view class="content" @active="routeActive"></router-view>
    </el-main>
    <el-footer style="height: 100px; display:flex; align-items: center; justify-content: space-around" >
      <div class="concat-item">
        <span>企业名称：泉州市禹建建筑工程有限公司</span><br>
        <span>税务登记号：913505053106774631</span>
      </div>
      <div class="concat-item">
        <span>企业地址：福建省泉州市泉港区涂岭镇松园村6组1号</span><br>
        <span>经营地址：福建省泉州市惠安县新景华庭2号楼417室</span>
      </div>
      <div class="concat-item">
        <span>电话：0595-87817860</span><br>
        <span>手机：13960338860（李）</span>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "",
      menuList: [
        { path: "/index", name: "首页" },
        { path: "/achievement", name: "公司业绩" },
        { path: "/companystyle", name: "企业风采" },
        { path: "/aboutus", name: "关于我们" }
      ]
    };
  },
  mounted() {
    console.log(this.$route);
    this.activeIndex = this.$route.path;
  },
  methods: {
    routeActive(val) {
      this.activeIndex = val;
    }
  }
};
</script>

<style>
body,
html {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header,
.el-footer {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100% - 120px);
}
.header {
  width: 80%;
  margin: 0 auto;
}
.header > img {
  float: left;
}
.concat-item{
  color: #fff;
  text-align: start;
  line-height: 2
}
</style>
