<template>
  <div class="user">
    姓名：{{$route.params.name}}
    <template v-if="$route.query.age">
    	 年龄：{{$route.query.age}} {{$route.query.gender}}
    </template>
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
