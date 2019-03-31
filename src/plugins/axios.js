import Vue from 'vue';
import axios from 'axios';

import vm from "../main"

axios.defaults.withCredentials=true;//统一携带凭证，用来反向跨域

//请求时拦截
axios.interceptors.request.use(function (config) {
  vm.loading = true;
  return config;  
}, function (error) {
  return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
  vm.loading = false;
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

window.axios=axios;
Vue.prototype.$axios=axios;

export default axios;