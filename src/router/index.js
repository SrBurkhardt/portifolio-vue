import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StacksView from '../views/StacksView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import CertificadosView from '../views/CertificadosView.vue'

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
  },
  {
    path: '/certificados',
    name: 'certificados',
    component: CertificadosView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
