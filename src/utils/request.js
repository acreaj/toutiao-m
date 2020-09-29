import axios from 'axios'
import store from '../store/index'

// export function request(config){
//   const instance = axios.create({
//     baseURL: "http://ttapi.research.itcast.cn",
//     timeout: 5000
//   })

//   return instance(config)
// }

const request = axios.create({
  baseURL: "http://ttapi.research.itcast.cn"
})


request.interceptors.request.use(function (config) {
  let {user} = store.state

  // 如果用户已经登录
  if(user) {
    config.headers.Authorization = `Bearer ${user.token}`
    return config;
  }else{
    // 取消本次请求
    return config;
  }
  
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

export default request