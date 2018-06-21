// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局钩子函数 :跳转前
router.beforeEach((to,from,next)=>{
	//console.log(to);
	//console.log(from);
	//console.log(next());
	//next()  //正常执行:这个都有执行
	//next(false);
	//next()
	//next('/about')
	//next({path:'/about'})
	
	var isMeta = false;
	console.log(to.path)
	/*
	//存在问题： 子路由没过滤
	if(isMeta || to.path !="/meta"){
		next();
	}else{
		alert("请先meta开启");
		next(false);
	}
	*/

	//严谨做法
	// if(!isMeta && to.matched.some(function(item){
	// 	return item.path == '/meta';
	// })){
	// 	alert("请先meta开启");
	// 	next('/');
	// }else{
	// 	next();
	// }

	//更好的做法
	if(!isMeta && to.matched.some(function(item){
		return item.meta.isMeta;
	})){
		alert("请先meta开启");
		next('/');
	}else{
		next();
	}

})

//全局钩子函数：跳转后
router.afterEach((to,from)=>{
	console.log(to);
	console.log(from)
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
