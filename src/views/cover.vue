<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import { copyToClipBoard } from '@/utils/common-methods.js'
import AvatarImg from '@/assets/img/p3_1_3.png'
import FooterComp from '@/components/footer.vue'
import { Stars } from '@/utils/stars.js'

const canvasEl = ref(), // canvas容器
  ctx = ref({}), // ctx
  dots = ref([]); // 粒子

const scale = ref(1); // 放大尺寸
const precision = ref(4); // 精度
const radius = ref(0.5); // 粒子半径

onMounted(() => {
  Stars.init('stars', 1000)

  new Typed('.intro-typed', {
    strings: ['前端开发工程师', 'Java开发工程师', '全栈开发工程师'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  ctx.value = canvasEl.value.getContext("2d");
  const img = document.createElement("img");
  img.src = AvatarImg
  img.onload = () => {
    particlizeImage(img);
  };
})

// 粒子化图片
function particlizeImage(img) {
  canvasEl.value.width = img.width * scale.value;
  canvasEl.value.height = img.height * scale.value;
  ctx.value.drawImage(img, 0, 0, img.width, img.height); // 参数 2、3：img 在 canvas 中的坐标
  const imgData = ctx.value.getImageData(0, 0, img.width, img.height); //复制画布上指定矩形的像素数据，RGBA的一维数组数据
  ctx.value.clearRect(0, 0, canvasEl.value.width, canvasEl.value.height);

  getDots(imgData, +precision.value, +radius.value, +scale.value);
  drawDots();
}
// 清空画布，清空粒子
function clearCanvas() {
  dots.value = [];
  canvasEl.value.width = canvasEl.value.width;
}
// 圆点构造函数
const Dot = function (centerX, centerY, radius, fillStyle) {
  this.x = centerX;
  this.y = centerY;
  this.radius = radius;
  this.fillStyle = fillStyle;
};
Dot.prototype = {
  paint: function () {
    ctx.value.save();
    ctx.value.beginPath();
    ctx.value.fillStyle = this.fillStyle;

    // arc(x, y, r, startAngle, endAngle, anticlockwise) 以x,y为圆心，以r为半径，从startAngle弧度开始到endAngle弧度结束，anticlosewise是布尔值，true表示逆时针，false表示顺时针，默认是顺时针
    ctx.value.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.value.fill();

    // ctx.value.fillRect(this.x, this.y, this.radius, this.radius)
    ctx.value.restore();
  },
};
/**
 * 从图像像素数据中获取粒子
 *
 * @param {Array} imgData 图像像素数据
 * @param {number} precision 精度
 * @param {number} radius 半径
 * @param {number} scale 缩放等级
 */
 function getDots(imgData, precision = 4, radius = 2, scale) {
  for (var x = 0; x < imgData.width; x += precision) {
    for (var y = 0; y < imgData.height; y += precision) {
      // y为行，x为列  每个像素点由RGBA四个数据组成
      var i = (y * imgData.width + x) * 4;
      if (
        !(
          imgData.data[i] >= 200 &&
          imgData.data[i + 1] >= 200 &&
          imgData.data[i + 2] >= 200
        ) &&
        imgData.data[i + 3] >= 128
      ) {
        const g = grayDegree(imgData.data[i],imgData.data[i+1],imgData.data[i+2])
        const opacity = g > 150 ? 1 : (0.2 + 0.8 * (g/150).toFixed(2))
        // console.log(opacity)
        // 有颜色值就渲染
        var dot = new Dot(
          x * scale,
          y * scale,
          radius,
          `rgba(
            ${imgData.data[i]},
            ${imgData.data[i + 1]},
            ${imgData.data[i + 2]},
            ${opacity || imgData.data[i + 3]}
          )`
        );
        dots.value.push(dot);
      }
    }
  }
}
// 添加粒子到画布上
function drawDots() {
  dots.value.forEach(function (item) {
    item.paint();
  });
}

/**
 * 计算rgb颜色深浅程度
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {number} g 值越小，颜色越深
 */
function grayDegree(r,g,b) {
  return r * 0.299 + g * 0.587 + b * 0.114
}

// TODO: https://ai.baidu.com/tech/imageprocess/selfie_anime
</script>

<template>
  <div class="wrapper">
    <canvas id="stars"></canvas>
    <canvas id="avatar" ref="canvasEl"></canvas>
    <div class="cover-content">
      <main>
        <h1>
          <span class="intro-typed"></span>
        </h1>
        <div class="infos">
          <span @click="copyToClipBoard('ymzhaobth@foxmail.com')">ymzhaobth@foxmail.com</span>
        </div>
        <div class="links">
          <a class="link color-yellow" href="/about">About me</a>
          <a class="link color-green" href="javascript:void;" target="_blank">Tell me a secret</a>
          <a class="link color-red" href="javascript:void;" target="_blank">View my resume</a>
        </div>
        <div class="footer-links color-yellow">
          <a class="link" href="https://github.com/zymbth" target="_blank">GitHub</a>
          <a class="link" href="https://twitter.com/z_ymin" target="_blank">Twitter</a>
          <a class="link" href="https://codepen.io/zymbth" target="_blank">Codepen</a>
          <a class="link" href="https://blog.csdn.net/ymzhaobth" target="_blank">CSDN</a>
        </div>
      </main>
      <FooterComp class="footer" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #ddd;
  text-align: left;
}
#stars {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #171a19;
}
#avatar {
  position: absolute;
  top: 10vh;
  right: 10vw;
  height: 80vh;
}
.cover-content {
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  z-index: 1;

  main {
    position: absolute;
    top: 168px;
    right: 0;
    bottom: 77px;
    left: 0;
    width: 100%;
    color: #fff;
  }
  .footer {
    position: absolute;
    bottom: 16px;
    text-align: center;
    width: 100%;
    opacity: 0.3;
    // color: rgba(255,255,255,0.2);
    // a {
    //   color: rgba(var(--link-color), 0.3);
    // }
  }
  h1 {margin-bottom:50px;user-select:none}
  // .intro-typed {user-select:none}
  .infos {
    line-height: 2em;
    margin-bottom: 20px;
    >span {cursor:copy}
  }
}

.color-yellow {--color:#e0a458}
.color-green {--color:#419d78}
.color-red {--color:#d9594c}
.link {
  display: inline-block;
  position: relative;
  text-decoration: none;
  user-select: none;
}
.links {
  .link {
    font-weight: 700;
    color: var(--color);

    &:not(:last-child) {margin-right:36px}
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 21px;
      height: 2px;
      content: ' ';
      z-index: -1;
      display: block;
      transition: all .7s cubic-bezier(0.19,1,0.22,1) 0s;
      background-color: var(--color);
    }
    &:hover::before {width:100%}
  }
}
.footer-links {
  position: absolute;
  bottom: 0;
  left: 0;

  .link {
    font-size: 12px;
    line-height: 21px;
    color: #aaa;

    &:not(:last-child) {margin-right:20px}
    &::before {
      position: absolute;
      left: 0;
      bottom: 2px;
      right: 0;
      height: 7px;
      background-color: rgba(255,255,255,.07);
      content: ' ';
      z-index: -1;
      display: block;
      transition: all .7s cubic-bezier(0.19,1,0.22,1) 0s;
    }
    &:hover {color: var(--color);}
    &:hover::before {
      bottom: -3.5px;
      height: 2px;
      background-color: var(--color);
    }
  }
}
</style>