# my-vue-router

## 路由配置文件 ./src/router/index.js

### 路由参数
>1: path:'/路由名/:参数名'    获取 {{$route.params.参数名}}

>2：传统参数方式: ？参数名=值&参数名=值  获取{{$route.query.参数名}}
 
 \<router-link class="linkBtn" :to="{path:'/user/Jabo',query:{age:18,gender:'male'}}"\>



## link-line 的配置与正常a标签类似
> \<router-link to="/" class="active" target="_blank"\>首页\</router-link\>


## 模拟跳转 
> 在Vue实例内部，可以通过$route访问路由实例   this.$router.push("/");


## 钩子函数

> ## 全局 -> main.js
router.beforeEach((to,from,next)=>{next()})

> ## 局部 -> router/index.js
beforeEnter:(to,from,next) => {next()}


## 命名视图
> \<router-view name="content"/\>

	{
	    path:'/forum',
	    name:'Forum',
	    //命名视图配置
	    components:{
	        //视图名：组件  
	        content:About,
	        nav:User
	    }
	}

## 元数据
> main.js 中
```
to.matched.some(function(item){
	return item.meta.isMeta;
})
```

> index.js
```
//元数据配置
meta:{
    isMeta:true
}
```




# 参考
1、[vue-router路由讲解](https://www.cnblogs.com/ye-hcj/p/7147697.html)

2、[vue路由详解](https://www.cnblogs.com/guangixn/p/7895809.html)

3、[Vue.js路由组件vue-router使用方法详解](https://www.jb51.net/article/98902.htm)