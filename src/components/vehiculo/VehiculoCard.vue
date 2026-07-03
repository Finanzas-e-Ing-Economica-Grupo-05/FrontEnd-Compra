<script setup>
import { formatoMoneda } from '../../utils/formatters'

const props = defineProps({ vehiculo: Object })
const emit = defineEmits(['simular'])
</script>

<template>
  <div class="card vehiculo-card">
    <div class="vehiculo-img">
      <img v-if="vehiculo.vehImagenUrl" :src="vehiculo.vehImagenUrl" :alt="vehiculo.vehMarca" />
      <span v-else>🚙</span>
    </div>
    <p class="muted small">{{ vehiculo.vehMarca }}</p>
    <h3>{{ vehiculo.vehMarca }}{{ vehiculo.vehModelo ? ' ' + vehiculo.vehModelo : '' }}</h3>
    <p class="muted small">Precio desde</p>
    <p class="precio">{{ formatoMoneda(vehiculo.vehPrecio, vehiculo.vehMoneda === 'Dólares ($)' ? '$' : 'S/') }}</p>
    <button class="btn btn-primary" style="width:100%;" @click="emit('simular', vehiculo)">
      Simulard este modelo
    </button>
  </div>
</template>

<style scoped>
.vehiculo-card { display: flex; flex-direction: column; gap: 6px; }
.vehiculo-img { font-size: 48px; text-align: center; background: #eef1f7; border-radius: 8px; padding: 24px 0; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.vehiculo-img img { width: 100%; height: 140px; object-fit: cover; border-radius: 8px; }
.small { font-size: 12px; }
.precio { font-weight: 700; font-size: 18px; margin: 4px 0 12px; }
</style>