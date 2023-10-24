<script setup>
// import { ref, reactive, onMounted } from 'vue'
// import { getObjectByTmpl } from '@/utils/common-methods'

const tmpl = {
  id: null,     // 一言标识
  type: '',     // 类型. a - 动画, b - 漫画, c - 游戏, d - 文学, e - 原创, f - 来自网络, g - 其他, h - 影视, i - 诗词, j - 网易云, k - 哲学, l - 抖机灵
  from: '',     // 一言的出处
  from_who: '', // 一言的作者
  hitokoto: '', // 一言正文
  length: 0,    // 句子长度
}
const yiyan = reactive({}), loading = ref(false)

onMounted(() => {
  fetchYiYan()
})

const fetchYiYan = () => {
  if(loading.value) return
  loading.value = true
  fetch('https://v1.hitokoto.cn?c=d&c=i&c=k')
    .then(response => response.json())
    .then(res => {
      Object.assign(yiyan, getObjectByTmpl(tmpl, {}))
      setTimeout(() => {
        Object.assign(yiyan, getObjectByTmpl(tmpl, res ?? {}))
        yiyan.hitokoto = `「 ${yiyan.hitokoto} 」`
      }, 300)
    }).finally(_ => {
      loading.value = false
    })
}
</script>
<template>
  <!-- Yi Yan -->
  <transition name="breadcrumb">
    <div class="yiyan" v-if="!!yiyan.hitokoto">
      <span class="yiyan-content">{{ yiyan.hitokoto }}</span>
      <span v-show="yiyan.from_who" class="yiyan-author">———— {{ yiyan.from_who }}</span>
      <svg
        :class="['icon', { 'icon-loading': loading }]"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        @click="fetchYiYan()">
        <path
          fill="currentColor"
          d="M710.4 249.6l76.8-76.8c2.133-2.133 4.267-4.267 6.4-2.133 2.133 0 2.133 4.266 2.133 6.4v204.8c0 4.266-2.133 8.533-4.266 10.666s-6.4 4.267-10.667 4.267H576c-4.267 0-6.4 0-6.4-2.133s0-4.267 2.133-6.4l76.8-76.8C605.867 283.733 561.067 268.8 512 268.8c-44.8 0-85.333 10.667-121.6 32s-66.133 51.2-87.467 87.467-32 78.933-32 121.6H185.6c0-44.8 8.533-87.467 25.6-128 17.067-40.534 40.533-74.667 70.4-104.534s64-53.333 104.533-70.4c40.534-17.066 83.2-25.6 128-25.6 70.4 2.134 136.534 25.6 196.267 68.267zM755.2 512h85.333c0 44.8-8.533 87.467-25.6 128-17.066 40.533-40.533 74.667-70.4 104.533-29.866 29.867-64 53.334-104.533 70.4-40.533 17.067-83.2 25.6-128 25.6-72.533 0-138.667-21.333-198.4-66.133l-76.8 76.8c-2.133 2.133-4.267 4.267-6.4 2.133-2.133 0-2.133-4.266-2.133-6.4v-204.8c0-4.266 2.133-8.533 4.266-10.666 2.134-2.134 6.4-4.267 10.667-4.267H448c4.267 0 6.4 0 6.4 2.133s0 4.267-2.133 6.4L377.6 710.4c42.667 29.867 87.467 42.667 136.533 42.667 44.8 0 85.334-10.667 121.6-32 38.4-21.334 66.134-51.2 87.467-87.467s32-76.8 32-121.6z" />
      </svg>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .3s ease;
}

.breadcrumb-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.breadcrumb-move {
  transition: all .5s;
}
.breadcrumb-leave-active {
  position: absolute;
}
.yiyan {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  // width: 36vw;
  min-width: 260px;
  max-width: 400px;
  >span {
    display: block;
    line-height: 1.4em;
  }
  .yiyan-content {
    font-size: 16px;
    text-align: left;
    text-indent: 2em;
    text-shadow: 0px 0px 2px #000000b3;
  }
  .yiyan-author {
    font-size: 14px;
    text-align: right;
  }
  .icon {
    display: none;
    position: absolute;
    top: -6px;
    right: -12px;
    filter: drop-shadow(0px 0px 2px #0ea4eb);
    cursor: pointer;
  }
  .icon-loading {
    animation: spin 1.2s ease-in-out infinite;
  }
  &:hover .icon {
    display: block;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 920px) {
  .yiyan {
    min-width: 36vw;
    max-width: 70vw;
    .icon {
      top: -4px;
      right: 0;
    }
  }
}
</style>