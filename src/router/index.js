import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Agendamento from '../views/Agendamento.vue'
import Cadastro from '../views/Cadastro.vue'
import TermoConsentimento from '../views/TermoConsentimento.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/termo-consentimento',
    name: 'TermoConsentimento',
    component: TermoConsentimento
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
