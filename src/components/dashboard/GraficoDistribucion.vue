<script setup>
import { computed } from 'vue'
import { formatoMoneda } from '../../utils/formatters'

const props = defineProps({ resultado: Object })

const capital = computed(() => props.resultado.montoTotalFin)
const intereses = computed(() => props.resultado.monInteresTot)
const seguros = computed(() => props.resultado.monSeguroTot)
const total = computed(() => capital.value + intereses.value + seguros.value)

function porc(valor) {
  return total.value ? ((valor / total.value) * 100).toFixed(1) : 0
}
</script>

<template>
  <div class="card">
    <h3>Distribución de Costos</h3>
    <div class="barra">
      <div class="seg capital" :style="{ width: porc(capital) + '%' }"></div>
      <div class="seg interes" :style="{ width: porc(intereses) + '%' }"></div>
      <div class="seg seguro" :style="{ width: porc(seguros) + '%' }"></div>
    </div>
    <div class="leyenda">
      <span><i class="dot capital"></i> Capital {{ porc(capital) }}%</span>
      <span><i class="dot interes"></i> Intereses {{ porc(intereses) }}%</span>
      <span><i class="dot seguro"></i> Seguros {{ porc(seguros) }}%</span>
    </div>
    <div class="totales">
      <p class="muted">Total a Pagar: <strong>{{ formatoMoneda(total) }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.barra { display: flex; height: 14px; border-radius: 8px; overflow: hidden; margin: 12px 0; background: #eef1f7; }
.capital { background: var(--blue); }
.interes { background: var(--navy); }
.seguro { background: #94a3b8; }
.leyenda { display: flex; gap: 16px; font-size: 13px; flex-wrap: wrap; }
.dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
.dot.capital { background: var(--blue); }
.dot.interes { background: var(--navy); }
.dot.seguro { background: #94a3b8; }
.totales { margin-top: 14px; }
</style>