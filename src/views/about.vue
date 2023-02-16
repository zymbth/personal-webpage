<script setup>
import ObserverWrap from '@/components/observer-wrap.vue'
</script>
<template>
  <div class="about-container">
    <div style="background-color:aqua;height:100vh;"></div>
    <ObserverWrap root=".about-container" :invisibleStyle="{ transform: 'translateX(-500px)', opacity: 0 }">
      <div style="background-color:brown;height:100vh;"></div>
    </ObserverWrap>
    <ObserverWrap root=".about-container" :invisibleStyle="{ transform: 'translateX(100%)', opacity: 0 }">
      <div style="background-color:bisque;height:100vh;"></div>
    </ObserverWrap>
    <ObserverWrap root=".about-container" :invisibleStyle="{ transform: 'translateX(-100%)', opacity: 0 }">
      <div style="background-color:darkgreen;height:100vh;"></div>
    </ObserverWrap>
    <ObserverWrap root=".about-container" :invisibleStyle="{ transform: 'translateY(50%)', opacity: 0 }">
      <div style="background-color:darkmagenta;height:100vh;"></div>
    </ObserverWrap>
    <ObserverWrap root=".about-container" :invisibleStyle="{ transform: 'translateY(-50%)', opacity: 0 }">
      <div style="background-color:yellowgreen;height:100vh;"></div>
    </ObserverWrap>
  </div>
</template>
<style lang="scss" scoped>
.about-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>