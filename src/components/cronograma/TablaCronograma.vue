<script setup>
import { formatoMoneda } from '../../utils/formatters'
defineProps({ cronograma: Array, moneda: { type: String, default: 'S/' } })
</script>

<template>
  <div class="card" style="overflow-x:auto;">
    <table class="tabla-cronograma">
      <thead>
      <tr>
        <th>Mes</th><th>Tipo</th><th>Saldo Inicial</th><th>Amortización</th><th>Interés</th>
        <th>Seg. Desg.</th><th>Seg. Vehic.</th><th>Cuota Fija</th><th>Pago Total</th><th>Saldo Final</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="c in cronograma" :key="c.mes">
        <td>{{ c.mes }}</td>
        <td>{{ c.tipoCuota }}</td>
        <td>{{ formatoMoneda(c.saldoInicial, moneda) }}</td>
        <td>{{ formatoMoneda(c.amoPeriodo, moneda) }}</td>
        <td>{{ formatoMoneda(c.intPeriodo, moneda) }}</td>
        <td>{{ formatoMoneda(c.segDesMonto, moneda) }}</td>
        <td>{{ formatoMoneda(c.segVehMonto, moneda) }}</td>
        <td>{{ formatoMoneda(c.cuoMensual, moneda) }}</td>
        <td><strong>{{ formatoMoneda(c.pagoTotal, moneda) }}</strong></td>
        <td>{{ formatoMoneda(c.saldoFinal, moneda) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.tabla-cronograma { width: 100%; border-collapse: collapse; font-size: 13px; }
.tabla-cronograma th { text-align: left; padding: 10px; background: #eef1f7; color: var(--muted); }
.tabla-cronograma td { padding: 8px 10px; border-bottom: 1px solid var(--border); white-space: nowrap; }
</style>