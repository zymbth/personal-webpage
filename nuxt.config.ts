// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    // transpile: [/echarts/],
    analyze: {
      analyzerMode: 'static'
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/jpg', href: '/icon.jpg' }
      ]
    }
  },
  // webpack: {
  //   analyze: { analyzerMode: 'static' },
  //   plugins: [
  //     new CompressionWebpackPlugin({
  //       filename: '[path].gz[query]',
  //       algorithm: 'gzip',
  //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //       threshold: 10240,
  //       minRatio: 0.8,
  //     })
  //   ]
  // }
  vite: {
    build: {
      rollupOptions: {
        output: {
          // manualChunks: {
          //   echarts: ['echarts'],
          // }
          manualChunks: (id) => {
            if(id.includes('echarts')) return 'echarts'
          } 
        }
      }
    }
  }
})
