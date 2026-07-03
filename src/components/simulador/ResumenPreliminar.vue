<script setup>
import { computed } from 'vue'
import { formatoMoneda } from '../../utils/formatters'

const props = defineProps({ form: Object })

const montoFinanciar = computed(() => {
  const precio = Number(props.form.vehPrecio) || 0
  const inicial = Number(props.form.finIniMonto) || 0
  return precio - inicial
})

const cuotaBalon = computed(() => {
  const precio = Number(props.form.vehPrecio) || 0
  const porc = Number(props.form.finBalonPorc) || 0
  return precio * (porc / 100)
})
</script>

<template>
  <div class="card resumen">
    <h3>Resumen Preliminar</h3>
    <div class="resumen-row"><span class="muted">Monto a Financiar</span><strong>{{ formatoMoneda(montoFinanciar) }}</strong></div>
    <div class="resumen-row"><span class="muted">Cuota Balón Estimada</span><strong>{{ formatoMoneda(cuotaBalon) }}</strong></div>
    <div class="resumen-row"><span class="muted">Plazo</span><strong>{{ form.finPlazo || '--' }} meses</strong></div>
    <slot />
    <p class="muted" style="font-size:12px; margin-top:12px;">
      La simulación es referencial y está sujeta a evaluación crediticia.
    </p>
  </div>
</template>

<style scoped>
.resumen { width: 280px; }
.resumen-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
</style>