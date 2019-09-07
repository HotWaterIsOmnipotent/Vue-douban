import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './home';
import Audio from './audio';
import Broadcast from './broadcast';
import Group from './group';
import Mine from './mine';
import movieDetail from './movieDetail'

export default new Router({
  // mode:'history',
  routes: [
    {path:'/',redirect:'/home'},
    Home,Audio,Broadcast,Group,Mine,movieDetail,
    {path:'/notfound', component:()=>import('@/views/NotFound')},
    {path:'*', redirect:'/notfound'}
  ]
})
