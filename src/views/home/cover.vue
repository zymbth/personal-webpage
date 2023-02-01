<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

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
  <div class="section-container">
    <div class="intro-content">
      <h4 class="intro-title">赵跃旻</h4>
      <span class="intro-typed"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-container {
  color: #333;
  text-align: center;
  font-size: 50px;
  height: calc(100vh - 60px);
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
    text-align: center;
    color: #fff;
  }
}
</style>