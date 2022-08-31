<!-- 第3页 -->
<template>
  <div class="section-container">
    <div class="container-1">
      <div
        v-for="catalog in catalogDatas"
        :class="catalog.flag ? 'catalog-container' : 'catalog-container-1'"
        :title="catalog.title"
        @click="goTo(catalog.path)"
        @mouseenter="catalog.flag = false"
        @mouseleave="catalog.flag = true"
      >
        <img style="width: 100%; height: 100%" :src="catalog.imgSrc" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import img_myspace from '@/assets/img/myspace.png'
import img_notes from '@/assets/img/notes.png'
import img_works from '@/assets/img/works.png'
import img_plugs from '@/assets/img/plugs.png'

const $router = useRouter()

const catalogDatas = [{
  title: '我的空间',
  path: 'plus',
  imgSrc: img_myspace,
  flag: true
},{
  title: '笔记',
  path: 'notes',
  imgSrc: img_notes,
  flag: true
},{
  title: '作品',
  path: 'works',
  imgSrc: img_works,
  flag: true
},{
  title: '插件',
  path: 'plugs',
  imgSrc: img_plugs,
  flag: true
}]

function goTo(routeName) {
  $router.push({ name: routeName })
}
</script>

<style lang='scss' scoped>
@keyframes test {
  0% {transform: translateX(0);}
  100% {transform: translateX(40);}
}
@keyframes test1 {
  0% {transform: scale(1);}
  100% {transform: scale(2);}
}
.section-container {
  background-color: rgba(0,0,0,0);
  background: url(https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/bg4.jpg) no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size:cover;
}
.container-1 {
  background-color: #0078ff50;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
@keyframes inblockAnimation {
  0% {border-radius: 0 10px;transform: scale(1);}
  100% {border-radius: 10px 0;transform: scale(1.05);}
}
@keyframes outblockAnimation {
  0% {border-radius: 10px 0;transform: scale(1.05);}
  100% {border-radius: 0 10px;transform: scale(1);}
}
.catalog-container {
  cursor: pointer;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 0 50px;
    color: #fff;
    box-sizing: border-box;
  background-color: #16a085;
  border-radius: 10px 0;
  /* transition-duration: 0.5s; */
  animation: outblockAnimation 0.3s 1 ease;
  animation-fill-mode:forwards;
}
.catalog-container-1 {
  cursor: pointer;
  height: 80px;
  width: 80px;
  padding: 20px;
  margin: 0 50px;
    color: #fff;
    box-sizing: border-box;
  background-color: #16a085;
  border-radius: 0 10px;
  /* transition-duration: 0.5s; */
  animation: inblockAnimation 0.3s 1 ease;
  animation-fill-mode:forwards;
}
</style>