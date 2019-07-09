import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import TopBar from '@/components/TopBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      components: {
        navigation: TopBar,
        default: Home
      }
    },
  ]
})