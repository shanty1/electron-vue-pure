import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/default-index/LandingPage').default // 等价  () => import('.......')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
