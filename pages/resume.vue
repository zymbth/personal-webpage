<script setup>
useHead({
  title: 'Resume | 前端开发工程师_赵跃旻_北京科技大学_13148787915',
  meta: [
    { name: 'keywords', content: '赵跃旻,简历,Yuemin Zhao,ymzhao,Resume' },
    { name: 'description', content: 'Resume of Yuemin Zhao' }
  ],
})
// http://ymzhao.work/files/前端开发工程师_赵跃旻_北京科技大学_13148787915.pdf
</script>
<template>
  <div class="resume">
    <iframe
      name="front-end-resume"
      src="/resume.pdf"
      width="100%"></iframe>
  </div>
</template>
<style lang="scss" scoped>
.resume {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  iframe {
    height: 100vh;
    min-width: 800px;
    min-height: 500px;
  }
}
</style>
