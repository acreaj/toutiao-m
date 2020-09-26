import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/'),
    children:[
      {
        path:'',
        name: 'home',
        component: () => import('../views/home/')
      },
      {
        path:'/comment',
        name: 'comment',
        component: () => import('../views/comment')
      },
      {
        path:'/vedio',
        name: 'vedio',
        component: () => import('../views/vedio')
      },
      {
        path:'/profile',
        name: 'profile',
        component: () => import('../views/profile')
      }
    ]
  },
 
]

const router = new VueRouter({
  routes,
  // mode:history
})

export default router
