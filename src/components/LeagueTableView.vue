<template>
  <div>
    <h3>League Table</h3>

    <div>
      <a @click.prevent="getTable" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Get League Table
      </a>
    </div>
  </div>
</template>

<script>
  import parse from 'xml-parser'
  export default {
    methods: {
      getTable: function () {
//        this.$http.get('https://www.ulsterchess.org/competitions/competitions/comp-3025/cvt_event/standings/376').then(response => {
        this.$http.get('https://yesno.wtf/api').then(response => {
          console.log(response)
          debugger
          this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
        })
      }
    }
  }
</script>
