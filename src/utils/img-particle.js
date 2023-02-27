export const ImageParticle = {

  init: function (canvasId, img) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')

    this.img = document.createElement('img')
    img.src = img
    img.onload = () => {
      this.particlizeImage()
    }
  },

  particlizeImage: function () {
    this.canvas.width = this.img.width * scale.value;
    this.canvas.height = this.img.height * scale.value;
    this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height); // 参数 2、3：img 在 canvas 中的坐标
    const imgData = this.ctx.getImageData(0, 0, this.img.width, this.img.height); //复制画布上指定矩形的像素数据，RGBA的一维数组数据
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
    getDots(imgData, +precision.value, +radius.value, +scale.value);
    drawDots();
  },

  // 圆点构造函数
  // Dot: function (centerX, centerY, radius, fillStyle) {
  //   this.x = centerX;
  //   this.y = centerY;
  //   this.radius = radius;
  //   this.fillStyle = fillStyle;
  // },
  // Dot.prototype = {
  //   paint: function () {
  //     ctx.value.save();
  //     ctx.value.beginPath();
  //     ctx.value.fillStyle = this.fillStyle;
  
  //     // arc(x, y, r, startAngle, endAngle, anticlockwise) 以x,y为圆心，以r为半径，从startAngle弧度开始到endAngle弧度结束，anticlosewise是布尔值，true表示逆时针，false表示顺时针，默认是顺时针
  //     ctx.value.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  //     ctx.value.fill();
  
  //     // ctx.value.fillRect(this.x, this.y, this.radius, this.radius)
  //     ctx.value.restore();
  //   },
  // }
}
