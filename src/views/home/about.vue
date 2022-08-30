<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

const $echarts = getCurrentInstance().appContext.config.globalProperties.$echarts
const skillChart = ref()

onMounted(() => {
  $echarts.init(skillChart.value).setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: function(params) {
        return params[0].value[3]
      }
    },
    dataset: {
      source: [
        ['score', '%', 'skill', 'description'],
        [85, 85, 'Java', '擅长SpringBoot+SpringMVC+MybatisPlus框架'],
        [90, 90, 'JavaScript', '四年实战经验，多个基于vue、angular的项目，拥有原生JS、H5开发经验'],
        [85, 85, 'HTML', '前端基础技能'],
        [70, 70, 'CSS', '前端基础技能'],
        [50, 50, 'Python', '掌握基本语法，编写过推荐算法']
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: '%' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['没有人比我更懂', '一无所知'],
      dimension: 0,
      inRange: { color: ['#D7DA8B', '#E15457'] }
    },
    series: [{ type: 'bar', encode: { x: '%', y: 'skill' } }]
  })
})
</script>
<template>
  <div class="section-container">
    <!-- <el-card shadow="always">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12"></el-col>
      </el-row>
    </el-card> -->
    <div ref="skillChart" class="skill-chart" />
  </div>
</template>

<style lang="scss" scoped>
.skill-chart {
  height: 400px;
  width: 80%;
}
</style>