<template>
  <div class="meta">
    {{pageName}}
    <router-link to="child" append>meta 子路由</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Meta',
  data () {
    return {
      pageName:"元数据"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
