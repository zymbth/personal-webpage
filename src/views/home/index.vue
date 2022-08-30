<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import Cover from './cover.vue'
import About from './about.vue'
import Career from './career.vue'
import Footer from '../footer.vue'
  
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
  <div class="container">
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
  
    <el-scrollbar>
      <Cover />
      <About />
      <Career />
    
      <Footer />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
}
.top-menu {
  width: 100%;
  text-align: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.section-container {
  width: 100%;
  min-height: 400px;
  text-align: left;
  box-sizing: border-box;
}
</style>