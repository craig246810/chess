import Vue from 'vue'
import Router from 'vue-router'
import UpcomingEventsView from '@/components/UpcomingEventsView'
import HomeView from '@/components/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upcoming-events/',
      name: 'upcomingEvents',
      component: UpcomingEventsView
    }
  ]
})
