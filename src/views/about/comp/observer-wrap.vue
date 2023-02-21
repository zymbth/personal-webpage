<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  data: { type: Object, default: {} },
  options: { type: Object, default: {} },
})

const wrapperEl = ref(), flag = ref(false), wrapperHeight = ref(0)

onMounted(() => {
  wrapperHeight.value = 40 + wrapperEl.value.offsetHeight + 'px'
  
  let observer = new IntersectionObserver(
    entries => {
      // console.log('trigged', entries[0]?.isIntersecting, !flag.value && entries[0]?.isIntersecting)
      if(!flag.value && entries[0]?.isIntersecting) flag.value = true
    },
    {
      root: document,
      rootMargin: '0px 0px -2px 0px',
      threshold: 0
    }
  )
  observer.observe(wrapperEl.value)
})

</script>
<template>
  <div class="career-block">
    <div class="time-line" :style="{ height: flag ? wrapperHeight : 0 }"></div>
    <div
      class="career-block-inner"
      ref="wrapperEl"
      :style="flag ? {} : { transform: 'translateX(100%)', opacity: 0 }"
    >
      <span class="career-date">{{ data.time }}</span>
      <h4>{{ data.title }}</h4>
      <p>{{ data.posi }}</p>
      <p v-for="(cont, idx) in data.contents" :key="idx" class="career-contents">{{ cont }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.career-block {
  // border-left: 2px solid #ddd;
  padding: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 1px; 
    left: 1px;
    transform: translate(-50%,-50%);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #0ea4eb;
    z-index: 2;
  }
  .time-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    background-color: #ddd;
    transition: height .8s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 1;
  }
}
.career-block-inner {
  position: relative;
  padding: 1px 20px;
  box-shadow: 0 0 12px -2px rgba(0,0,0,.2);
  border-radius: 6px;
  transition-property: transform,opacity;
  transition-duration: .8s;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
  // transition: transform,height,opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);

  .career-date {
    position: absolute;
    left: 0;
    top: -7px;
    font-size: 12px;
    color: #666;
    transform: translateY(-100%);
  }
}
</style>