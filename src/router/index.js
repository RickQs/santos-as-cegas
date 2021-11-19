import { createRouter, createWebHistory } from 'vue-router'
import Agendamento from '../views/Agendamento.vue'

const routes = [
  {
    path: '/agendamento',
    name: 'Agendamento',
    component: Agendamento
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
