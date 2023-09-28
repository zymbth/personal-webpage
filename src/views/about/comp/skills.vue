<script setup>
import { ref, onMounted } from 'vue'
import useHandleResize from '@/use/useHandleResize'

const wrapperRef = ref(),
  flag = ref(false)

const skillsChart = ref()
let myChart

useHandleResize(() => myChart.resize?.())

onMounted(() => {
  let observer = new IntersectionObserver(
    entries => {
      if (!flag.value && entries[0]?.isIntersecting) {
        flag.value = true
        observer.unobserve(wrapperRef.value)
      }
    },
    {
      root: document,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0,
    }
  )
  observer.observe(wrapperRef.value)

  myChart = echarts.init(skillsChart.value)
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: function (params, ticket, callback) {
        const skillItems = params[0].value[3].split('\n')
        // 换行容器
        return `<div class="chart-skill">${
          skillItems.map(item => `<span>${item}</span>`).join('')
        }</div>`
      },
      // 定位
      position: function (point, params, dom, rect, size) {
        const pX =
          size.contentSize[0] + point[0] > size.viewSize[0]
            ? size.viewSize[0] - size.contentSize[0]
            : point[0]
        const pY = point[1] - size.contentSize[1] / 2
        return [pX, pY]
      },
    },
    dataset: {
      source: [
        ['score', '%', 'skill', 'description'],
        [75, 75, '数据库', '协同设计过供应链系统的数据库结构\n能熟练使用MySQL, PostgreSQL数据库'],
        [40, 40, 'Python', '掌握基本语法，为生产项目编写过RESTful接口、推荐算法'],
        [80, 80, 'Git', '熟练使用Git管理代码，进行团队协作开发、项目版本控制。\n深刻理解Git工作流，有丰富的实际使用经验'],
        [86, 86, 'Java', '擅长 SpringBoot + SpringMVC + MybatisPlus 框架'],
        [75, 75, 'CSS', '熟练的CSS技能者，熟悉CSS3的新特性，在现代布局、移动端兼容等方面具备丰富的经验和实践能力。\n能熟练得实现响应式、移动端优先的设计。\n熟悉CSS预处理器的使用，以提高CSS代码的可读性、可维护性和可重用性。'],
        [85, 85, 'HTML', '具备扎实的HTML技能，熟悉各种HTML标签、属性和语法。'],
        [90, 90, 'JavaScript', '拥有五年实战经验，具备丰富的js技能。\n精通vue全家桶，拥有Angular框架实战经验，了解React基本语法。\n具备良好的代码风格，在前端工程化上具备丰富的经验和实践能力。'],
      ],
    },
    grid: { containLabel: true, top: 6, left: 6, right: 16, bottom: 50 },
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

const techStack = [
  '熟练掌握HTML5/CSS3/ES6，擅长移动/桌面端网页开发、H5混合开发、小程序、django模板等多种应用场景',
  '熟练掌握vue.js开发框架，应用于SPA项目、渐进式移动应用、混合应用',
  '深刻理解前端工程化，并践行于项目开发中',
  '熟悉Web性能优化，提供性能良好的Web项目',
  '熟练使用Git管理代码，进行团队协作开发、项目版本控制。理解Git工作流，有丰富的实际使用经验',
  '熟练使用SpringBoot & Mybatis Plus开发后端项目，熟悉MySQL/PostgreSQL，有数据库设计能力与经验',
  '其它技术栈：jQuery（熟练）, Angular（基础）, Ionic（基础）, element ui/element plus（熟练）, mui（熟练）, Java（熟练）, MySQL（熟练），PostgreSQL（熟练）, Nginx（熟练）, python（基础）'
]
</script>
<template>
  <!-- skills -->
  <div
    class="skills-block"
    ref="wrapperRef"
    :style="flag ? {} : { transform: 'translateY(30%)', opacity: 0 }">
    <h5 class="page-title">Professional Skills</h5>
    <div class="skills-container">
      <div class="skills-essential">
        <span class="skills-type">基础技能</span>
        <div class="skills-chart" ref="skillsChart"></div>
      </div>
      <div class="tech-stack">
        <span class="skills-type">技术栈</span>
        <div class="tech-stack-list">
          <span v-for="item in techStack" v-text="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@mixin custom-li {
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
.skills-block {
  background-color: #fbfbfb;
  transition-property: transform, opacity;
  transition-duration: 0.8s;
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
}
.skills-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px 20px;
  overflow-x: hidden;
  .tech-stack {
    width: 50%;
    .tech-stack-list {
      @include custom-li;
    }
  }
  .skills-essential {
    width: 50%;
    .skills-chart {
      width: 100%;
      height: 360px;
    }
  }
  .skills-type {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1em;
    display: block;
  }
}
.skills-chart:deep .chart-skill {
  @include custom-li;
  max-width: max(270px,25vw);
  white-space: break-spaces;
  > span {
    line-height: 1.2em;
    padding-left: 1em;
  }
  > span:not(:last-child) {
    margin-bottom: 6px;
  }
}
@media screen and (max-width: 920px) {
  .skills-container {
    flex-wrap: wrap;
    .tech-stack,
    .skills-essential {
      width: 88vw;
    }
  }
}
</style>
