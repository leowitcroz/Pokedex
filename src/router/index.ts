import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pokedex from '../views/pokedex.vue'
import pokelist from '../views/PokeListView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/pokedex',
    name:'pokedex',
    component:pokedex
  },
  {
    path:'/pokelist',
    name:'pokelist',
    component:pokelist
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
