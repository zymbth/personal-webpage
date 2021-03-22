// import Vue from 'vue';
// import axios from 'axios';
import qs from 'qs';
//import router from '@/router';

// const host = 'http://47.98.63.174';
// const host = 'http://ymzhao.top';
// const baseURL = host + '/website';
// const baseURLDemo = host + '/demopj';
const host = 'http://192.168.0.179';
const baseURL = host + ':13145';
const baseURLDemo = host + ':13146';
// Vue.prototype.baseURL = host+'/website';
// axios.defaults.baseURL = 'https://assets8.lottiefiles.com'; // lottie专用

axios.defaults.withCredentials = false;
axios.defaults.timeout = 2500;


axios.interceptors.request.use(
  config => {
	// var se = localStorage.getItem("se");
//	if(!se) router.replace("/login");
	const se = localStorage.getItem("se")
	config.headers.Authoritization = se
	return config;
  },
  err => {
    return Promise.reject(err); 
  }
)
axios.interceptors.response.use(
	res => {
		/*var errorcode = res.data.errorcode;
		if(errorcode <= 4 && errorcode > 0) {
      let route = router.history.current.fullPath
      let parent_route = { 
        route
      }
      if (route != '/login') sessionStorage.setItem('parent_route', JSON.stringify(parent_route));
      if(localStorage.se != "") localStorage.se="";
			router.replace("/login");
		}
		if(errorcode == 5) router.replace("/registerBind");*/
    return res;
  },
  err => {
    return Promise.reject(err);
  }
)
const fetch = (url, method, data, baseUrl) => {
  data = data ? data : {};
  // var se = localStorage.se;
  // data.se = se;
	
  let httpDefaultOpts = { //http默认配置
    method: method,
    url: baseUrl + url,
    params:data,
    data:qs.stringify(data),
    headers: method=='get'?{
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    }:{
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }
 
  if(method =='get'){
    delete httpDefaultOpts.data;
  }else{
    delete httpDefaultOpts.params;
  }
    
  let promise = new Promise(function(resolve, reject) {
    axios(httpDefaultOpts).then(
      res => {
        resolve(res);
      }
    ).catch(
      res => {
        reject(res);
      }
    )
  })
  return promise;
}

const fetchGet = (url, data) => {
	return fetch(url, "get", data, baseURL);
}
const fetchPost = (url, data) => {
	return fetch(url, "post", data, baseURL);
}

const fetchGetDemo = (url, data) => {
	return fetch(url, "get", data, baseURLDemo);
}
const fetchPostDemo = (url, data) => {
	return fetch(url, "post", data, baseURLDemo);
}

//Vue.prototype.Axios = axios; //用于上传
Vue.prototype.fetchGet = fetchGet;
Vue.prototype.fetchPost = fetchPost;

Vue.prototype.fetchGetDemo = fetchGetDemo;
Vue.prototype.fetchPostDemo = fetchPostDemo;