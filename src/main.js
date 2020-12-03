import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import store from './store'
import i18n from './i18n/i18n'
import VueTypedJs from 'vue-typed-js'
import './utils/fetch'
// import IScrollView from 'vue-iscroll-view'
// import IScroll from 'iscroll'
// import XLSX from 'xlsx'

Vue.config.productionTip = false

//Vue.use(ElementUI);
Vue.use(VueTypedJs);
// Vue.use(IScrollView, IScroll);
// Vue.prototype.$XLSX = XLSX

Vue.prototype.imgurl = 'https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/';

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
