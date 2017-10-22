import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lobby',
      name: 'lobby',
      component: require('@/components/Lobby').default
    },
    {
      path: '/match',
      name: 'match',
      component: require('@/components/Match').default
    },
    {
      path: '/cards',
      name: 'cards',
      component: require('@/components/Cards').default
    },
    {
      path: '/decks',
      name: 'decks',
      component: require('@/components/Decks').default
    },
    {
      path: '/draft',
      name: 'draft',
      component: require('@/components/Draft').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/loadingPage',
      name: 'loadingPage',
      component: require('@/components/LoadingPage').default
    },
    {
      path: '*',
      redirect: '/loadingPage'
    }
  ]
})
