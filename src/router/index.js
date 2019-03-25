import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
