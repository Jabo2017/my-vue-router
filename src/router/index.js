import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import About from '../components/About'
import User from '../components/User'
import Child1 from '../components/Child1'
import More from '../components/More'
import Meta from '../components/Meta'

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
      	{ path: 'child1', component: Child1 }
      ]
    },
    {
      //只有动态路由可以做到分页的效果
      path: '/user/:name',
      name: 'User',
      component: User,
      children:[
      	{path: 'more', component: More}
      ],
      //局部钩子函数
      beforeEnter:(to,from,next) => {
        if(!to.params.name){
          next("/about")
        }else{
          next()
        }
        
      }
    },
    {
      path:'/forum',
      name:'Forum',
      //命名视图配置
      components:{
          //视图名：组件  
          content:About,
          nav:User
      }

    },
    {
      path:'/meta',
      name:'Meta',
      component:Meta,
      //元数据配置
      meta:{
        isMeta:true
      },
      children:[
        {path:'child', component:More,beforeEnter:function(to,from,next){next();console.log(to);}}
      ],


    }

  ]
})
