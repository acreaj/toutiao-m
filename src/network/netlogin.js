
import request from '../utils/request'


export function login(data){
 
  return request({
    url:'/app/v1_0/authorizations',
    method: 'post',
    data
  })
  
  // .then(res=>{
  //   Toast.success('登录成功');
  // }).catch(res=>{
  //   Toast.fail('登录失败');
  //   console.log(res)
  // })
}

// 发送短信验证码
export function sendMsg(mobile){
  
  request({
    url:`/app/v1_0/sms/codes/${mobile}`,
    method: 'get',
  })
}

// 获取当前用户信息
export const getCurrentUser = () => {
  return request({
    method: 'get',
    url: "/app/v1_0/user"
  })
}

// 获取当前用户信息
export const getUserChannels = () => {
  return request({
    method: 'get',
    url: "/app/v1_0/user/channels"
  })
}

// export const login = data => {
//   return request({
//     url: "/app/v1_0/authorizations",
//     method: "post",
//     data
//   })
// }