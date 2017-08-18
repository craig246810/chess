<template>
  <div>
    <h2>Upcoming Events</h2>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="upcoming_chess_event in getChessEvents()" class="image-card">
          <div class="image-card__picture">
            <img :src="upcoming_chess_event.pic_url"/>
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span>{{ upcoming_chess_event.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        POST AN Event
      </a>
    </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored"
                 to="/upcoming-events">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  import data from '../data'
//  import parse from 'xml-parser'
  export default {
    mounted () {
//      this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
//        this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
//      })
    },
    methods: {
      getChessEvents () {
        return data.events
      },
      postCat () {
        this.$root.$firebaseRefs.chess.push(
          {
            'url': 'https://i.pinimg.com/736x/3a/1d/cc/3a1dcce0ab5f9d00a5b1b868d37229e4--chess-pieces-chess-sets.jpg',
            'comment': ' a comment',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'))
      },
      getUpcomingChessEvent () {
        if (navigator.onLine) {
          this.saveChessToCache()
          // get chess events
          return this.$root.chess
        } else {
          // serve from cache
          return JSON.parse(localStorage.getItem('chess'))
        }
      },
      saveChessEvent () {
        this.$root.$firebaseRefs.chess.once('value', (snapchot) => {
          localStorage.setItem('chess', JSON.stringify(snapchot.val()))
        })
      }
    }
  }
</script>

<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }

  .image-card {
    position: relative;
    margin-bottom: 8px;
  }

  .image-card__picture > img {
    width: 100%;
  }

  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }

  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>
