<template>
  <div class="about">
    {{pageName}}
    
    <div class="subNav">
      <router-link class="linkBtn" to="about/child1">子孩子1</router-link>
    </div>
    <div class="subContent">
       <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      pageName:"关于我们"
    }
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
