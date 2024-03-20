// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/jpg', href: '/icon.jpg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in', duration: 300 },
  },
  css: ['~/assets/css/index.css'],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // manualChunks: {
          //   echarts: ['echarts'],
          // }
          manualChunks: id => {
            if (id.includes('echarts')) return 'echarts'
          },
        },
      },
    },
  },
})
