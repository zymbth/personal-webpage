<script setup>
</script>
<template>
  <div class="resume">
    <div class="resume-page">Resume</div>
    <iframe src="/resume" width="800" height="1200"></iframe>
  </div>
</template>
<style lang="scss" scoped>
.resume {
  font-size: 9pt;
  line-height: 18pt;
  letter-spacing: 1px;
  width: 210mm;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff !important;
  color: #000 !important;
}
.resume-page {
  box-shadow: 0 0 8px 4px #ccc;
  padding: 50px; /* 100px 50px 100px; */
  margin-top: 20px;
  page-break-after: always;
  position: relative;
  min-height: 294mm;
  box-sizing: border-box;
}
</style>