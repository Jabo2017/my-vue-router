<template>
  <div id="app">
    <div class="navBox">
      <router-link class="linkBtn" to="/">首页</router-link>
      <router-link class="linkBtn" target="_blank" to="/about" >关于我们</router-link>
      <router-link class="linkBtn" to="/user/Jabo">大名</router-link>
      <router-link class="linkBtn" to="/user/Jabo?age=26">姓名年龄</router-link>
      <router-link class="linkBtn" :to="{path:'/user/Jabo',query:{age:18,gender:'male'}}">
      推荐方式:感觉很装逼</router-link>
      <router-link class="linkBtn" :to="{path:'/about',query:{id:aId}}">动态参数</router-link>
      <router-link class="linkBtn" to="/forum">命名视图</router-link>

      <router-link class="linkBtn" to="/meta">元数据meta</router-link> 
      <button @click="ms">按钮模拟跳转</button>
    </div>
    <div class="content">
      <router-view/>
      <router-view name="nav"/>
      <router-view name="content"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      aId:10
    }
  },
  methods:{
    ms(){
      var _this = this;
      setTimeout(function(){
        //在Vue实例内部，可以通过$route访问路由实例
        _this.$router.push("/");
        setTimeout(function(){
          //指定路由名方式
          _this.$router.push({name:'User',params:{name:"Jack",gender:"male"}});
        },2000)
      },100)
    }
  }
}

</script>

<style>
  *{
    padding: 0;
    margin:0;
  }
 .navBox{
  line-height: 32px;
  background-color: #f00;
 }

 .linkBtn{
   display: inline-block;
   padding: 10px 14px;
 }

 .linkBtn:hover{
  background-color: #f66;
 }

 .content{
  padding: 30px 20px;
 }

</style>
