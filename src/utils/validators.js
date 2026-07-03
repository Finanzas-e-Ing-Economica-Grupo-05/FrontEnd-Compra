export function esDniValido(dni) {
    return /^[0-9]{8}$/.test(dni)
}

export function esCorreoValido(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}

// Alfanumérico, mínimo 8 caracteres, con al menos una letra y un número
export function esPasswordValido(password) {
    if (typeof password !== 'string' || password.length < 8) return false
    return /[A-Za-z]/.test(password) && /[0-9]/.test(password)
}

export function esTelefonoValido(numero) {
    return /^[0-9]{9}$/.test(numero)
}

// Solo letras (incluye tildes, ñ y espacios), nombre/apellido del informe
export function esNombreValido(nombre) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/.test((nombre || '').trim())
}

export function rangoCuotaBalonValido(porcentaje) {
    return porcentaje >= 20 && porcentaje <= 50
}