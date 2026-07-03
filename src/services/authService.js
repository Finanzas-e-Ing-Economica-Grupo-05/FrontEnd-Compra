import { api } from './api'

export const authService = {
    register(payload) {
        // payload: usuNombre, usuApellido, usuDni, usuPassword, usuCorreo, usuNumero, usuPerfilSe
        return api.post('/Auth/register', payload)
    },
    login(payload) {
        // payload: usuCorreo, usuPassword
        return api.post('/Auth/login', payload)
    }
}