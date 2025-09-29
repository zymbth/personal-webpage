<script setup>
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from 'echarts/components'

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer,
])

const wrapperRef = ref(),
  flag = ref(false)

const skillsChart = ref()
let myChart

useHandleWinSizeChange(() => myChart.resize?.())

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
        return `<div class="chart-skill">${skillItems
          .map(item => `<span>${item}</span>`)
          .join('')}</div>`
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
        [
          70,
          70,
          'Git',
          '熟练使用Git管理代码，进行团队协作开发、项目版本控制。\n深刻理解Git工作流，有丰富的实际使用经验',
        ],
        [86, 86, 'Java', '擅长 SpringBoot + SpringMVC + MybatisPlus 框架'],
        [
          75,
          75,
          'CSS',
          '熟练的CSS技能者，熟悉CSS3的新特性，在现代布局、移动端兼容等方面具备丰富的经验和实践能力。\n能熟练得实现响应式、移动端优先的设计。\n熟悉CSS预处理器的使用，以提高CSS代码的可读性、可维护性和可重用性。',
        ],
        [85, 85, 'HTML', '具备扎实的HTML技能，熟悉各种HTML标签、属性和语法。'],
        [
          90,
          90,
          'JavaScript',
          '拥有五年实战经验，具备丰富的js技能。\n精通vue全家桶，拥有Angular框架实战经验，了解React基本语法。\n具备良好的代码风格，在前端工程化上具备丰富的经验和实践能力。',
        ],
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
  'HTML/CSS/JS 基础扎实，熟练掌握 HTML5/CSS3/ES6，擅长移动/PC端web开发、hybrid开发、小程序等开发模式',
  '熟悉 Vue 框架并对其源码有过深入研究，且熟悉 Vue 相关技术栈，项目经验丰富',
  '深入理解工程化，熟悉 Vite/Webpack/Rollup 等构建工具，掌握常见构建工具优化方案，提供高性能 Web 应用',
  '有全栈开发经验，熟练使用 SpringBoot & Mybatis Plus 开发后端项目(2年Java经验-零售供应链项目)，熟悉 MySQL/PostgreSQL，有数据库设计能力与项目经验。了解 Nodejs 及其生态，如 Koa/Nestjs，并能使用 Nodejs 搭建基本的后台服务',
  '熟练使用 Git 管理代码，进行团队协作开发、项目版本控制。理解 Git 工作流，有丰富的实践经验',
  '其它技术栈：jQuery(熟练)，AngularJS(基础)，React(基础)，TypeScript(基础)，Sass(熟练)，Ionic(基础)，Echarts(熟练)，d3.js(基础)，Nuxt(基础)，MicroApp(基础)，Nest.js(基础)，Nginx(熟练)，docker(基础)，python(基础)，vitepress(熟练)',
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
  background-color: var(--tg-bg-color-1);
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
:deep(.skills-chart .chart-skill) {
  @include custom-li;
  max-width: max(270px, 25vw);
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
