
import {request} from '../utils/request'


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

export function sendMsg(mobile){
  
  request({
    url:`/app/v1_0/sms/codes/${mobile}`,
    method: 'get',
  })
}


// export const login = data => {
//   return request({
//     url: "/app/v1_0/authorizations",
//     method: "post",
//     data
//   })
// }