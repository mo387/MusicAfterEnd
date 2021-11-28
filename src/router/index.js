import { createRouter, createWebHistory } from 'vue-router'
import blog from '../views/blog/blog.vue'
import directSeeding from '../views/directSeeding/directSeeding.vue'
import found from '../views/found/found.vue'
import friends from '../views/friends/friends.vue'
import privateFM from '../views/privateFM/privateFM.vue'
import vedio from '../views/vedio/vedio.vue'
import download from '../views/download/download.vue'
import recently from '../views/recently/recently.vue'
import mymusic from '../views/mymusic/mymusic.vue'
import myplayer from '../views/myplayer/myplayer.vue'
import collect from '../views/collect/collect.vue'
import foundChild from './found.js'
const routes = [
  {
    path: '/',
    redirect: '/found/recommend'
  },
  {
    name: 'blog',
    path: '/blog',
    component: blog
  },
  {
    name: 'directSeeding',
    path: '/directSeeding',
    component: directSeeding
  },
  {
    name: 'found',
    path: '/found',
    redirect: '/found/recommend',
    component: found,
    children: foundChild
  },
  {
    name: 'friends',
    path: '/friends',
    component: friends
  },
  {
    name: 'privateFM',
    path: '/privateFM',
    component: privateFM
  },
  {
    name: 'vedio',
    path: '/vedio',
    component: vedio
  },
  {
    name: 'download',
    path: '/download',
    component: download
  },
  {
    name: 'recently',
    path: '/recently',
    component: recently
  },
  {
    name: 'mymusic',
    path: '/mymusic',
    component: mymusic
  },
  {
    name: 'myplayer',
    path: '/myplayer',
    component: myplayer
  },
  {
    name: 'collect',
    path: '/collect',
    component: collect
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
