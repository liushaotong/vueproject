// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false

const test = require('./components/test.vue');

const routes = [
    {path: '/test',components: test},
];

const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
