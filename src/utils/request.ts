import axios from 'axios'

// 创建 axios 示例
const http = axios.create({
  timeout: 5000
})

// 请求拦截

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  config.headers = config.headers ?? {}
  let token: string | null = localStorage.getItem("token")
  if (!token) {
    return
  }
  config.headers['TOKEN'] = token
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http