<template>
  <div>
    <h3>League Table</h3>

    <div class="card">
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Rank</th>
          <th>Team</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">1</td>
          <td>Ballynafeigh 3</td>
          <td>14</td>
          <td>5</td>
          <td>2</td>
          <td>97.5</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">2</td>
          <td>QUB 2</td>
          <td>11</td>
          <td>5</td>
          <td>5</td>
          <td>86.5</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">3</td>
          <td>Kellys Heroes</td>
          <td>10</td>
          <td>4</td>
          <td>7</td>
          <td>80</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">4</td>
          <td>NICS Stormont</td>
          <td>10</td>
          <td>4</td>
          <td>7</td>
          <td>80</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">5</td>
          <td>Fruithill</td>
          <td>10</td>
          <td>2</td>
          <td>9</td>
          <td>77</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">6</td>
          <td>Webbs</td>
          <td>6</td>
          <td>5</td>
          <td>10</td>
          <td>66</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">7</td>
          <td>Muldoons 2</td>
          <td>2</td>
          <td>7</td>
          <td>12</td>
          <td>51.5</td>
        </tr>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">8</td>
          <td>Ballynafeigh 4</td>
          <td>4</td>
          <td>2</td>
          <td>15</td>
          <td>48.5</td>
        </tr>
        </tbody>
      </table>
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
