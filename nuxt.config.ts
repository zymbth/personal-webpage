import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

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
  modules: ['@unocss/nuxt', 'nuxtjs-naive-ui'],
  build: {
    transpile: ['naive-ui', 'vueuc'],
  },
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
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
