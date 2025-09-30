<template>
  <div>
    <h2 class="page-title">Portfolio</h2>
    <!-- Types -->
    <n-space justify="center">
      <n-tag
        v-for="item in types"
        :key="item.value"
        :checked="item.checked"
        @update:checked="(val) => handleCheck(val, item)"
        checkable
      >{{ item.value }}</n-tag>
    </n-space>
    <!-- Projects -->
    <div flex="~ wrap gap-10 justify-center" class="mt-5">
      <div class="b-rd-5px bg-tg-bg2 p-5" v-for="item in filteredData" :key="item.title">
        <!-- image container -->
        <div class="w-280px h-200px bg-cover b-rd-5px" flex="~ justify-center items-center" :style="{ backgroundImage: `url(${item.img})` }">
          <div v-if="!item.img" class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
        </div>
        <p>{{ item.briefTitle || item.title }}</p>
        <n-button text class="c-theme-color hover:c-theme-color1">
          Details 
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
// const message = useMessage()
// const dialog = useDialog()

const types = ref(['All', 'Web', 'Mobile', 'Library', 'Game', 'Scripts', 'Others'].map(p => ({ value: p, checked: p === 'All' })))
const data = Array.from({ length: 20 }).map((_, i) => ({
  type: types.value[i % (types.value.length - 1) + 1].value,
  briefTitle: '',
  title: `Project ${i + 1}`,
  description: `Description of project ${i + 1}.`,
  img: '',
  meta: [
    ['Stack', 'Vue, Vite, UnoCSS'],
    ['Repository', 'https://github.com/zymbth/zymbth.github.io'],
    ['Live Demo', 'https://zymbth.github.io'],
  ]
}))
const filteredData = computed(() => {
  const checkedType = types.value.find(item => item.checked)
  return data.filter(item => checkedType.value === 'All' || item.type === checkedType.value)
})

function handleCheck(checked, rawData) {
  types.value.forEach(item => item.checked = false)
  rawData.checked = checked
  if(!checked) types.value[0].checked = true
}

// function handleButtonClick() {
//   dialog.success({
//     title: '关闭',
//     content: '你确定？',
//     positiveText: '确定',
//     negativeText: '不确定',
//     maskClosable: false,
//     onMaskClick: () => {
//       message.success('不能关闭')
//     },
//     onEsc: () => {
//       message.success('通过 esc 关闭')
//     }
//   })
// }
</script>