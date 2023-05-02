import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConhecimentoView from '../views/ConhecimentoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/conhecimento',
    name: 'conhecimento',
    component: ConhecimentoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
