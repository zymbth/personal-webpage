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
    </div>
  </div>
</template>
<style lang="scss" scoped>
.career-block {
  position: relative;
  padding: 20px 20px 40px;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    transform: translate(-50%, -50%);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 2px solid var(--theme-color);
    background-color: var(--theme-color);
    transition: background-color 0.3s ease-in-out;
    z-index: 2;
  }
  &:hover::before {
    background-color: var(--tg-bg-color);
  }
  &:hover .time-line-circle {
    background-color: var(--tg-bg-color);
  }
  .time-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    background-color: var(--theme-color-2);
    transition: height 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 1;
  }
}
.career-block-inner {
  position: relative;
  padding: 1px 20px;
  box-shadow: 0 0 12px -2px var(--shadow-color);
  border-radius: 6px;
  background-color: var(--tg-bg-color-2);
  transition-property: transform, opacity;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);

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
      background-color: var(--tg-bg-color-2);
    }
  }
  .career-date {
    position: absolute;
    left: 0;
    top: -7px;
    font-size: 12px;
    color: var(--tg-txt-color-1);
    transform: translateY(-100%);
  }
}
</style>
