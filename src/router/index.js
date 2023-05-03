import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StacksView from '../views/StacksView.vue'
import ProjetosView from '../views/ProjetosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stacks',
    name: 'stacks',
    component: StacksView
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjetosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
