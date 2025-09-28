<script setup>
import RevirLogo from '@/assets/img/career/REVIR.png'
import JundaxLogo from '@/assets/img/career/jundax.jpg'
import SIIDLogo from '@/assets/img/career/SIID.png'
import BTHLogo from '@/assets/img/career/BTH.svg'
import USTBLogo from '@/assets/img/career/USTB.webp'

const careers = [
  {
    time: '2021/3/28',
    title: '深圳雅济科技有限公司',
    logo: RevirLogo,
    posi: '前端负责人',
    contents: [
      '灵活选用前端技术支持公司医学检测出报、办公ERP系统、AI辅助药物研发等核心业务。',
      '制定并落实前端开发规范，统一代码风格，提高代码质量。推进前端工程化开发，优化构建，提高系统性能。进行技术指导、新人培训、代码审核，协助解决技术难题。',
      '与怀揣梦想、奋勇追求理想的领导与同事们共事，共同进步！',
    ],
  },
  {
    time: '2019/7/13',
    title: '扶沃(深圳)科技有限公司',
    logo: JundaxLogo,
    posi: '前端工程师',
    contents: [
      '领导的信任让我意识到对工作的责任感的必要性。',
      '和谐的工作氛围让我得以投入工作，同事间的良好关系也给工作增添了很多趣味。',
      '先后进行了安卓/iOS APP混合开发、vue2 & element-ui前端项目开发、spring boot & mybatis-plus 微服务开发。充实并积累了前后端、数据库与web服务端技术经验，树立全栈开发的目标。',
    ],
  },
  {
    time: '2018/8/1',
    title: '深圳创新与设计研究院',
    logo: SIIDLogo,
    posi: '开发实习生',
    contents: [
      '同事的指引、主管的指导让初入职的彷徨很快消散。',
      '完整参与了一个前后端分离项目，贡献了前端40%、后端70%的代码。感恩此次实习，让我对前后端都有了充分的了解。',
    ],
  },
  {
    time: '2015/9/1',
    title: '瑞典布莱津理工大学',
    logo: BTHLogo,
    posi: '研究生',
    contents: [
      '浓厚活跃的学术氛围下，与来自世界各地的同学一起学习，不断的思维碰撞激发了我不断前进。理论与实践的教学方式让我体会到知识的真正意义。',
    ],
  },
  {
    time: '2011/9/1',
    title: '北京科技大学',
    logo: USTBLogo,
    posi: '本科生',
    contents: [
      '青葱少年离开家乡，进入千里之外的北科大。度过四年彷徨又充实的大学时光，在这里，接触各种新的知识，并拓宽自己的视野，结交了许多新朋友，让我有机会去做自己想做的事情。母校“求实鼎新”的校训将永远铭记。',
    ],
  },
]
</script>
<template>
  <div class="careers-block">
    <h5 class="page-title">Career</h5>
    <p class="page-desc">Education and working experiences</p>
    <div class="time-line-wrap">
      <AboutCareerObserverWrap v-for="item in careers" :data="item"></AboutCareerObserverWrap>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.careers-block {
  overflow: hidden;
}
:deep(.time-line-wrap .career-block:last-child .time-line) {
  display: none;
}
</style>
