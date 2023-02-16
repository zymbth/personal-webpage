<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  root: {type: String, default: '#app' },
  options: { type: Object, default: {} },
  invisibleStyle: { type: Object, default: {} }
})
console.log(props.invisibleStyle)
const wrapperEl = ref(), flag = ref(false)

onMounted(() => {
  let observer = new IntersectionObserver(
    entries => {
      console.log('trigged', entries[0]?.isIntersecting, !flag.value && entries[0]?.isIntersecting)
      if(!flag.value && entries[0]?.isIntersecting) flag.value = true
    },
    {
      root: document.querySelector(props.root),
      rootMargin: props.options.rootMargin ?? '0px 0px -2px 0px',
      threshold: props.options.threshold ?? 0
    }
  )
  observer.observe(wrapperEl.value)
})

</script>
<template>
  <div
    ref="wrapperEl"
    class="observer-wrap"
    :style="flag ? {} : props.invisibleStyle"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.observer-wrap {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>