<template>
  <div class="all">
  <!-- 网页顶部 -->
  <el-container class="top">
    <el-header>
      <i>logo</i>
      <!-- 输入框 -->
      <el-input
        placeholder="请输入内容"
        v-model="input"
        style="width: 530px"
        suffix-icon="el-icon-search"
        >
      </el-input>
      <!-- 导航栏 -->
      <div class="line">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo" 
          mode="horizontal"           
          @select="handleSelect"
          text-color="#A9A9A9"          
          active-text-color='#87CEEB'         
          >
          <el-menu-item index="1" class="el-icon-s-home"></el-menu-item>
          <el-menu-item index="2" class="el-icon-s-custom"></el-menu-item>
          <el-menu-item index="3" class="el-icon-video-camera"></el-menu-item>
          <el-menu-item index="4" class="el-icon-s-opportunity"></el-menu-item>
          <el-menu-item index="5" class="el-icon-menu"></el-menu-item>         
        </el-menu>
      </div>
    </el-header>
    <el-divider class="el-top-divider"></el-divider>

    <!-- 网页内容 -->
    <el-container class="main">
      <!-- 左侧导航 -->
      <el-aside class="asidenav" width="350px">
        <div class="asidetop"></div>
        <el-row class="tac"> 
        <el-col :span="24" >
          <el-menu
            :default-active="2"
            class="el-menu-vertical-demo"
            border-right="0"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">导航一</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">导航五</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        </el-row>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>  
  </div>
</template>

<script>
    
 export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  height: 100%;
}

.top{
  width: 100%;
  height: 100%;

}
.el-input {
  margin-left: 140px;
}
.el-header {

  display: flex;
  line-height: 58px;
  height: 60px;
}

.line {
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: flex-start;
}
.line .el-menu-item{
    font-size: 25px;
    width: 120px;
    display: flex;
    justify-content:center
}
.el-menu-demo {
  width: 600px;
  display: flex;
  margin-left: 40px;
  justify-content: space-between;
}

.main {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #ffffff;
  text-align: center;
  line-height: 900px;

}
.asidenav{
  width:"100%";
  
}  
.asidetop {
  height: 30px;
}
.el-menu-vertical-demo{
  border-right:0!important;
  
}
.el-top-divider {
  margin-top: 1px;
}

.el-main {
  background-color: #ffffff;
  text-align: center;
  line-height: 900px;
  height: 100%;
}
</style>
