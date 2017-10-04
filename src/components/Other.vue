<template>
    <div>The value of the counter in the other component is: {{ count }}</div>
</template>

<script>
    export default {
      computed: {
        count () {
          return this.$store.state.count
        }
      }
    }
</script>