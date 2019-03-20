import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: r => require.ensure([], () => r(require('@/components/home/Home')), 'home')
    },
    {
      path: '/item',
      name: 'item',
      component: r => require.ensure([], () => r(require('@/components/item/Item')), 'item')
    },
    {
      path: '/score',
      name: 'score',
      component: r => require.ensure([], () => r(require('@/components/score/Score')), 'score')
    }
  ]
})
