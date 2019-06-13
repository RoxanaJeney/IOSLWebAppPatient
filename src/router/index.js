import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Vacc from '@/components/Vacc'

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
        component: Home
  },
  {
    path: '/vacc',
    name: 'Vacc',
    component: Vacc
},
  ]
})