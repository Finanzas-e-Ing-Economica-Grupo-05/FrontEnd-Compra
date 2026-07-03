<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { simulacionStore } from '../store/simulacionStore'
import { formatoMoneda } from '../utils/formatters'
import IndicadoresCard from '../components/dashboard/IndicadoresCard.vue'
import GraficoDistribucion from '../components/dashboard/GraficoDistribucion.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => simulacionStore.cargarPorId(route.params.id))

const resultado = computed(() => simulacionStore.resultadoActual)

function verCronograma() {
  router.push({ name: 'cronograma', params: { id: route.params.id } })
}
</script>

<template>
  <router-link to="/catalogo" class="muted">← Volver al Catálogo</router-link>
  <h2>Tu Resumen Financiero</h2>
  <p class="muted">Revisa los detalles y costos de tu simulación antes de continuar.</p>

  <template v-if="resultado">
    <IndicadoresCard :resultado="resultado" />

    <div class="grid-2" style="margin-top:20px;">
      <div class="card">
        <h3>Resumen de Montos</h3>
        <div class="fila"><span class="muted">Monto a financiar</span><strong>{{ formatoMoneda(resultado.montoTotalFin) }}</strong></div>
        <div class="fila"><span class="muted">Cuota balón</span><strong>{{ formatoMoneda(resultado.montoCuotaBalon) }}</strong></div>
        <div class="fila"><span class="muted">Intereses totales</span><strong>{{ formatoMoneda(resultado.monInteresTot) }}</strong></div>
        <div class="fila"><span class="muted">Seguros (Desgravamen + Vehicular)</span><strong>{{ formatoMoneda(resultado.monSeguroTot) }}</strong></div>
        <hr />
        <div class="fila"><span>Total a Pagar</span><strong>{{ formatoMoneda(resultado.montoTotalFin + resultado.monInteresTot + resultado.monSeguroTot) }}</strong></div>
      </div>

      <GraficoDistribucion :resultado="resultado" />
    </div>

    <button class="btn btn-primary" style="margin-top:20px;" @click="verCronograma">Ver Cronograma Detallado</button>
  </template>
  <p v-else class="muted">Cargando resumen...</p>
</template>

<style scoped>
.fila { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
</style>