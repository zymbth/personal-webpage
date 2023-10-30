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

let coverEl // , isScrolling = false
onMounted(() => {
  coverEl = document.querySelector('.cover')
  wrapInnerRef.value.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  wrapInnerRef.value.removeEventListener('scroll', handleScroll)
})

function handleScroll(event) {
  // console.log('coverEl.getBoundingClientRect()?.top', coverEl.getBoundingClientRect()?.top)
  // console.log('window.scrollY', window.scrollY)
  // console.log('event.target.scrollTop', event.target.scrollTop)
  scrollTop.value = event.target.scrollTop // coverEl.getBoundingClientRect()?.top
}
/**
 * 打包后滚动出现阻塞感
 * 可能是因为在处理滚动事件时存在一些性能问题。在上面的代码中：
 * handleScroll 函数在每次滚动事件发生时都会调用 coverEl.getBoundingClientRect()?.top 来获取 coverEl 元素相对于视口的位置。这可能会导致频繁的 DOM 计算和重绘，从而影响滚动的流畅性。
 * 为了改善性能，你可以尝试使用 requestAnimationFrame 方法来延迟处理滚动事件。这样可以将多个滚动事件合并为一个，减少不必要的计算和重绘操作。
 */
// function handleScroll(event) {
//   if (!isScrolling) {
//     isScrolling = true
//     requestAnimationFrame(() => {
//       scrollTop.value = coverEl.getBoundingClientRect()?.top
//       isScrolling = false
//     })
//   }
// }
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
