<template>
  <div id="app">
    <router-link to="/" target="_blank">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/user/Jabo">大名</router-link>
    <router-link to="/user/Jabo?age=26">姓名年龄</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
