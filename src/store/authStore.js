import { reactive } from 'vue'

const STORAGE_KEY = 'ci_usuario'

function leerUsuarioGuardado() {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
}

export const authStore = reactive({
    usuario: leerUsuarioGuardado(),

    get estaAutenticado() {
        return !!this.usuario
    },

    setUsuario(usuario) {
        this.usuario = usuario
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usuario))
    },

    logout() {
        this.usuario = null
        localStorage.removeItem(STORAGE_KEY)
    }
})