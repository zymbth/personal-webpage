import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
//import router from '@/router';

//var host = 'http://localhost:13145';
//axios.defaults.baseURL = host+'/website';
//Vue.prototype.baseURL = host+'/website';

//var host = 'http://172.16.231.174';
var host = 'http://47.98.63.174';
axios.defaults.baseURL = host+'/website';
Vue.prototype.baseURL = host+'/website';

axios.defaults.withCredentials = false;
//axios.defaults.timeout = 10000;


axios.interceptors.request.use(
  config => {
//	var se = localStorage.getItem("se");
//	if(!se) router.replace("/login");
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
const fetch = (url, method, data) => {
  data = data ? data : {};
  
  var se = localStorage.se;
  data.se = se;
	
  let httpDefaultOpts = { //http默认配置
    method: method,
    url: url,
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
	return fetch(url, "get", data);
}
const fetchPost = (url, data) => {
	return fetch(url, "post", data);
}

//Vue.prototype.Axios = axios; //用于上传
Vue.prototype.fetchGet = fetchGet;
Vue.prototype.fetchPost = fetchPost;