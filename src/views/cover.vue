<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import { copyToClipBoard } from '@/utils/common-methods.js'
import AvatarImg from '@/assets/img/p3_1_3.png'

const canvasEl = ref(), // canvas容器
  ctx = ref({}), // ctx
  dots = ref([]); // 粒子

const scale = ref(1); // 放大尺寸
const precision = ref(4); // 精度
const radius = ref(0.5); // 粒子半径

onMounted(() => {
  Stars.init()

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


var Stars = {
  canvas: null,
  context: null,
  circleArray: [],
  colorArray: [
    '#4c1a22', '#4c1a23', '#5d6268', '#1f2e37', '#474848',
    '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'
  ],

  mouseDistance: 50,
  radius: .5,
  maxRadius: 1.5,

  //  MOUSE
  mouse: {
    x: undefined,
    y: undefined,
    down: false,
    move: false
  },

  //  INIT
  init: function () {
    this.canvas = document.getElementById('stars');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = 'block';
    this.context = this.canvas.getContext('2d');

    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('resize', this.resize);

    this.prepare();
    this.animate();
  },

  //  CIRCLE
  Circle: function (x, y, dx, dy, radius, fill) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = this.radius;

    this.draw = function () {
      Stars.context.beginPath();
      Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      Stars.context.fillStyle = fill;
      Stars.context.fill();
    };

    this.update = function () {
      if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
      if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

      this.x += this.dx;
      this.y += this.dy;

      //  INTERACTIVITY
      if (Stars.mouse.x - this.x < Stars.mouseDistance && Stars.mouse.x - this.x > -Stars.mouseDistance && Stars.mouse.y - this.y < Stars.mouseDistance && Stars.mouse.y - this.y > -Stars.mouseDistance) {
        if (this.radius < Stars.maxRadius) this.radius += 1;
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }

      this.draw();
    };
  },

  //  PREPARE
  prepare: function () {
    this.circleArray = [];

    for (var i = 0; i < 1200; i++) {
      var radius = Stars.radius;
      var x = Math.random() * (this.canvas.width - radius * 2) + radius;
      var y = Math.random() * (this.canvas.height - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 1.5;
      var dy = (Math.random() - 1) * 1.5;
      var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];

      this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill));
    }
  },

  //  ANIMATE
  animate: function () {
    requestAnimationFrame(Stars.animate);
    Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height);

    for (var i = 0; i < Stars.circleArray.length; i++) {
      var circle = Stars.circleArray[i];
      circle.update();
    }
  },

  //  MOUSE MOVE
  mouseMove: function (event) {
    Stars.mouse.x = event.x;
    Stars.mouse.y = event.y;
  },

  //  RESIZE
  resize: function () {
    Stars.canvas.width = window.innerWidth;
    Stars.canvas.height = window.innerHeight;
  }
};

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
          <p @click="copyToClipBoard('ymzhaobth@foxmail.com')">ymzhaobth@foxmail.com</p>
        </div>
        <div class="links">
          <a class="link color-yellow" href="/about" target="_blank">About me</a>
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
  h1 {margin-bottom:50px;user-select:none}
  // .intro-typed {user-select:none}
  .infos {
    line-height: 2em;
    margin-bottom: 20px;
    >p {cursor:copy}
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