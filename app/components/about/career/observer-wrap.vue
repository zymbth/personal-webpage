<script setup>
const props = defineProps({
  data: { type: Object, default: {} },
  options: { type: Object, default: {} },
})

const wrapperRef = ref(),
  flag = ref(false)

onMounted(() => {

  let observer = new IntersectionObserver(
    entries => {
      if (!flag.value && entries[0]?.isIntersecting) {
        flag.value = true
        observer.unobserve(wrapperRef.value)
      }
    },
    {
      root: document,
      rootMargin: '0px 0px -2px 0px',
      threshold: 0,
    }
  )
  observer.observe(wrapperRef.value)
})
</script>
<template>
  <div class="career-block">
    <div class="time-line" :style="{ height: flag ? '100%' : 0 }"></div>
    <div
      class="career-block-inner"
      ref="wrapperRef"
      :style="flag ? {} : { transform: 'translateX(100%)', opacity: 0 }">
      <span class="career-date">{{ data.time }}</span>
      <div class="career-title">
        <img :src="data.logo" alt="" class="career-logo" />
        <p>{{ data.title }}</p>
      </div>
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
    transform: translate(-50%, -50%);
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
    transition: height 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 1;
  }
}
.career-block-inner {
  position: relative;
  padding: 1px 20px;
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition-property: transform, opacity;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
  // transition: transform,height,opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);

  .career-title {
    display: flex;
    align-items: center;
    > p {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.5;
    }
    > img {
      height: 36px;
      margin-right: 6px;
    }
  }
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
