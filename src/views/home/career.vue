<script setup>
import { ref } from 'vue'

const careers = [{
  time: '2021/3/28',
  title: '深圳溪砾科技有限公司',
  posi: '前端负责人',
  contents: [
    '建立前端规范，统筹、规范前端项目开发流程'
  ]
},{
  time: '2019/7/13',
  title: '扶沃(深圳)科技有限公司',
  posi: '前端工程师',
  contents: [
    '领导的信任让我意识到对工作的责任感的必要性。',
    '和谐的工作氛围让我得以投入工作，同事间的良好关系也给工作增添了很多趣味。'
  ]
},{
  time: "2018/8/1",
  title: "深圳创新与设计研究院",
  posi: "开发实习生",
  contents: [
    "同事的指引、主任的指导让初我初入职时的彷徨很快消散。",
    "完整参与了一个前后端分离项目，贡献了前端40%、后端70%的代码。感恩此次实习，让我对前端有了充分的了解与兴趣。"
  ]
},{
  time: "2015/9/1",
  title: "瑞典布莱津理工大学",
  posi: "研究生",
  contents: [
    "异国他乡求学，既喜悦于不同思想的碰撞，又思念祖国家乡。",
    "浓厚的学术氛围、理论与实践并行的教学理念让我受益良多。"
  ]
},{
  time: "2011/9/1",
  title: "北京科技大学",
  posi: "本科生",
  contents: [
    "青葱少年离开家乡，进入千里之外的北科大。度过四年颇为彷徨的时光，“求实鼎新”的校训将永远铭记。"
  ]
}]
</script>
<template>
  <div class="section-container">
    <h5 class="page-title">Career</h5>
    <p class="page-desc">Education and working experiences</p>
    <el-timeline>
      <el-timeline-item
          :timestamp="career.time"
          placement="top"
          v-for="(career, index) in careers"
          :key="index"
          :color="'#0bbd87'"
        >
          <el-card>
            <h4>{{career.title}}</h4>
            <p>{{career.posi}}</p>
            <p v-for="(cont, idx) in career.contents" :key="idx" class="career-contents">{{cont}}</p>
          </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style lang='scss' scoped>
@media screen and (max-width:767px) {
  .section-container {padding: 20px 20px 20px 0;}
}
@media screen and (min-width:768px) {
  .section-container {padding: 50px 80px;}
}
.section-container {
  .career-contents {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>