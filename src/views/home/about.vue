<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

const $echarts = getCurrentInstance().appContext.config.globalProperties.$echarts
const skillChart = ref()

const selfIntro = '1993年生于江西九江的一个小乡村，幼年的乡村生活经历给予了我吃苦耐劳的精神。' +
  '生长在庐山脚下的我喜爱登山，它告诉我，' +
  '忍受不了路途的艰辛就无法登上高峰，不登上高峰就永远看不到峰顶的风光。' +
  '无需同他人比较，人生就是要亲自去攀登一座又一座高山。' +
  '热爱学习、热爱生活，这是我的人生观。满怀热情得学习、工作、生活，如此才不负大好时光。'

const items = [
  {'name': '姓名', 'val': '赵跃旻'},
  {'name': '职业', 'val': '前端工程师'},
  {'name': '邮箱', 'val': 'ymzhaobth@aliyun.com'},
  {'name': '电话', 'val': '(86)13148787915'}
]

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
        [90, 90, 'JavaScript', '五年实战经验，多个基于vue、angular的项目，拥有原生JS、H5开发经验'],
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
    <el-row :gutter="20">
      <!--左侧：图表-->
      <el-col :xs="24" :sm="16">
        <el-row :gutter="15">
          <!--个人图片-->
          <el-col :xs="24" :sm="10">	
            <el-avatar :src="$imgurl+'avatar.jpg'" @error="() => true" :size="200">
              <img :src="$imgurl+'def_avatar.jpg'" style="width:100%;height:auto;"/>
            </el-avatar>
          </el-col>
          <!--个人信息-->
          <el-col :xs="24" :sm="14">
            <p class="strong-font-weight" v-for="(item, idx) in items" :key="idx">
              {{item.name}}: <span>{{item.val}}</span>
            </p>
          </el-col>
        </el-row>
        <div ref="skillChart" class="skill-chart" />
      </el-col>
      <!--右侧：文字简介-->
      <el-col :xs="24" :sm="8" class="about-descr">
        <div class="animation">
          <div id="bm" class="lottie"></div>
          <!-- path="packages/lf20_0j4kzlaf.json" -->
        </div>
        <h4>About me</h4>
        <p style="text-align:justify;">{{selfIntro}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.section-container {padding:30px 60px;}
.skill-chart {
  height: 400px;
}
.strong-font-weight {
	font-weight: 600;
	span {font-weight: normal;}
}
.about-descr {
	position: relative;
	
	.animation {
		height: 100px;
		width: 100px;
		position: absolute;
		top: -20px;
		right: 0;
	}
}
#bm {
  width: 100%;
  height: 100%;
}
@media screen and (max-width:750px) {
	.section-container {padding:20px 30px;}
}
</style>