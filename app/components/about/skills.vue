<script setup>
const activeRole = ref('frontend')
const roles = ref([
  { value: 'frontend', logo: 'i-mdi:fullscreen', name: 'Frontend Developer', experiences: '7 years' },
  { value: 'backend', logo: 'i-mdi:fullscreen', name: 'Backend Developer', experiences: '2 years' },
])

const skills = [
  { name: 'HTML/CSS/JS', score: 90, description: '' },
  { name: 'Vue', score: 90, description: '' },
  { name: 'TypeScript', score: 70, description: '' },
  { name: 'React', score: 60, description: '' },
  { name: 'AngularJS', score: 60, description: '' },
]
</script>

<template>
  <div>
    <h5 class="page-title">Professional Skills</h5>
    <!-- TODO: -->
    <div class="flex gap-20px ">
      <!-- rols -->
      <div>
        <div v-for="item in roles" :key="item.value" class="mb-20px"></div>
      </div>
      <!-- skills -->
      <div class="w-300px mx-auto">
        <div v-for="item in skills" :key="item.name" class="mb-20px">
          <div flex="~ justify-between" class="mb-10px">
            <label>{{ item.name }}</label>
            <span>{{ item.score }}%</span>
          </div>
          <div class="bg-tg-bg3 h-5px b-rd-3px">
            <div class="skill-bar h-5px b-rd-3px" :style="{ 'clip-path': `rect(0px ${item.score}% 100% 0px round 5px)` }"></div>
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