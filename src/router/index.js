import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: '首页',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/achievement',
    name: '公司业绩',
    component: () => import('@/views/achievement.vue')
  },
  {
    path: '/companystyle',
    name: '企业风采',
    component: () => import('@/views/companyStyle.vue')
  },
  {
    path: '/aboutus',
    name: '关于我们',
    component: () => import('@/views/aboutUs.vue')
  }
]

export default new Router({
  routes
})
