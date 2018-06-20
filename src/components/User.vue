<template>
  <div class="user">
    姓名：{{$route.params.name}}
    <template v-if="$route.query.age">
    	 年龄：{{$route.query.age}} {{$route.query.gender}}
    </template>
     <!-- 动态路由：方式1 -->
     <!-- <router-link :to="'/user/'+$route.params.name+'/more'">Child</router-link> -->
     <!-- 方式2：第二次点击又回重复添加 -->
     <router-link to="more" append>追加</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      pageName:"大名"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
