import { createRouter, createWebHistory } from 'vue-router'
import Agendamento from '../views/Agendamento.vue'
import Cadastro from '../views/Cadastro.vue'
import TermoConsentimento from '../views/TermoConsentimento.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Agendamento
  },
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
