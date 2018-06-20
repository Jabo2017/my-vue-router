<template>
  <div class="child1">
    {{pageName}}
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      pageName:"子页面1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
