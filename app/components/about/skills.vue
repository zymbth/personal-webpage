<script setup>
const data = ref([
  {
    value: 'frontend',
    logo: 'i-mdi:fullscreen',
    name: 'Frontend Developer',
    experiences: '7 years',
    icon: 'i-mdi:code-braces',
    skills: [
      { name: 'HTML/CSS/JS', score: 90, description: '' },
      { name: 'Vue', score: 90, description: '' },
      { name: 'TypeScript', score: 70, description: '' },
      { name: 'React', score: 60, description: '' },
      { name: 'AngularJS', score: 60, description: '' },
    ]
  },
  {
    value: 'backend',
    logo: 'i-mdi:fullscreen',
    name: 'Backend Developer',
    experiences: '2 years',
    icon: 'i-mdi:language-java',
    skills: [
      { name: 'Java', score: 80, description: '' },
      { name: 'Python', score: 60, description: '' },
      { name: 'MyBatis Plus', score: 70, description: '' },
      { name: 'MySQL', score: 60, description: '' },
      { name: 'PostgreSQL', score: 60, description: '' },
    ]
  },
])

const activeRole = ref('frontend')

const skills = computed(() => data.value.find(item => item.value === activeRole.value)?.skills)
</script>

<template>
  <div>
    <h2 class="page-title">Professional Skills</h2>
    <div class="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2">
      <!-- rols -->
      <div class="w-300px">
        <div class="mb-5 cursor-pointer" flex="~ items-center gap-1" v-for="item in data" :key="item.value"
          @click="activeRole = item.value">
          <div class="c-theme-color text-36px" :class="item.icon"></div>
          <div class="flex-grow-1">
            <span class="text-lg block">{{ item.name }}</span>
            <span class="text-12px">{{ item.experiences }}</span>
          </div>
          <div class="i-mdi:circle-medium text-24px"
            :class="item.value === activeRole ? 'text-theme-color' : 'text-tg-bg3'"></div>
        </div>
      </div>
      <!-- skills -->
      <div class="w-300px">
        <div v-for="item in skills" :key="item.name" class="mb-20px">
          <div flex="~ justify-between" class="mb-10px">
            <label>{{ item.name }}</label>
            <span>{{ item.score }}%</span>
          </div>
          <div class="bg-tg-bg3 h-5px b-rd-3px">
            <div class="skill-bar h-5px b-rd-3px"
              :style="{ 'clip-path': `rect(0px ${item.score}% 100% 0px round 5px)` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-bar {
  background-image: linear-gradient(to right, var(--theme-color-2), var(--theme-color));
}
</style>