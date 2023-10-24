// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // build: {
  //   transpile: [/echarts/],
  // },
  app: {
    head: {
      // title: 'test'
      link: [
        { rel: 'icon', type: 'image/jpg', href: '/icon.jpg' }
      ]
    }
  }
})
