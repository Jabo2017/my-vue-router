<template>
  <div class="user">
    姓名：{{$route.params.name}}
    <template v-if="$route.query.age">
    	 年龄：{{$route.query.age}} -- {{$route.query.gender}}
    </template>
     <!-- 动态路由：方式1 -->
     <!-- <router-link :to="'/user/'+$route.params.name+'/more'">Child</router-link> -->
     <!-- 方式2：第二次点击又回重复添加 -->
     <div class="subNav">
      <router-link to="more" append>追加子页面</router-link>
    </div>

    <div class="subContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      pageName:"大名"
    }
  },

  mounted(){
    const obj = this.$route.params;
    console.log(obj)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subNav{
    margin:30px 0;
    background-color: #999;
  }

  .subContent{
    padding: 30px 20px;
  }
</style>
