<template>
    <div class="container">
        <h1>Todo List</h1>

        <p>
            <button @click="increment">Add Todo</button>
        </p>
        {{ count }}

        <div>
            <other></other>
        </div>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'counter',
    computed: mapState(['count']), // mapState saves having to write window.store
    methods: {
      ...mapActions(['increment']) // object rest spread transform https://babeljs.io/docs/plugins/transform-object-rest-spread/
    }
  }
</script>

<style>

</style>