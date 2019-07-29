import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Auth from '@/components/Auth'
import CustomerList from '@/components/CustomerList'
import CustomerCreate from '@/components/CustomerCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/customer-list',
      name: 'CustomerList',
      component: CustomerList
    },
     {
      path: '/customer-list/:msg',
      name: 'CustomerUpdatedList',
      component: CustomerList
    },
    {
      path: '/customer-create',
      name: 'CustomerCreate',
      component: CustomerCreate
    },
    {
      path: '/customer-create/:pk',
      name: 'CustomerUpdate',
      component: CustomerCreate
    },
      
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }

  ]
})
