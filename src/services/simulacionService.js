import { api } from './api'

export const simulacionService = {
    crear(payload) {
        return api.post('/Simulacion', payload)
    },
    obtenerPorId(id) {
        return api.get(`/Simulacion/${id}`)
    },
    obtenerPorUsuario(idUsuario) {
        return api.get(`/Simulacion/usuario/${idUsuario}`)
    },
    eliminar(id) {
        return api.delete(`/Simulacion/${id}`)
    }
}