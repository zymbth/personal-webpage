import { onMounted, onBeforeUnmount } from 'vue'
import { debounce } from '@/utils/common-methods'

export default function (cb, interval = 300) {
  if (typeof cb !== 'function') return
  if (isNaN(Number(interval))) interval = 300
  else if (interval < 0) interval = 0

  const debounceHandleResize = interval ? debounce(cb, interval) : cb

  onMounted(() => {
    window.addEventListener('resize', debounceHandleResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounceHandleResize) // 监听事件解绑
  })
}
