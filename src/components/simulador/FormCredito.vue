<script setup>
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { authStore } from '../../store/authStore'
import { vehiculoStore } from '../../store/vehiculoStore'
import { simulacionStore } from '../../store/simulacionStore'
import { rangoCuotaBalonValido } from '../../utils/validators'
import InputCurrency from '../shared/InputCurrency.vue'
import ResumenPreliminar from './ResumenPreliminar.vue'

const router = useRouter()
const vSel = vehiculoStore.vehiculoSeleccionado

const form = reactive({
  idVehiculo: vSel?.idVehiculo ?? 0,
  vehMarca: vSel?.vehMarca ?? '',
  vehPrecio: vSel?.vehPrecio ?? '',
  vehMoneda: vSel?.vehMoneda ?? 'Soles (S/)',
  finFecInicio: new Date().toISOString().slice(0, 10),
  finIniMonto: '',
  finBalonPorc: 30,
  finPlazo: 36,
  tasaTipo: 'Efectiva',
  tasaValor: '',
  tasaCapit: 30,
  graTipo: 'Sin Gracia',
  graMeses: 0,
  segDesgrav: '',
  segVehic: '',
  comPortes: '',
  valCok: ''
})

const errorMsg = ref('')
const cargando = ref(false)

// si es "Sin Gracia" no tiene sentido pedir meses de gracia
watch(() => form.graTipo, (val) => {
  if (val === 'Sin Gracia') form.graMeses = 0
})

const plazos = [12, 18, 24, 30, 36, 42, 48, 54, 60]
const monedaSimbolo = () => (form.vehMoneda === 'Dólares ($)' ? '$' : 'S/')

async function generarCronograma() {
  errorMsg.value = ''

  if (!form.idVehiculo || Number(form.idVehiculo) <= 0) {
    errorMsg.value = 'Debes seleccionar un vehículo del catálogo antes de simular.'
    return
  }
  if (!form.vehPrecio || Number(form.vehPrecio) <= 0) {
    errorMsg.value = 'Ingresa el precio del vehículo.'
    return
  }
  if (!rangoCuotaBalonValido(Number(form.finBalonPorc))) {
    errorMsg.value = 'El porcentaje de cuota balón debe estar entre 20% y 50%.'
    return
  }
  if (!form.tasaValor || Number(form.tasaValor) <= 0) {
    errorMsg.value = 'Ingresa el valor de la tasa de interés.'
    return
  }
  if (form.graTipo !== 'Sin Gracia' && Number(form.graMeses) <= 0) {
    errorMsg.value = 'Ingresa la cantidad de meses de gracia.'
    return
  }
  if (!authStore.estaAutenticado) {
    errorMsg.value = 'Debes iniciar sesión para generar el cronograma.'
    return
  }

  const payload = {
    idUsuario: authStore.usuario.idUsuario,
    idVehiculo: Number(form.idVehiculo) || 0,
    vehPrecio: Number(form.vehPrecio),
    vehMoneda: form.vehMoneda,
    finFecInicio: form.finFecInicio,
    finIniMonto: Number(form.finIniMonto) || 0,
    finBalonPorc: Number(form.finBalonPorc),
    finPlazo: Number(form.finPlazo),
    tasaValor: Number(form.tasaValor),
    tasaTipo: form.tasaTipo,
    tasaCapit: form.tasaTipo === 'Nominal' ? Number(form.tasaCapit) : null,
    graTipo: form.graTipo,
    graMeses: Number(form.graMeses) || 0,
    segDesgrav: Number(form.segDesgrav) || 0,
    segVehic: Number(form.segVehic) || 0,
    comPortes: Number(form.comPortes) || 0,
    valCok: Number(form.valCok) || 0
  }

  cargando.value = true
  try {
    const resultado = await simulacionStore.simular(payload)
    router.push({ name: 'resumen', params: { id: resultado.idSimulacion } })
  } catch (e) {
    errorMsg.value = e.message || 'No se pudo generar el cronograma.'
  } finally {
    cargando.value = false
  }
}
</script>

<template>
  <h2>Configura tu Crédito Vehicular</h2>
  <p class="muted">Ingresa los datos para simular tu financiamiento con Compra Inteligente.</p>

  <div class="simulador-layout">
    <form class="simulador-form" @submit.prevent="generarCronograma">

      <!-- Datos del Vehículo -->
      <div class="card seccion">
        <h3>🚗 Datos del Vehículo</h3>

        <div class="grid-2">
          <div class="form-group">
            <label>Marca del vehículo</label>
            <input v-model="form.vehMarca" class="input" placeholder="Ej. Toyota Hilux 2026" />
          </div>
          <InputCurrency
              v-model="form.vehPrecio"
              label="Precio del auto"
              :moneda="monedaSimbolo()"
              placeholder="Ej. 25000"
          />
        </div>

        <InputCurrency
            v-model="form.finIniMonto"
            label="Cuota inicial"
            :moneda="monedaSimbolo()"
            placeholder="Ej. 5000"
        />

        <div class="form-group">
          <label>Porcentaje de Cuota Balón <strong>{{ form.finBalonPorc }}%</strong></label>
          <input v-model.number="form.finBalonPorc" type="range" min="20" max="50" step="1" class="slider" />
          <div class="slider-labels"><span>20%</span><span>50%</span></div>
        </div>
      </div>

      <!-- Condiciones Financieras -->
      <div class="card seccion">
        <h3>🏦 Condiciones Financieras</h3>

        <div class="form-group">
          <label>Moneda</label>
          <div class="toggle-group">
            <button type="button" class="toggle-btn" :class="{ activo: form.vehMoneda === 'Soles (S/)' }"
                    @click="form.vehMoneda = 'Soles (S/)'">Soles (S/)</button>
            <button type="button" class="toggle-btn" :class="{ activo: form.vehMoneda === 'Dólares ($)' }"
                    @click="form.vehMoneda = 'Dólares ($)'">Dólares ($)</button>
          </div>
        </div>

        <div class="grid-2">
          <div class="form-group">
            <label>Fecha de inicio</label>
            <input v-model="form.finFecInicio" type="date" class="input" />
          </div>
          <div class="form-group">
            <label>Plazo (meses)</label>
            <select v-model.number="form.finPlazo" class="input">
              <option v-for="p in plazos" :key="p" :value="p">{{ p }} meses</option>
            </select>
          </div>
        </div>

        <div class="grid-2">
          <div class="form-group">
            <label>Tipo de Tasa</label>
            <select v-model="form.tasaTipo" class="input">
              <option value="Efectiva">Tasa Efectiva Anual (TEA)</option>
              <option value="Nominal">Tasa Nominal Anual (TNA)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Valor de la Tasa (%)</label>
            <input v-model="form.tasaValor" type="number" step="0.0001" class="input" placeholder="Ej. 12.5" />
          </div>
        </div>

        <div v-if="form.tasaTipo === 'Nominal'" class="form-group">
          <label>Frecuencia de capitalización</label>
          <select v-model.number="form.tasaCapit" class="input">
            <option :value="1">Diaria</option>
            <option :value="30">Mensual</option>
            <option :value="90">Trimestral</option>
            <option :value="180">Semestral</option>
            <option :value="360">Anual</option>
          </select>
        </div>
      </div>

      <!-- Gracia y Gastos -->
      <div class="card seccion">
        <h3>🛡️ Gracia y Gastos</h3>

        <div class="grid-2">
          <div class="form-group">
            <label>Tipo de período de gracia</label>
            <select v-model="form.graTipo" class="input">
              <option value="Sin Gracia">Sin Gracia</option>
              <option value="Parcial">Parcial</option>
              <option value="Total">Total</option>
            </select>
          </div>
          <div class="form-group">
            <label>Meses de gracia</label>
            <input v-model.number="form.graMeses" type="number" min="0" class="input"
                   :disabled="form.graTipo === 'Sin Gracia'" placeholder="0" />
          </div>
        </div>

        <div class="grid-2">
          <div class="form-group">
            <label>Seguro Desgravamen mensual (%)</label>
            <input v-model="form.segDesgrav" type="number" step="0.0001" class="input" placeholder="Ej. 0.05" />
          </div>
          <div class="form-group">
            <label>Seguro Vehicular anual (%)</label>
            <input v-model="form.segVehic" type="number" step="0.01" class="input" placeholder="Ej. 3.5" />
          </div>
        </div>

        <div class="grid-2">
          <InputCurrency v-model="form.comPortes" label="Comisión por Portes" :moneda="monedaSimbolo()" placeholder="Ej. 10.00" />
          <div class="form-group">
            <label>Costo de Oportunidad - COK anual (%)</label>
            <input v-model="form.valCok" type="number" step="0.01" class="input" placeholder="Ej. 10" />
          </div>
        </div>
      </div>

      <p v-if="errorMsg" class="error-text">{{ errorMsg }}</p>
    </form>

    <ResumenPreliminar :form="form">
      <button class="btn btn-primary" style="width:100%; margin-top:10px;" :disabled="cargando" @click="generarCronograma">
        {{ cargando ? 'Calculando...' : '📅 Generar Cronograma de Pagos' }}
      </button>
    </ResumenPreliminar>
  </div>
</template>

<style scoped>
.simulador-layout { display: flex; gap: 20px; align-items: flex-start; margin-top: 16px; }
.simulador-form { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.seccion h3 { margin-bottom: 16px; }
.slider { width: 100%; accent-color: var(--navy); }
.slider-labels { display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); margin-top: 4px; }
.toggle-group { display: flex; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.toggle-btn {
  flex: 1; padding: 10px; border: none; background: #fff; cursor: pointer;
  font-weight: 600; color: var(--text); font-size: 14px;
}
.toggle-btn.activo { background: var(--navy); color: #fff; }
@media (max-width: 900px) { .simulador-layout { flex-direction: column; } }
</style>