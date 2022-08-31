import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer
])

const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$imgurl = 'https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/'