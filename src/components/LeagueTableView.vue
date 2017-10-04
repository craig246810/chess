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
                </tr>
                </thead>
                <tbody>
                <!--<div v-for="team in teams">-->
                <tr v-for="team in teams">
                    <td class="mdl-data-table__cell--non-numeric">{{team.position}}</td>
                    <td>{{team.name}}</td>
                    <td>{{team.won}}</td>
                    <td>{{team.drawn}}</td>
                    <td>{{team.lost}}</td>
                </tr>
                <!--</div>-->
                </tbody>
            </table>
        </div>

    </div>

</template>

<script>
  module.exports = {
    name: 'leagueTable',
    data: function () {
      return {
        teams: []
      }
    },
    methods: {
      addTeam: function (team) {
        this.teams.push(team)
      },
      getTable: function () {
        let proxy = 'https://thingproxy.freeboard.io/fetch/'
        this.$http.get(proxy + 'https://www.ulsterchess.org/competitions/competitions/comp-3025/cvt_event/standings/376').then(response => {
          const cheerio = require('cheerio')
          const ch = cheerio.load(response.body)

          let teams = ch('.listing tr').map(function (index, element) {
            let team = {
              position: null,
              name: '',
              won: 0,
              drawn: 0,
              lost: 0
            }

            if (ch(element).find('td b').html() !== null) {
              team.position = ch(element).find('td b').html()

              if (ch(element).find('td:nth-child(2)').text() !== null && ch(element).find('td:nth-child(2)').text() !== '') {
                let name = ch(element).find('td:nth-child(2)').text()
                team.name = name.substr(name.lastIndexOf('(') + 1).replace(/\)/, '')
              }

              if (ch(element).find('.winner').html() !== null) {
                team.won = ch(element).find('.winner').html()
              }

              if (ch(element).find('.winner').html() !== null) {
                team.drawn = ch(element).find('.draw').html()
              }

              if (ch(element).find('.loss').html() !== null) {
                team.lost = ch(element).find('.loss').html()
              }

              if (team.position) {
                return team
              }
            }
          })

          for (let i = 0; i < teams.length; i++) {
            if (teams[i].position > 0) {
              this.addTeam(teams[i])
            }
          }
        })
      }
    },
    mounted: function () {
      this.getTable()
    }
  }
</script>

<style>
    .card {
        padding: 40px 28px;
        padding-top: 40px;
        padding-right: 28px;
        padding-bottom: 40px;
        padding-left: 28px;
    }
</style>

<!--
<table class="listing">
    <thead>
    <tr>
        <th>rank</th>

        <th>Team</th>
        <th>played</th>
        <th>wins</th>
        <th>draws</th>
        <th>losses</th>
        <th>adjust</th>
        <th>points</th>
        <th>%</th>
    </tr>
    </thead>
    <tbody>

    <tr class="odd">
        <td>
            <b>1</b>
        </td>
        <td><img src="icons/honour-silver.png" alt="winner" title="Competition winner Trophy: Silver King"/>
            Ballynafeigh 1
            (Ballynafeigh)
        </td>
        <td align="RIGHT">
            <form action="cvt_event/standings/376/list/315#gameslist" method="POST">
                <button type="SUBMIT" title="View 16 game results">
                    <img src="icons/players2.gif" alt="games"/> view <b>16</b> games
                </button>
            </form>
        </td>
        <td align="RIGHT" class="winner">12</td>
        <td align="RIGHT" class="draw">2</td>
        <td align="RIGHT" class="loss">2</td>
        <td align="RIGHT">

        </td>
        <td align="RIGHT"><b>81.5</b></td>
        <td align="RIGHT" class="discreet">
            <span>73</span>
        </td>
    </tr>

    ch('.listing tr').each(function (index, element, more) {
    debugger
    })

    <tr class="even">
        <td>
            <b>2</b>
        </td>
        <td>
            Muldoons 1
            (Mallusk)
        </td>
        <td align="RIGHT">
            <form action="cvt_event/standings/376/list/310#gameslist" method="POST">
                <button type="SUBMIT" title="View 16 game results">
                    <img src="icons/players2.gif" alt="games"/> view <b>16</b> games
                </button>
            </form>
        </td>
        <td align="RIGHT" class="winner">12</td>
        <td align="RIGHT" class="draw">2</td>
        <td align="RIGHT" class="loss">2</td>
        <td align="RIGHT">

        </td>
        <td align="RIGHT"><b>80.0</b></td>
        <td align="RIGHT" class="discreet">
            <span>71</span>
        </td>
    </tr>

    <tr class="odd">
        <td>
            <b>3</b>
        </td>
        <td>
            QUB 1
            (QUB)
        </td>
        <td align="RIGHT">
            <form action="cvt_event/standings/376/list/264#gameslist" method="POST">
                <button type="SUBMIT" title="View 16 game results">
                    <img src="icons/players2.gif" alt="games"/> view <b>16</b> games
                </button>
            </form>
        </td>
        <td align="RIGHT" class="winner">6</td>
        <td align="RIGHT" class="draw">2</td>
        <td align="RIGHT" class="loss">8</td>
        <td align="RIGHT">

        </td>
        <td align="RIGHT"><b>50.5</b></td>
        <td align="RIGHT" class="discreet">

            <span>45</span>
        </td>
    </tr>

    <tr class="even">
        <td>
            <b>4</b>
        </td>
        <td>
            The A team
            (Belfast South)
        </td>
        <td align="RIGHT">
            <form action="cvt_event/standings/376/list/318#gameslist" method="POST">
                <button type="SUBMIT" title="View 16 game results">
                    <img src="icons/players2.gif" alt="games"/> view <b>16</b> games
                </button>
            </form>
        </td>
        <td align="RIGHT" class="winner">3</td>
        <td align="RIGHT" class="draw">1</td>
        <td align="RIGHT" class="loss">12</td>
        <td align="RIGHT">

        </td>
        <td align="RIGHT"><b>34.5</b></td>
        <td align="RIGHT" class="discreet">
            <span>31</span>
        </td>
    </tr>

    <tr class="odd">
        <td>
            <b>5</b>
        </td>
        <td>
            Ballynafeigh 2
            (Ballynafeigh)
        </td>
        <td align="RIGHT">
            <form action="cvt_event/standings/376/list/316#gameslist" method="POST">
                <button type="SUBMIT" title="View 16 game results">
                    <img src="icons/players2.gif" alt="games"/> view <b>16</b> games
                </button>
            </form>
        </td>
        <td align="RIGHT" class="winner">2</td>
        <td align="RIGHT" class="draw">3</td>
        <td align="RIGHT" class="loss">11</td>
        <td align="RIGHT">

        </td>
        <td align="RIGHT"><b>33.5</b></td>
        <td align="RIGHT" class="discreet">
            <span>30</span>
        </td>
    </tr>
    </tbody>
</table>-->
