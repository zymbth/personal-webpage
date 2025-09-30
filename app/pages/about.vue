<script setup>
useHead({
  title: 'About Me',
  meta: [
    { name: 'keywords', content: '赵跃旻,网站,个人信息,简历,履历,工作经验,学历,Yuemin Zhao,ymzhao' },
    { name: 'description', content: '赵跃旻的个人网站，包括我的工作经验、教育背景等' }
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
      <AboutSkills class="common-block" />
      <!-- Career -->
      <AboutCareer class="common-block" />
      <!-- <AboutPortfolio class="common-block" /> -->
      <Copyright class="footer" />
    </div>
  </div>
</template>
<style lang="scss">
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

.common-block {
  --width-limit: 1000px;
  padding: 50px max(80px, calc(50% - var(--width-limit) / 2));
}

.footer {
  margin-bottom: 16px;
}

.page-title {
  margin: 1rem auto 2rem;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5em;
  text-transform: uppercase;
  &:has(+ .page-desc) {
    margin-bottom: 0;
  }
}
.page-desc {
  margin: 0 auto 2rem;
  text-align: center;
  color: var(--tg-txt-color-1);
}

@media screen and (max-width: 750px) {
  .common-block {
    padding: 20px;
  }
}
</style>
