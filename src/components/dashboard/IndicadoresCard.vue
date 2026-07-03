<script setup>
import { formatoMoneda, formatoPorcentaje } from '../../utils/formatters'
defineProps({ resultado: Object })
</script>

<template>
  <div class="grid-3">
    <div class="card indicador">
      <span class="muted">TCEA</span>
      <h2>{{ formatoPorcentaje(resultado.valTcea) }}</h2>
      <p class="muted small">El costo real de tu crédito incluyendo seguros y comisiones.</p>
    </div>
    <div class="card indicador">
      <span class="muted">VAN</span>
      <h2 :class="resultado.valVan >= 0 ? 'positivo' : 'negativo'">{{ formatoMoneda(resultado.valVan) }}</h2>
      <p class="muted small">Valor Actual Neto. Indicador de rentabilidad de la inversión.</p>
    </div>
    <div class="card indicador">
      <span class="muted">TIR</span>
      <h2>{{ formatoPorcentaje(resultado.valTir) }}</h2>
      <p class="muted small">Tasa Interna de Retorno mensual. Refleja el costo efectivo real.</p>
    </div>
  </div>
</template>

<style scoped>
.indicador h2 { margin: 6px 0; }
.small { font-size: 12px; }
.positivo { color: var(--green); }
.negativo { color: var(--red); }
</style>