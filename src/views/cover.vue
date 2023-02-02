<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'

onMounted(() => {
  Stars.init()

  new Typed('.intro-typed', {
    strings: ['前端开发工程师', 'Java开发工程师', '全栈开发工程师'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})

var Stars = {
  canvas: null,
  context: null,
  circleArray: [],
  colorArray: ['#4c1a22', '#4c1a23', '#5d6268', '#1f2e37', '#474848', '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'],

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

// TODO: https://ai.baidu.com/tech/imageprocess/selfie_anime
</script>

<template>
  <div class="wrapper">
    <canvas id="stars"></canvas>
    <div class="cover-content">
      <main>
        <h1>
          <span class="intro-typed"></span>
        </h1>
        <div class="infos">
          <p>ymzhaobth@foxmail.com</p>
        </div>
        <div class="links">
          <a class="link color-yellow" href="javascript:void;" target="_blank">View my bucket list</a>
          <a class="link color-green" href="javascript:void;" target="_blank">Tell me asecret</a>
          <a class="link color-red" href="javascript:void;" target="_blank">Download my resume</a>
        </div>
        <div class="footer-links color-yellow">
          <a class="link" href="javascript:void;" target="_blank">WeChart</a>
          <a class="link" href="https://twitter.com/z_ymin" target="_blank">Twitter</a>
          <a class="link" href="https://codepen.io/zymbth" target="_blank">Codepen</a>
          <a class="link" href="https://github.com/zymbth" target="_blank">GitHub</a>
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
  h1 {margin-bottom:50px}
  .infos {
    line-height: 2em;
    margin-bottom: 20px;
  }
}

.color-yellow {--color:#e0a458}
.color-green {--color:#419d78}
.color-red {--color:#d9594c}
.links {
  .link {
    font-weight: 700;
    display: inline-block;
    position: relative;
    color: var(--color);
    text-decoration: none;

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
    display: inline-block;
    position: relative;
    text-decoration: none;

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