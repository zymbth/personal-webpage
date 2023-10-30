<script setup>
// import { computed, inject } from 'vue'
// import { copyToClipBoard } from '@/utils/common-methods.js'
// import TypedCareer from '@/components/typed-career.vue'
// import YiyanComp from './yiyan.vue'

const scrollTop = inject('scrollTop')
const bgPosi = computed(() => Math.max(0, Math.floor(scrollTop.value / 2)) + 'px')
</script>
<template>
  <!-- 封面 -->
  <div class="cover">
    <!-- Brief Self-Intro -->
    <div class="intro">
      <div class="avatar">
        <img src="/icon.jpg" />
        <div class="profession">
          <span class="my-name">赵跃旻</span>
          <TypedCareer />
        </div>
      </div>
      <div class="infos">
        <h1>Career Goal</h1>
        <p class="career-goal">
          不断提升前端技术能力，提高代码质量，学习最新的技术以适应不断变化的市场需求。
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
          <span @click="copyToClipBoard('ymzhaobth@foxmail.com')" style="cursor: copy"
            >ymzhaobth@foxmail.com</span
          >
        </div>
        <div class="info">
          <label>WEBSITE</label>
          <span>ymzhao.work</span>
        </div>
      </div>
    </div>
    <!-- Yi Yan -->
    <Yiyan />
  </div>
</template>
<style lang="scss" scoped>
.cover {
  min-height: clamp(400px, 100vh, 1000px);
  // background-image: url(../../../assets/img/climbing-bg.jpg);
  background-image: url(~/assets/img/climbing-bg.jpg);
  background-size: cover;
  background-position-x: 50%;
  background-position-y: v-bind(bgPosi);
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  // transform: background-position-y 0.05s ease-in-out;
}
.intro {
  display: flex;
  justify-content: space-evenly;
  // flex-wrap: wrap;
  align-content: center;
  align-items: center;
  height: 80vh;
  padding: 10vh 10vw;
}
.avatar {
  width: 300px;
  text-align: center;
  // border: 4px solid #ccc;
  // box-shadow: 0 0 4px 2px #00000033;

  > img {
    display: block;
    margin: 50px auto 20px;
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 0 4px 2px #00000033;
  }
  .my-name {
    font-size: 36px;
    color: #fff;
    line-height: 2em;
    display: block;
  }
  &:deep .intro-typed,
  &:deep .typed-cursor {
    color: rgb(255, 187, 0);
    text-shadow: 0px 0px 1px #000000;
  }
}
.infos {
  width: 550px;
  color: white;
  text-shadow: 1px 1px 3px #000000;
  > h1 {
    text-shadow: 3px 3px 3px #0ea4eb;
  }
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
    > label {
      font-weight: bold;
      display: inline-block;
      width: 150px;
    }
    > span {
      display: inline-block;
      width: calc(100% - 150px);
    }
  }
}
@media screen and (max-width: 920px) {
  .cover {
    // min-height: 100vh;
    // height: auto;
    background-position-x: 72%;
    .intro {
      height: auto;
      flex-direction: column;
    }
    .avatar {
      display: flex;
      align-items: center;
    }
    .profession {
      width: 180px;
    }
  }
  .infos {
    width: 88vw;
  }
}
</style>
