import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '../store/authStore'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import SimuladorView from '../views/SimuladorView.vue'
import CronogramaView from '../views/CronogramaView.vue'
import ResumenFinancieroView from '../views/ResumenFinancieroView.vue'
import MisCreditosView from '../views/MisCreditosView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/registro', name: 'registro', component: RegisterView },
    { path: '/catalogo', name: 'catalogo', component: CatalogoView, meta: { requiereAuth: true } },
    { path: '/simulador', name: 'simulador', component: SimuladorView, meta: { requiereAuth: true } },
    { path: '/cronograma/:id', name: 'cronograma', component: CronogramaView, meta: { requiereAuth: true } },
    { path: '/resumen/:id', name: 'resumen', component: ResumenFinancieroView, meta: { requiereAuth: true } },
    { path: '/mis-creditos', name: 'mis-creditos', component: MisCreditosView, meta: { requiereAuth: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiereAuth && !authStore.estaAutenticado) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router