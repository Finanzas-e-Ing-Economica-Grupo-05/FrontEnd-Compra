import { api } from './api'

export const vehiculoService = {
    listar() {
        return api.get('/Vehiculo')
    },
    obtener(id) {
        return api.get(`/Vehiculo/${id}`)
    }
}