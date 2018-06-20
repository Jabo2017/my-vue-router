import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import About from '../components/About'
import User from '../components/User'
import Child1 from '../components/Child1'
import More from '../components/More'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children:[
      	{ path: '/about/child1', component: Child1 }
      ]
    },
    {
      path: '/user/:name',
      name: 'User',
      component: User,
      children:[]
    },

  ]
})
