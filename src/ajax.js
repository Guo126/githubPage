import axios from 'axios'
import qs from 'qs' // qs这个包在install  axios 时就已经装了，因为 qs 是 axios 的依赖包
axios.defaults.withCredentials = true // 带cookie请求
axios.defaults.timeout = 5000 //  请求的超时时间 5000ms

axios.post = function (url, data = {}) {
  return axios({
    method: 'post', // 请求协议
    withCredentials: true, // true时，发送请求会带cookie,不需要带cookie可以设置false
    url: url, // 请求的地址
    data: qs.stringify(data), // post 请求的数据,很多人
    timeout: 5000, // 请求超时时间, 单位毫秒
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

axios.get = function (url, params = {}) {
  return axios({
    method: 'get', // 请求协议
    withCredentials: true, // true时，发送请求会带cookie,不需要带cookie可以设置false
    url, // 请求的地址
    params, // get 请求的数据
    timeout: 5000 // 请求超时时间, 单位毫秒
  })
}

axios.interceptors.response.use(response => {
  return response.data // 只拿后台返回的json数据
}, error => Promise.reject(error.response))

export default axios