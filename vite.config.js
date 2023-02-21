import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from "rollup-plugin-visualizer"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// const path = require('path')
import * as path from 'path'

const plugins = [
  vue(),
  viteCompression(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
]
if (process.env.NODE_ENV === "production") {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  )
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // server: {
  //   host: '192.168.1.6',
  //   post: '13145'
  // }
})
