<template>
  <div>
    <h2 class="page-title">Portfolio</h2>
    <!-- Types -->
    <div class="mb-5" flex="~ wrap gap-3 justify-center">
      <button
        v-for="t in types.filter(t => !t.hidden)"
        :key="t.name"
        :class="{ text: currType !== t.name }"
        @click="currType = t.name"
      >{{ t.name }}</button>
    </div>
    <!-- Grid -->
    <div grid="~ gap-10 justify-center justify-items-center cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div class="box-border max-w-500px w-full b-rd-5px bg-tg-bg2 p-20px" v-for="item in filteredData" :key="item.title">
        <div class="grid-item aspect-video b-rd-5px" flex="~ justify-center items-center">
          <div v-if="!item.img?.[0]" class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
          <n-image v-else :src="item.img[0]" object-fit="contain" :lazy="true">
            <template #error>
              <div class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
            </template>
          </n-image>
        </div>
        <p class="m-0 mt-2 lh-2em">{{ item.briefTitle || item.title }}</p>
        <a @click="handleShowDialog(item)">Details <span class="i-mdi:arrow-right align-middle"></span></a>
      </div>
    </div>
    <!-- Dialog -->
    <dialog ref="pfDialogRef">
      <button class="text absolute top-4 right-4 text-24px p-0" @click="handleHideDialog">×</button>
      <div grid="~ cols-1 gap-10 justify-center" class="md:grid-cols-2">
        <div class="h-240px b-rd-5px" flex="~ justify-center items-center">
          <div v-if="!dialogData.img?.[0]" class="i-mdi:chart-line-stacked text-36px text-theme-color"></div>
          <img v-else-if="dialogData.img.length === 1" class="max-h-240px max-w-full w-auto object-contain" :src="dialogData.img[0]" />
          <n-carousel v-else draggable :show-arrow="true">
            <img class="h-240px w-full object-contain" v-for="(p,i) in dialogData.img" :k="i" :src="p" />
          </n-carousel>
        </div>
        <div>
          <p class="m-0 text-12px">{{ dialogData.type }}</p>
          <h3 class="my-2">{{ dialogData.title }}</h3>
          <p class="m-0 mb-5">{{ dialogData.description }}</p>
          <p class="m-0 lh-2em" v-for="([k, v], i) in dialogData.meta?.filter(([_,v]) => v)" :key="i">
            <span v-if="REGEX_URL.test(v)">
              {{ k }}
              <a target="_blank" :href="v" class="i-mdi:external-link inline-block align-middle"></a>
            </span>
            <span v-else>{{ k }} - {{ v }}</span>
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
const types = ref(['All', 'Libraries', 'Projects', 'Open Source', 'Games', 'Scripts', 'Others'].map(t => ({ name: t, hidden: false })))
const currType = ref(types.value[0].name)
const data = portfolios.filter(p => p.title)
types.value.forEach(item => {
  if (item.name === 'All') return
  item.hidden = !data.some(p => p.type === item.name)
})
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
a>span {
  display: inline-block;
  transition: .4s;
}

a:hover>span {
  transform: translateX(.25rem);
}

.grid-item .n-image :deep(img) {
  max-height: 100%;
  max-width: 100%;
}
</style>