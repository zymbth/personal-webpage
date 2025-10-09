<template>
  <div>
    <h2 class="page-title">Portfolio</h2>
    <!-- Types -->
    <div class="mb-5" flex="~ wrap gap-3 justify-center">
      <button v-for="t in types" :key="t" :class="{ text: currType !== t }" @click="currType = t">{{ t }}</button>
    </div>
    <!-- Grid -->
    <div grid="~ gap-10 justify-center cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div class="b-rd-5px bg-tg-bg2 p-20px" v-for="item in filteredData" :key="item.title">
        <div class="img-bg h-200px b-rd-5px" flex="~ justify-center items-center"
          :style="{ backgroundImage: `url(${item.img})` }">
          <div v-if="!item.img" class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
        </div>
        <p class="m-0 mt-2 lh-2em">{{ item.briefTitle || item.title }}</p>
        <a @click="handleShowDialog(item)">Details <span class="i-mdi:arrow-right align-middle"></span></a>
      </div>
    </div>
    <!-- Dialog -->
    <dialog ref="pfDialogRef">
      <button class="text absolute top-4 right-4 text-24px p-0" @click="handleHideDialog">×</button>
      <div grid="~ cols-1 gap-10 justify-center" class="md:grid-cols-2">
        <div class="img-bg h-200px b-rd-5px" flex="~ justify-center items-center"
          :style="{ backgroundImage: `url(${dialogData.img})` }">
          <div v-if="!dialogData.img" class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
        </div>
        <div>
          <p class="m-0 text-12px">{{ dialogData.type }}</p>
          <h3 class="my-2">{{ dialogData.title }}</h3>
          <p class="m-0 mb-5">{{ dialogData.description }}</p>
          <p class="m-0 lh-2em" v-for="([k,v],i) in dialogData.meta" :key="i">
            {{ k }} -
            <a v-if="REGEX_URL.test(v)" target="_blank" :href="v">
              <div class="i-mdi:external-link inline-block align-middle"></div>
            </a>
            <span v-else>{{ v }}</span>
          </p>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import portfolios from '@/assets/portfolio.json'

const REGEX_URL = /^(https?:\/\/[^\s]+)/i
/**
 * Types:
 * - Projects, Featured Projects, Demo Apps: 演示项目, 代表作品, 全栈应用
 * - Open Source, Contributions, GitHub Projects: 开源项目, 开源贡献, GitHub 项目
 * - Scripts, Utilities, Dev Tools: 脚本工具, 实用脚本, 开发工具
 * - Games, Mini Projects, Fun Projects: 小游戏, 趣味项目, 互动实验
 * - Libraries, NPM Packages, Published Packages: NPM 库, 工具库, 发布包
 */
const types = ['All', 'Libraries', 'Projects', 'Open Source', 'Games', 'Scripts', 'Others']
const currType = ref(types[0])
const data = [
  ...portfolios,
  ...Array.from({ length: 20 - portfolios.length }).map((_, i) => ({
    type: types[i % (types.length - 1) + 1],
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
].filter(p => p.title)
const filteredData = computed(() => {
  return data.filter(item => currType.value === 'All' || item.type === currType.value)
})

const pfDialogRef = ref()
const dialogData = ref({})

function handleShowDialog(rawData) {
  pfDialogRef.value.showModal()
  dialogData.value = toRaw(rawData)
}
function handleHideDialog() {
  pfDialogRef.value.close()
}
</script>

<style scoped>
.img-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
a>span {
  display: inline-block;
  transition: .4s;
}
a:hover>span {
  transform: translateX(.25rem);
}
</style>