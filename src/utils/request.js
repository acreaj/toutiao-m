import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: "http://ttapi.research.itcast.cn",
    timeout: 5000
  })

  return instance(config)
}

// const request = axios.create({
//   baseURL: "http://ttapi.research.itcast.cn"
// })

// export default request