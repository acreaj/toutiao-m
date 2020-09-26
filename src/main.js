import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件
import Vant from 'vant';

// 导入vant组件样式
import 'vant/lib/index.css';

// 自动设置rem基准值
import 'amfe-flexible'

// 导入全局样式
import './style/index.less'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

