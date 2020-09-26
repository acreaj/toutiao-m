// 获取本地存储的数据
export const getItem = name => {
  let data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  }catch(rs){
    return data
  }
}

// 设置本地存储的数据
export const setItem = (name,value) => {
  if(typeof value == 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(naem,value)

}

// 移出数据
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
