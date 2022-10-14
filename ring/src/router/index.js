import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        component: () => import('@/views/login')
    },
    {
        path:'/layout',
        // 路由重定向，就是用来显示进layout后的默认页面
        redirect: '/home',
        component: () => import('@/views/layout'),
        //路由嵌套，避免写多个页面以及加载新页面，直接在layout中用router-view路由出口
        children: [
          {
            path:'/home',
            component: () => import('@/views/home'),
          },
          {
            path:'/sort',
            component: () => import('@/views/sort'),
          },
          {
            path:'/cart',
            component: () => import('@/views/cart'),
          },
          {
            path:'/my',
            component: () => import('@/views/my'),
          }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router