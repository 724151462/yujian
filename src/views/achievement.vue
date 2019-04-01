<template>
  <div>
    <div :style="backgroundDiv" class="subbanner">
        <span>公司业绩</span>
    </div>
    <div class="container">
      <div>
        <el-col
          :span="8"
          v-for="(item, index) in achieveItems"
          :key="index"
          :offset="2"
          style="padding: 20px 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.url" class="image" height="200px">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix"></div>
            </div>
          </el-card>
        </el-col>
        <!-- <img :src="require('@/assets/images/')" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("../assets/images/wjj.jpg") + ")"
      },
      achieveItems: [
        {
          name: "聚人哈弗",
          url: require("@/assets/images/achievement/jrhf.png")
        },
        {
          name: "腾汉科技公司厂房",
          url: require("@/assets/images/achievement/thkj.png")
        },
        {
          name: "石狮太极广场",
          url: require("@/assets/images/achievement/sstj.png")
        },
        {
          name: "德化城东嘉裕公园",
          url: require("@/assets/images/achievement/dhcdjy.png")
        },
        {
          name: "石狮蚶江文化公园",
          url: require("@/assets/images/achievement/ssgj.png")
        },
        {
          name: "泉港前黄镇后张村生活污水工程",
          url: require("@/assets/images/achievement/qhhz.png")
        }
      ]
    };
  },
  created() {
    this.$emit("active", this.$route.path);
  }
};
</script>

<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
