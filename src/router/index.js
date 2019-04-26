import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'

import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
  ]
})
