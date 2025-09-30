<template>
  <NConfigProvider inline-theme-disabled>
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NuxtPage />
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>
<style lang="scss">
body {
  margin: 0;
  width: 100%;
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: left;
  color: var(--tg-txt-color);
  margin: 0;
  padding: 0;
}

// page transition
.page-leave-active,
.page-enter-active {
  transition: all 0.2s linear;
}

// 添加一个过渡延迟，从而创建一个带渐进延迟的动画序列
.page-enter-active {
  transition-delay: 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(30px);
}

@media screen and (max-width: 750px) {
  @supports (height: 100dvh) {

    .no-scroll-bar,
    .wrapper {
      height: 100dvh;
    }
  }
}
</style>
