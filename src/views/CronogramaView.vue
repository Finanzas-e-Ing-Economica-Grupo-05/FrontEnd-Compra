<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { simulacionStore } from '../store/simulacionStore' //
import TablaCronograma from '../components/cronograma/TablaCronograma.vue'
import ExportarBotones from '../components/cronograma/ExportarBotones.vue'

const route = useRoute()

onMounted(() => {
  simulacionStore.cargarPorId(route.params.id)
})

const resultado = computed(() => simulacionStore.resultadoActual)
</script>

<template>
  <div v-if="simulacionStore.cargando">Cargando cronograma...</div>
  <template v-else-if="resultado">
    <div class="cronograma-header">
      <div>
        <h2>Cronograma Detallado de Pagos</h2>
        <p class="muted">Simulación #{{ resultado.idSimulacion }}</p>
      </div>
      <ExportarBotones :cronograma="resultado.cronograma" />
    </div>

    <TablaCronograma :cronograma="resultado.cronograma" />
  </template>
  <p v-else class="muted">No se encontró la simulación.</p>
</template>

<style scoped>
.cronograma-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
</style>