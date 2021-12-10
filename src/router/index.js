import { createRouter, createWebHistory } from 'vue-router'
// 一级路由
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
import selectsong from '../views/selectsong/selectsong.vue'
import userSongList from '../views/userSongLIst/userSongList.vue'
// 二级路由
import foundChild from './found.js'
import selectSongChild from './selectsong.js'
import userSongListChild from './userSongList'
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
    name: 'selectsong',
    path: '/selectsong',
    redirect: '/selectsong/song',
    component: selectsong,
    children: selectSongChild
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
  },
  {
    name: 'userSongList',
    path: '/userSongList',
    redirect: '/userSongList/song',
    component: userSongList,
    children: userSongListChild
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
