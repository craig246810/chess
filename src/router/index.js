import Vue from 'vue'
import Router from 'vue-router'
import UpcomingEventsView from '@/components/UpcomingEventsView'
import HomeView from '@/components/HomeView'
import LeagueTableView from '@/components/LeagueTableView'
import MyGamesView from '@/components/MyGamesView'
import ImproveView from '@/components/ImproveView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-games',
      name: 'myGames',
      component: MyGamesView
    },
    {
      path: '/improve',
      name: 'improve',
      component: ImproveView
    },
    {
      path: '/upcoming-events/',
      name: 'upcomingEvents',
      component: UpcomingEventsView
    },
    {
      path: '/league-table/',
      name: 'leagueTable',
      component: LeagueTableView
    }
  ]
})
