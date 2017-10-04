<template>
  <div>
    <h2>Home Updated! again! :)</h2>

    <p>Welcome back {{ username }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      username () {
        return this.$store.getters.name
      }
    }
  }
</script>

<style>

</style>
