<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { vehiculoStore } from '../../store/vehiculoStore'
import Filtros from './Filtros.vue'
import VehiculoCard from './VehiculoCard.vue'

const router = useRouter()
const filtros = ref({ marca: '', precioMin: '', precioMax: '' })

onMounted(() => vehiculoStore.cargar())

const marcas = computed(() => [...new Set(vehiculoStore.lista.map(v => v.vehMarca))])

const listaFiltrada = computed(() => vehiculoStore.lista.filter(v => {
  if (filtros.value.marca && v.vehMarca !== filtros.value.marca) return false
  if (filtros.value.precioMin && v.vehPrecio < Number(filtros.value.precioMin)) return false
  if (filtros.value.precioMax && v.vehPrecio > Number(filtros.value.precioMax)) return false
  return true
}))

function simular(vehiculo) {
  vehiculoStore.seleccionar(vehiculo)
  router.push({ name: 'simulador' })
}
</script>

<template>
  <h2>Catálogo de Vehículos</h2>
  <p class="muted">Encuentra el auto ideal y simula tu crédito al instante.</p>

  <div class="catalogo-layout">
    <Filtros v-model="filtros" :marcas="marcas" />

    <div class="catalogo-grid">
      <p v-if="vehiculoStore.cargando">Cargando vehículos...</p>
      <p v-else-if="vehiculoStore.error" class="error-text">{{ vehiculoStore.error }}</p>
      <p v-else-if="listaFiltrada.length === 0" class="muted">
        No hay vehículos registrados aún. Agrega algunos desde el endpoint POST /api/Vehiculo.
      </p>
      <div v-else class="grid-3">
        <VehiculoCard v-for="v in listaFiltrada" :key="v.idVehiculo" :vehiculo="v" @simular="simular" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalogo-layout { display: flex; gap: 20px; margin-top: 16px; }
.catalogo-grid { flex: 1; }
@media (max-width: 768px) { .catalogo-layout { flex-direction: column; } }
</style>