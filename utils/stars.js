export const Stars = {
  canvas: null,
  context: null,
  circleArray: [],
  colorArray: [
    '#4c1a22',
    '#4c1a23',
    '#5d6268',
    '#1f2e37',
    '#474848',
    '#542619',
    '#ead8cf',
    '#4c241f',
    '#d6b9b1',
    '#964a47',
  ],

  mouseDistance: 50,
  radius: 0.5,
  maxRadius: 1.5,

  //  MOUSE
  mouse: {
    x: undefined,
    y: undefined,
    down: false,
    move: false,
  },
  timer: undefined,

  //  INIT
  init: function (canvasId = 'stars', amount = 1000) {
    this.canvas = document.getElementById(canvasId)
    this.canvas.width = window.innerWidth - 1
    this.canvas.height = window.innerHeight - 1
    this.canvas.style.display = 'block'
    this.context = this.canvas.getContext('2d')

    if (!amount || isNaN(Number(amount))) amount = 600
    else if (Number(amount) > 1200) amount = 1200
    else if (Number(amount) < 100) amount = 100
    this.amount = Number(amount)

    window.addEventListener('mousemove', this.mouseMove)
    window.addEventListener('resize', this.resize)

    this.prepare()
    this.animate()
  },

  destroy: function () {
    cancelAnimationFrame(this.timer)
    window.removeEventListener('mousemove', this.mouseMove)
    window.removeEventListener('resize', this.resize)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },

  //  CIRCLE
  Circle: function (x, y, dx, dy, radius, fill) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = this.radius

    this.draw = function () {
      Stars.context.beginPath()
      Stars.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      Stars.context.fillStyle = fill
      Stars.context.fill()
    }

    this.update = function () {
      if (this.x + this.radius > Stars.canvas.width || this.x - this.radius < 0) this.dx = -this.dx
      if (this.y + this.radius > Stars.canvas.height || this.y - this.radius < 0) this.dy = -this.dy

      this.x += this.dx
      this.y += this.dy

      //  INTERACTIVITY
      if (
        Stars.mouse.x - this.x < Stars.mouseDistance &&
        Stars.mouse.x - this.x > -Stars.mouseDistance &&
        Stars.mouse.y - this.y < Stars.mouseDistance &&
        Stars.mouse.y - this.y > -Stars.mouseDistance
      ) {
        if (this.radius < Stars.maxRadius) this.radius += 1
      } else if (this.radius > this.minRadius) {
        this.radius -= 1
      }

      this.draw()
    }
  },

  //  PREPARE
  prepare: function () {
    this.circleArray = []

    for (var i = 0; i < this.amount; i++) {
      var radius = Stars.radius
      var x = Math.random() * (this.canvas.width - radius * 2) + radius
      var y = Math.random() * (this.canvas.height - radius * 2) + radius
      var dx = (Math.random() - 0.5) * 1.5
      var dy = (Math.random() - 1) * 1.5
      var fill = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]

      this.circleArray.push(new this.Circle(x, y, dx, dy, radius, fill))
    }
  },

  //  ANIMATE
  animate: function () {
    Stars.timer = requestAnimationFrame(Stars.animate)
    Stars.context.clearRect(0, 0, Stars.canvas.width, Stars.canvas.height)

    for (var i = 0; i < Stars.circleArray.length; i++) {
      var circle = Stars.circleArray[i]
      circle.update()
    }
  },

  //  MOUSE MOVE
  mouseMove: function (event) {
    Stars.mouse.x = event.x
    Stars.mouse.y = event.y
  },

  //  RESIZE
  resize: function () {
    Stars.canvas.width = window.innerWidth
    Stars.canvas.height = window.innerHeight
  },
}
