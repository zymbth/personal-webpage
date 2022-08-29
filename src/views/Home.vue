<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const pageIndex = ref('1')

onMounted(() => {
  new Typed('.intro-typed', {
    strings: ['前端开发工程师', 'Java开发工程师', '全栈开发工程师'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})

</script>
<template>
  <!-- menu -->
  <el-menu
    :default-active="pageIndex"
    mode="horizontal"
    :ellipsis="false"
    class="top-menu"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">关于</el-menu-item>
    <el-menu-item index="3">第2页</el-menu-item>
    <el-menu-item index="4">履历</el-menu-item>
    <el-menu-item index="5">笔记本</el-menu-item>
    <el-menu-item index="6">博文</el-menu-item>
  </el-menu>

  <!-- cover -->
  <div class="section-container section-cover">
		<div class="intro-content">
      <h4 class="intro-title">赵跃旻</h4>
      <span class="intro-typed"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.section-container {
  width: 100%;
  min-height: 400px;
  text-align: left;
  box-sizing: border-box;
}
.section-cover {
  color: #333;
  text-align: center;
  font-size: 50px;
  height: 100vh;
  position: relative;
  background: url(https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/bg3.jpg) no-repeat;
  background-color: transparent;
  background-position: 50%;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .intro-content {
    
  }
}
</style>