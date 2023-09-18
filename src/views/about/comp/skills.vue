<script setup>
import { ref, onMounted } from 'vue'
import useHandleResize from '@/use/useHandleResize'

const skillsChart = ref()
let myChart

useHandleResize(() => myChart.resize?.())

onMounted(() => {
  myChart = echarts.init(skillsChart.value)
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: function (params, ticket, callback) {
        return params[0].value[3]
      },
      position: function (point, params, dom, rect, size) {
        var pX =
          size.contentSize[0] + point[0] > size.viewSize[0]
            ? size.viewSize[0] - size.contentSize[0]
            : point[0]
        var pY = point[1] - size.contentSize[1] / 2
        return [pX, pY]
      },
    },
    dataset: {
      source: [
        ['score', '%', 'skill', 'description'],
        [75, 75, '数据库', '熟练使用MySQL, PostgreSQL数据库'],
        [40, 40, 'Python', '掌握基本语法，编写过RESTful接口、推荐算法'],
        [88, 88, 'Java', '擅长SpringBoot+SpringMVC+MybatisPlus框架'],
        [75, 75, 'CSS', '前端基础技能'],
        [85, 85, 'HTML', '前端基础技能'],
        [90, 90, 'JavaScript', '拥有五年实战经验，js基础扎实'],
      ],
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
      dimension: 0, // Map the score column to color
      inRange: {
        color: ['#D7DA8B', '#E15457'],
      },
    },
    series: [
      {
        type: 'bar',
        encode: {
          x: '%', // Map the column to X axis.
          y: 'skill',
        },
      },
    ],
  })
})
</script>
<template>
  <!-- skills -->
  <div class="skills-block">
    <h5 class="page-title">Professional Skills</h5>
    <div class="skills-container">
      <div class="skills-list">
        <span
          >熟练掌握HTML5/CSS3/ES6，擅长移动/桌面端网页开发、H5混合开发、小程序、django模板等多种应用场景</span
        >
        <span>熟练掌握vue.js开发框架，应用于SPA项目、渐进式移动应用、混合应用</span>
        <span>深刻理解前端工程化，并践行于项目开发中</span>
        <span>熟悉Web性能优化，提供性能良好的Web项目</span>
        <span
          >熟练使用Git管理代码，进行团队协作开发、项目版本控制。理解Git工作流，有丰富的实际使用经验</span
        >
        <span
          >熟练使用SpringBoot & Mybatis
          Plus开发后端项目，熟悉MySQL/PostgreSQL，有数据库设计能力与经验</span
        >
        <span
          >其它技术栈：jQuery（熟练）, Angular（基础）, Ionic（基础）, element ui/element
          plus（熟练）, mui（熟练）, Java（熟练）, MySQL（熟练），PostgreSQL（熟练）, Nginx（熟练）,
          python（基础）</span
        >
      </div>
      <div class="skills-chart" ref="skillsChart"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.skills-block {
  background-color: #fbfbfb;
}
.skills-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  .skills-list {
    width: 46%;
    > span {
      display: block;
      position: relative;
      line-height: 1.5em;
      padding-left: 1.2em;
    }
    > span::before {
      content: '>';
      position: absolute;
      top: 0;
      left: 0;
      // transform: translateY(-50%);
    }
    > span:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .skills-chart {
    width: 46%;
    height: 400px;
  }
}
@media screen and (max-width: 920px) {
  .skills-container {
    flex-wrap: wrap;
    .skills-list,
    .skills-chart {
      width: 88vw;
    }
  }
}
</style>
