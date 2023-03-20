<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getObjectByTmpl } from '@/utils/common-methods'
import ObserverWrap from './comp/observer-wrap.vue'
import FooterComp from '@/components/footer.vue'
import TypedCareer from '@/components/typed-career.vue'
import axios from 'axios'

onMounted(() => {
  fetchYiYan()
})

const tmpl = {
  id: null,     // 一言标识
  type: '',     // 类型. a - 动画, b - 漫画, c - 游戏, d - 文学, e - 原创, f - 来自网络, g - 其他, h - 影视, i - 诗词, j - 网易云, k - 哲学, l - 抖机灵
  from: '',     // 一言的出处
  from_who: '', // 一言的作者
  hitokoto: '', // 一言正文
  length: 0,    // 句子长度
}
const yiyan = reactive({}), loading = ref(false)
const fetchYiYan = () => {
  if(loading.value) return
  loading.value = true
  axios.get('https://v1.hitokoto.cn?c=d&c=i&c=k').then(res => {
    Object.assign(yiyan, getObjectByTmpl(tmpl, res.data ?? {}))
  }).finally(_ => {
    loading.value = false
  })
}

const careers = [{
  time: '2021/3/28',
  title: '深圳溪砾科技有限公司',
  posi: '前端负责人',
  contents: [
    '灵活选用前端技术支持公司医学检测出报、办公ERP系统、AI辅助药物研发等核心业务。',
    '建立前端规范，统筹、规范前端项目开发流程。',
    '与怀揣梦想、奋勇追求理想的领导与同事们共事、共同进步！'
  ]
},{
  time: '2019/7/13',
  title: '扶沃(深圳)科技有限公司',
  posi: '前端工程师',
  contents: [
    '领导的信任让我意识到对工作的责任感的必要性。',
    '和谐的工作氛围让我得以投入工作，同事间的良好关系也给工作增添了很多趣味。',
    '先后进行了安卓/iOS APP混合开发、vue2 & element-ui前端项目开发、java & mybatis-plus微服务开发。充实并积累了前后端、数据库与web服务器技术经验，树立全栈开发的目标。'
  ]
},{
  time: "2018/8/1",
  title: "深圳创新与设计研究院",
  posi: "开发实习生",
  contents: [
    "同事的指引、主任的指导让初入职的彷徨很快消散。",
    "完整参与了一个前后端分离项目，贡献了前端40%、后端70%的代码。感恩此次实习，让我对前后端都有了充分的了解。"
  ]
},{
  time: "2015/9/1",
  title: "瑞典布莱津理工大学",
  posi: "研究生",
  contents: [
    '浓厚活跃的学术氛围下，与来自世界各地的同学一起学习，不断的思维碰撞激发了我不断前进。理论与实践的教学方式让我体会到知识的真正意义。'
  ]
},{
  time: "2011/9/1",
  title: "北京科技大学",
  posi: "本科生",
  contents: [
    "青葱少年离开家乡，进入千里之外的北科大。度过四年彷徨又充实的大学时光，在这里，接触各种新的知识，并拓宽自己的视野，结交了许多新朋友，让我有机会去做自己想做的事情。母校“求实鼎新”的校训将永远铭记。"
  ]
}]
</script>
<template>
  <div class="no-scroll-bar">
    <div class="wrap-inner">
      <div class="cover">
        <!-- Brief Self-Intro -->
        <div class="intro">
          <div class="avatar">
            <img src="/icon.jpg"/>
            <span class="my-name">赵跃旻</span>
            <TypedCareer />
          </div>
          <div class="infos">
            <h1>Career Goal</h1>
            <p class="career-goal">
              不断地提升自身的前端技术能力，提高代码质量，学习最新的技术以适应不断变化的市场需求。
              培养更加专业的前端开发技能，为网站提供更加出色的用户体验和设计。
              熟练掌握后端技术、数据库技术、web服务器技术，具备全面开发能力。
            </p>
            <div class="division"></div>
            <div class="info">
              <label>ADDRESS</label>
              <span>Shen Zhen, China</span>
            </div>
            <div class="info">
              <label>E-MAIL</label>
              <span>ymzhaobth@foxmail.com</span>
            </div>
            <div class="info">
              <label>WEBSITE</label>
              <span>ymzhao.work</span>
            </div>
          </div>
        </div>
        <!-- Yi Yan -->
        <div class="yiyan" v-show="yiyan.hitokoto">
          <span class="yiyan-content">{{ yiyan.hitokoto }}</span>
          <span v-show="yiyan.from_who" class="yiyan-author">———— {{ yiyan.from_who }}</span>
          <svg
            class="icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            @click="fetchYiYan()"
          >
            <path fill="currentColor" d="M710.4 249.6l76.8-76.8c2.133-2.133 4.267-4.267 6.4-2.133 2.133 0 2.133 4.266 2.133 6.4v204.8c0 4.266-2.133 8.533-4.266 10.666s-6.4 4.267-10.667 4.267H576c-4.267 0-6.4 0-6.4-2.133s0-4.267 2.133-6.4l76.8-76.8C605.867 283.733 561.067 268.8 512 268.8c-44.8 0-85.333 10.667-121.6 32s-66.133 51.2-87.467 87.467-32 78.933-32 121.6H185.6c0-44.8 8.533-87.467 25.6-128 17.067-40.534 40.533-74.667 70.4-104.534s64-53.333 104.533-70.4c40.534-17.066 83.2-25.6 128-25.6 70.4 2.134 136.534 25.6 196.267 68.267zM755.2 512h85.333c0 44.8-8.533 87.467-25.6 128-17.066 40.533-40.533 74.667-70.4 104.533-29.866 29.867-64 53.334-104.533 70.4-40.533 17.067-83.2 25.6-128 25.6-72.533 0-138.667-21.333-198.4-66.133l-76.8 76.8c-2.133 2.133-4.267 4.267-6.4 2.133-2.133 0-2.133-4.266-2.133-6.4v-204.8c0-4.266 2.133-8.533 4.266-10.666 2.134-2.134 6.4-4.267 10.667-4.267H448c4.267 0 6.4 0 6.4 2.133s0 4.267-2.133 6.4L377.6 710.4c42.667 29.867 87.467 42.667 136.533 42.667 44.8 0 85.334-10.667 121.6-32 38.4-21.334 66.134-51.2 87.467-87.467s32-76.8 32-121.6z"/>
          </svg>
        </div>
      </div>
      <div class="about-container">
        <h5 class="page-title">Career</h5>
        <p class="page-desc">Education and working experiences</p>
        <div class="time-line-wrap">
          <ObserverWrap v-for="item in careers" :data="item"></ObserverWrap>
        </div>
      </div>
      <FooterComp class="footer" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.no-scroll-bar {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .wrap-inner {
    width: calc(100vw + 17px);
    height: 100%;
    overflow-y: scroll;
  }
}
.cover {
  height: clamp(400px, 100vh, 1000px);
  background-image: url(../../assets/img/climbing-bg.jpg);
  background-size: cover;
  background-position: 50% 0%;
  position: relative;

}
.intro {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  height: 80vh;
  padding: 10vh 10vw;
}
.avatar {
  width: 360px;
  height: 360px;
  text-align: center;
  border: 4px solid #ccc;
  box-shadow: 0 0 4px 2px #00000033;

  >img {
    display: block;
    margin: 50px auto 20px;
    width: 150px;
    border-radius: 50%;
  }
  .my-name {
    font-size: 30px;
    color: #fff;
    line-height: 2em;
    display: block;
  }
  &:deep .intro-typed {
    color:rgb(255, 187, 0);
  }
}
.infos {
  width: 600px;
  color: white;
  text-shadow: 0px 0px 2px #00000066;
  .career-goal {
    color: #f4f4f4;
    font-size: 14px;
  }
  .division {
    width: 100%;
    height: 2px;
    background-color: #ccc;
    margin: 10px 0;
  }
  .info {
    font-size: 16px;
    line-height: 2em;
    >label {
      font-weight: bold;
      display: inline-block;
      width: 150px;
    }
    >span {
      display: inline-block;
      width: calc(100% - 150px);
    }
  }
}
.yiyan {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  min-width: 260px;
  max-width: 400px;
  >span {
    display: block;
    line-height: 1.4em;
  }
  .yiyan-content {
    font-size: 16px;
    text-align: left;
    text-indent: 2em;
    text-shadow: 0px 0px 2px #00000066;
  }
  .yiyan-author {
    font-size: 14px;
    text-align: right;
  }
  .icon {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    cursor: pointer;
  }
  &:hover .icon {
    display: block;
  }
}
.about-container {
  width: 100%;
  padding: 50px 80px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.time-line-wrap:deep .career-block:last-child .time-line {display:none}
.footer {
  margin-bottom: 16px;
}

@media screen and (max-width:750px) {
  .cover {
    min-height: 100vh;
    height: auto;
    .intro {height:auto}
  }
  .about-container {padding: 20px 20px 20px 0;}
}
</style>