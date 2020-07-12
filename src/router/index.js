import Vue from 'vue'
import Router from 'vue-router'
import NavMenu from '@/components/NavMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavMenu',
      component: NavMenu
    }
  ]
})
