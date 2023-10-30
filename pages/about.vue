<script setup>
useHead({
  title: 'About Me',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const wrapInnerRef = ref()
const scrollTop = ref(0)
provide('scrollTop', scrollTop)

onMounted(() => {
  wrapInnerRef.value.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  wrapInnerRef.value.removeEventListener('scroll', handleScroll)
})

function handleScroll(event) {
  scrollTop.value = event.target.scrollTop
}
</script>
<template>
  <div class="no-scroll-bar">
    <div class="wrap-inner" ref="wrapInnerRef">
      <!-- 封面 -->
      <AboutCover class="cover" />
      <!-- skills -->
      <AboutSkills class="skills-block" />
      <!-- Career -->
      <AboutCareer class="careers-block" />
      <Copyright class="footer" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.no-scroll-bar {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .wrap-inner {
    width: calc(100vw + 17px);
    height: 100%;
    overflow-y: scroll;
  }
}

.skills-block,
.careers-block {
  --width-limit: 1000px;
  width: 100%;
  // padding: 50px 80px;
  padding: 50px max(80px,calc(50% - var(--width-limit)/2));
  box-sizing: border-box;
}

.footer {
  margin-bottom: 16px;
}

@media screen and (max-width: 750px) {
  .skills-block,
  .careers-block {
    padding: 20px;
  }
}
</style>
