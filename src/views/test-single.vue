<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.addEventListener("scrollEnd", () => console.log("scrolling ended!"));
onMounted(() => {
  let speed = 100

  /*  SCENE 1 */
  // let scene1 = gsap.timeline()
  var tl = gsap.timeline(/* { repeat: 2, repeatDelay: 1 } */)
  ScrollTrigger.create({
    animation: tl,
    trigger: '.scrollElement',
    // scroller: '.rolling-vision',
    start: 'top top',
    end: '45% 100%',
    scrub: 3,
  })
  tl.to('#cloud4', { x: -100, duration: 1 })
  tl.to('#cloud4', { y: -50, duration: 1 })
  tl.to('#cloud4', { opacity: 0, duration: 1 })
  // then we can control the whole thing easily...
  // tl.pause()
  // tl.resume()
  // tl.seek(1.5)
  // tl.reverse()
})
//reset scrollbar position after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

function handleScroll(e) {
  // console.log('scrolled')
}
</script>
<template>
  <div class="fst-block">BLOCK</div>
  <div class="rolling-vision" @scroll="handleScroll">
    <div id="testB"></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 750 500"
      preserveAspectRatio="xMidYMax slice">
      <defs>
        <radialGradient id="bg_grad" cx="375" cy="-35" r="318.69" gradientUnits="userSpaceOnUse">
          <stop offset="0.1" stop-color="#F5C54E" id="sun" />
          <stop offset="0.1" stop-color="#FFDBA6" />
          <stop offset="0.0" stop-color="#F7BB93" />
          <stop offset="0.0" stop-color="#F2995E" />
          <stop offset="0.0" stop-color="#f07560" />
          <stop offset="0.8" stop-color="#FFAB93" />
        </radialGradient>
      </defs>

      <rect id="bg" width="750" height="500" opacity="0.8" fill="url(#bg_grad)" />

      <g id="clouds" fill="#fefefe">
        <path
          id="cloud4"
          transform="translate(0 0)"
          d="M402.34,341.68c9.9-10.24,23.76-7.43,36.05-5.48C448,332,458.88,329,468.9,334c-.95-7.91,8.65-14.92,15.9-11.61-3.34-11.77,13-13.9,20.53-8.34A13.53,13.53,0,0,1,522,310.16c2.64-18.11,27.85-24.13,38.38-9.17,3.54-5.51,12.12-6.88,17.2-2.74,6.59-43.22,70.78-27.93,65.83,12.62,14.7-4.43,32,6.72,34.08,21.93,5.76-2.23,29.28,1,21.76,9.26" />
      </g>
    </svg>

    <div class="scrollElement" @scroll="handleScroll"></div>
  </div>
</template>
<style lang="scss" scoped>
.fst-block {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color:aquamarine;
  z-index: 2;
}
.rolling-vision {
  position: relative;
  // height: 100%;
  overflow: auto;
  #testB {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    background-color: red;
    z-index: 2;
  }

  svg {
    display: block;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .scrollElement {
    height: 6000px;
    width: 100%;
    // position: absolute;
    // top: 0;
    // z-index: 1;
  }
}
// .rolling-vision::-webkit-scrollbar {
//   display: none;
// }
</style>
<style lang="scss">
body,
html,
#app,
.rolling-vision {
  margin: 0;
  padding: 0;
  // height: 100%;
  overflow:auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
