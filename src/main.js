import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')

app.config.globalProperties.$imgurl = 'https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/'