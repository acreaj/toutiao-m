import request from '../utils/request'

export const getArticles = params => {
  return request ({
    method:'get',
    url: '/app/v1_1/articles',
    params
  })
}