// import Vue from 'vue';
// import axios from 'axios';
import qs from 'qs';

// const host = 'http://47.98.63.174';
const host = 'http://ymzhao.top';
const baseURL = host + '/demopj';
// axios.defaults.baseURL = host+'/demopj';
// Vue.prototype.baseURL = host+'/demopj';

axios.defaults.withCredentials = false;
//axios.defaults.timeout = 10000;


axios.interceptors.request.use(
  config => {
		return config;
  },
  err => {
    return Promise.reject(err); 
  }
)
axios.interceptors.response.use(
	res => {
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
    url: baseURL + url,
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

Vue.prototype.fetchGetDemo = fetchGet;
Vue.prototype.fetchPostDemo = fetchPost;