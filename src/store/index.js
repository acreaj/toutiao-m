import Vue from 'vue'
import Vuex from 'vuex'
import {getItem,setItem} from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse( window.localStorage.getItem('user'))
    // user: getItem('user')
  },
  mutations: {
    setUser (state,data) {

      state.user = data

       // 持久化数据层，保存到本地
      window.localStorage.setItem('user',JSON.stringify(state.user))
      
      // setItem(user,state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
