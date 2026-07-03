import { reactive } from 'vue'
import { vehiculoService } from '../services/vehiculoService'

export const vehiculoStore = reactive({
    lista: [],
    cargando: false,
    error: null,
    vehiculoSeleccionado: null,

    async cargar() {
        this.cargando = true
        this.error = null
        try {
            this.lista = await vehiculoService.listar()
        } catch (e) {
            this.error = e.message
        } finally {
            this.cargando = false
        }
    },

    seleccionar(vehiculo) {
        this.vehiculoSeleccionado = vehiculo
    }
})