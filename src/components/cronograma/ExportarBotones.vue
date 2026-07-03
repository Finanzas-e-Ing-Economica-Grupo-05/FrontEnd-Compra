<script setup>
const props = defineProps({ cronograma: Array })

function exportarCsv() {
  const headers = ['Mes', 'Tipo', 'Saldo Inicial', 'Amortizacion', 'Interes', 'Seg. Desgravamen', 'Seg. Vehicular', 'Cuota Fija', 'Pago Total', 'Saldo Final']
  const filas = props.cronograma.map(c => [
    c.mes, c.tipoCuota, c.saldoInicial, c.amoPeriodo, c.intPeriodo,
    c.segDesMonto, c.segVehMonto, c.cuoMensual, c.pagoTotal, c.saldoFinal
  ])
  const csv = [headers, ...filas].map(f => f.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'cronograma_compra_inteligente.csv'
  a.click()
  URL.revokeObjectURL(url)
}

function exportarPdf() {
  window.print()
}
</script>

<template>
  <div class="export-buttons">
    <button class="btn btn-outline" @click="exportarPdf">📄 Exportar PDF</button>
    <button class="btn btn-outline" @click="exportarCsv">📊 Exportar Excel (CSV)</button>
  </div>
</template>

<style scoped>
.export-buttons { display: flex; gap: 10px; }
</style>