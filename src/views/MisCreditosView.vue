<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authStore } from '../store/authStore'
import { simulacionStore } from '../store/simulacionStore'
import { formatoMoneda, formatoPorcentaje } from '../utils/formatters'

const router = useRouter()

onMounted(() => {
  if (authStore.usuario) simulacionStore.cargarHistorial(authStore.usuario.idUsuario)
})

function abrir(id) {
  router.push({ name: 'resumen', params: { id } })
}

async function eliminar(id) {
  if (confirm('¿Eliminar esta simulación?')) {
    await simulacionStore.eliminar(id)
  }
}
</script>

<template>
  <div class="header-row">
    <div>
      <h2>Mis Créditos</h2>
      <p class="muted">Gestiona y revisa tus simulaciones guardadas.</p>
    </div>
    <span class="muted">Hola, {{ authStore.usuario?.usuNombre }}</span>
  </div>

  <p v-if="simulacionStore.cargando">Cargando...</p>
  <p v-else-if="simulacionStore.historial.length === 0" class="muted">Aún no tienes simulaciones guardadas.</p>

  <div v-else class="grid-3">
    <div v-for="s in simulacionStore.historial" :key="s.idSimulacion" class="card">
      <h3>Simulación #{{ s.idSimulacion }}</h3>
      <div class="fila"><span class="muted">Monto a financiar</span><strong>{{ formatoMoneda(s.montoTotalFin) }}</strong></div>
      <div class="fila"><span class="muted">TCEA Estimada</span><strong>{{ formatoPorcentaje(s.valTcea) }}</strong></div>
      <div class="acciones">
        <button class="btn btn-primary" @click="abrir(s.idSimulacion)">Abrir Detalle</button>
        <button class="btn btn-outline" @click="eliminar(s.idSimulacion)">🗑</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.fila { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px; }
.acciones { display: flex; gap: 8px; margin-top: 12px; }
</style>