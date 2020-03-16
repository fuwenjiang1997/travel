import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home.vue'
import City from '@/page/city/City.vue'
import Detail from '@/page/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }]
})
