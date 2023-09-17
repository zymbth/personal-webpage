<script setup>
import { ref, onMounted, onBeforeUnmount, provide } from 'vue'
import FooterComp from '@/components/footer.vue'
import SkillsComp from './comp/skills.vue'
import CareerComp from './comp/career.vue'
import CoverComp from './comp/cover.vue'

const wrapInnerRef = ref()
const scrollTop = ref(0)
provide('scrollTop', scrollTop)

let coverEl
onMounted(() => {
  coverEl = document.querySelector('.cover')
  console.log('onMounted')
  wrapInnerRef.value.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  wrapInnerRef.value.removeEventListener('scroll', handleScroll)
})

function handleScroll(event) {
  scrollTop.value = coverEl.getBoundingClientRect()?.top
}
</script>
<template>
  <div class="no-scroll-bar">
    <div class="wrap-inner" ref="wrapInnerRef">
      <!-- 封面 -->
      <CoverComp class="cover" />
      <!-- skills -->
      <SkillsComp class="skills-block" />
      <!-- Career -->
      <CareerComp class="careers-block" />
      <FooterComp class="footer" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .skills-block,
  .careers-block {
    padding: 20px 20px 20px 0;
  }
}

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
  width: 100%;
  padding: 50px 80px;
  box-sizing: border-box;
}

.footer {
  margin-bottom: 16px;
}
</style>
