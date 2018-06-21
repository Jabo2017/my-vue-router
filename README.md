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