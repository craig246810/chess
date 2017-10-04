<template>
    <div>
        <h3>Upcoming Events</h3>

        <div id="content"></div>
    </div>

    <!--<div>-->
    <!--<h2>Upcoming Events</h2>-->
    <!--<div class="mdl-grid">-->
    <!--<div class="mdl-cell mdl-cell&#45;&#45;3-col mdl-cell mdl-cell&#45;&#45;1-col-tablet mdl-cell&#45;&#45;hide-phone"></div>-->
    <!--<div class="mdl-cell mdl-cell&#45;&#45;6-col mdl-cell&#45;&#45;4-col-phone">-->
    <!--<div v-for="upcoming_chess_event in getChessEvents()" class="image-card">-->
    <!--<div class="image-card__picture">-->
    <!--<img :src="upcoming_chess_event.pic_url"/>-->
    <!--</div>-->
    <!--<div class="image-card__comment mdl-card__actions">-->
    <!--<span>{{ upcoming_chess_event.description }}</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="actions">-->
    <!--<a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button&#45;&#45;raised mdl-button&#45;&#45;colored">-->
    <!--POST AN Event-->
    <!--</a>-->
    <!--</div>-->
    <!--&lt;!&ndash;<router-link class="add-picture-button mdl-button mdl-js-button mdl-button&#45;&#45;fab mdl-button&#45;&#45;colored"&ndash;&gt;-->
    <!--&lt;!&ndash;to="/upcoming-events">&ndash;&gt;-->
    <!--&lt;!&ndash;<i class="material-icons">add</i>&ndash;&gt;-->
    <!--</router-link>-->
    <!--</div>-->
</template>

<script>
  import data from '../data'
  export default {
    name: 'upcomingEvents',
    data: {
      events: []
    },
    methods: {
      getChessEvents () {
        return data.events
      },
      getUpcomingChessEvent () {
        let proxy = 'https://thingproxy.freeboard.io/fetch/'
        let ulsterChessWebsiteUrl = 'https://www.ulsterchess.org/events'

        this.$http.get(proxy + ulsterChessWebsiteUrl).then(response => {
          if (response.status === 200) {
            const cheerio = require('cheerio')

            const ch = cheerio.load(response.body)
            ch.prototype.logHtml = function () {
              console.log(this.html())
            }

            let newEvent = {
              name: '',
              when: '',
              where: '',
              url: '',
              contactName: '',
              contactNumber: ''
            }

            let getName = function () {
              let body = ch('#content-core dl')
              let href = body.find('.url').attr('href')

              return href
            }

            newEvent.name = getName()
          }
        })
      }
    },
    mounted () {
      this.getUpcomingChessEvent()
    }
  }
</script>
