import recommend from '../views/found/children/recommend.vue'
import exclusive from '../views/found/children/exclusive.vue'
import newo from '../views/found/children/new.vue'
import rankinglist from '../views/found/children/rankinglist.vue'
import singer from '../views/found/children/singer.vue'
import songlist from '../views/found/children/songlist.vue'
export default [
  {
    path: 'recommend',
    component: recommend
  }, {
    path: 'exclusive',
    component: exclusive
  }, {
    path: 'new',
    component: newo
  }, {
    path: 'rankinglist',
    component: rankinglist
  }, {
    path: 'singer',
    component: singer
  }, {
    path: 'songlist',
    component: songlist
  }
]
