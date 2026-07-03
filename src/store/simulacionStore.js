import { reactive } from 'vue'
import { simulacionService } from '../services/simulacionService'

export const simulacionStore = reactive({
    resultadoActual: null,
    historial: [],
    cargando: false,
    error: null,

    async simular(payload) {
        this.cargando = true
        this.error = null
        try {
            this.resultadoActual = await simulacionService.crear(payload)
            return this.resultadoActual
        } catch (e) {
            this.error = e.message
            throw e
        } finally {
            this.cargando = false
        }
    },

    async cargarPorId(id) {
        this.cargando = true
        try {
            this.resultadoActual = await simulacionService.obtenerPorId(id)
        } finally {
            this.cargando = false
        }
    },

    async cargarHistorial(idUsuario) {
        this.cargando = true
        try {
            this.historial = await simulacionService.obtenerPorUsuario(idUsuario)
        } finally {
            this.cargando = false
        }
    },

    async eliminar(id) {
        await simulacionService.eliminar(id)
        this.historial = this.historial.filter(s => s.idSimulacion !== id)
    }
})