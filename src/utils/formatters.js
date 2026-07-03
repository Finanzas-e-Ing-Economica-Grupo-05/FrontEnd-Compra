export function formatoMoneda(valor, moneda = 'S/') {
    if (valor === null || valor === undefined || isNaN(valor)) return '--'
    return `${moneda} ${Number(valor).toLocaleString('es-PE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`
}

export function formatoPorcentaje(valor, decimales = 2) {
    if (valor === null || valor === undefined || isNaN(valor)) return '--'
    return `${(Number(valor) * 100).toFixed(decimales)}%`
}

export function formatoFecha(fecha) {
    if (!fecha) return '--'
    return new Date(fecha).toLocaleDateString('es-PE')
}