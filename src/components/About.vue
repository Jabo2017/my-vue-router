<template>
  <div class="about">
    {{pageName}}
    <router-link to="about/child1">子孩子1</router-link>
    <router-view/>
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

</style>
