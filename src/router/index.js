/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'


/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);


import Index from '../pages/index.vue'
import Sociology from '../pages/sociology.vue'
import Domestic from '../pages/domestic.vue'
import Entertainment from '../pages/entertainment.vue'
import Login from '../pages/login.vue'
import Person from '../pages/person.vue'
import Sports from '../pages/sports.vue'
import Register from '../pages/register.vue'
import Watch from '../pages/watch.vue'
import Search from '../pages/search.vue'


export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/sociology',
      component: Sociology
    },
    {
      path: '/domestic',
      component: Domestic
    },
    {
      path: '/entertainment',
      component: Entertainment
    },
    {
      path: '/login',
      component:Login
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/sports',
      component:Sports
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/watch',
      component:Watch
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
