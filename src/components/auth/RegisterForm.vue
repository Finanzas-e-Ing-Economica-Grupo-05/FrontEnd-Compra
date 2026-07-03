<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../../services/authService'
import { authStore } from '../../store/authStore'
import {
  esDniValido, esCorreoValido, esPasswordValido, esTelefonoValido, esNombreValido
} from '../../utils/validators'
import PasswordField from '../shared/PasswordField.vue'

const router = useRouter()
const form = reactive({
  usuNombre: '', usuApellido: '', usuDni: '', usuNumero: '',
  usuCorreo: '', usuPassword: '', usuPerfilSe: ''
})

const fieldErrors = reactive({
  usuNombre: '', usuApellido: '', usuDni: '', usuNumero: '',
  usuCorreo: '', usuPassword: '', usuPerfilSe: ''
})

const errorGeneral = ref('')
const cargando = ref(false)

const validadores = {
  usuNombre: () => esNombreValido(form.usuNombre) ? '' : 'Solo letras, mínimo 2 caracteres.',
  usuApellido: () => esNombreValido(form.usuApellido) ? '' : 'Solo letras, mínimo 2 caracteres.',
  usuDni: () => esDniValido(form.usuDni) ? '' : 'El DNI debe tener exactamente 8 dígitos numéricos.',
  usuNumero: () => esTelefonoValido(form.usuNumero) ? '' : 'El teléfono debe tener 9 dígitos numéricos.',
  usuCorreo: () => esCorreoValido(form.usuCorreo) ? '' : 'Ingresa un correo válido (ej: nombre@correo.com).',
  usuPassword: () => esPasswordValido(form.usuPassword)
      ? '' : 'Mínimo 8 caracteres, con al menos una letra y un número.',
  usuPerfilSe: () => (form.usuPerfilSe !== '' && Number(form.usuPerfilSe) > 0)
      ? '' : 'Ingresa un ingreso mensual válido (mayor a 0).'
}

function validarCampo(campo) {
  fieldErrors[campo] = validadores[campo]()
  return !fieldErrors[campo]
}

function validarFormulario() {
  let ok = true
  for (const campo of Object.keys(validadores)) {
    if (!validarCampo(campo)) ok = false
  }
  return ok
}

// Solo permite dígitos al escribir en DNI / teléfono
function soloDigitos(campo, maxLen) {
  form[campo] = form[campo].replace(/\D/g, '').slice(0, maxLen)
}

async function enviar() {
  errorGeneral.value = ''
  if (!validarFormulario()) {
    errorGeneral.value = 'Revisa los campos marcados antes de continuar.'
    return
  }

  cargando.value = true
  try {
    const usuario = await authService.register({
      ...form,
      usuPerfilSe: Number(form.usuPerfilSe)
    })
    authStore.setUsuario(usuario)
    router.push({ name: 'catalogo' })
  } catch (e) {
    errorGeneral.value = e.message || 'No se pudo completar el registro.'
  } finally {
    cargando.value = false
  }
}

function proximamente() {
  errorGeneral.value = 'Esta opción estará disponible próximamente.'
}
</script>

<template>
  <form class="card" style="max-width: 460px; width: 100%;" @submit.prevent="enviar" novalidate>
    <h2>Crea tu cuenta</h2>
    <p class="muted">Ingresa tus datos para empezar tu simulación de crédito.</p>

    <div class="grid-2">
      <div class="form-group">
        <label>Nombre</label>
        <input
            v-model.trim="form.usuNombre" class="input"
            :class="{ 'input-error': fieldErrors.usuNombre }"
            placeholder="Ej. Juan Carlos" @blur="validarCampo('usuNombre')"
        />
        <p v-if="fieldErrors.usuNombre" class="error-text">{{ fieldErrors.usuNombre }}</p>
      </div>
      <div class="form-group">
        <label>Apellidos</label>
        <input
            v-model.trim="form.usuApellido" class="input"
            :class="{ 'input-error': fieldErrors.usuApellido }"
            placeholder="Ej. Pérez Gómez" @blur="validarCampo('usuApellido')"
        />
        <p v-if="fieldErrors.usuApellido" class="error-text">{{ fieldErrors.usuApellido }}</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="form-group">
        <label>DNI (8 dígitos)</label>
        <input
            v-model="form.usuDni" class="input" inputmode="numeric" maxlength="8"
            :class="{ 'input-error': fieldErrors.usuDni }"
            placeholder="00000000"
            @input="soloDigitos('usuDni', 8)"
            @blur="validarCampo('usuDni')"
        />
        <p v-if="fieldErrors.usuDni" class="error-text">{{ fieldErrors.usuDni }}</p>
      </div>
      <div class="form-group">
        <label>Teléfono Móvil</label>
        <input
            v-model="form.usuNumero" class="input" inputmode="numeric" maxlength="9"
            :class="{ 'input-error': fieldErrors.usuNumero }"
            placeholder="9XXXXXXXX"
            @input="soloDigitos('usuNumero', 9)"
            @blur="validarCampo('usuNumero')"
        />
        <p v-if="fieldErrors.usuNumero" class="error-text">{{ fieldErrors.usuNumero }}</p>
      </div>
    </div>

    <div class="form-group">
      <label>Correo electrónico</label>
      <input
          v-model.trim="form.usuCorreo" type="email" class="input"
          :class="{ 'input-error': fieldErrors.usuCorreo }"
          placeholder="ejemplo@correo.com" autocomplete="email"
          @blur="validarCampo('usuCorreo')"
      />
      <p v-if="fieldErrors.usuCorreo" class="error-text">{{ fieldErrors.usuCorreo }}</p>
    </div>

    <PasswordField
        v-model="form.usuPassword"
        label="Contraseña"
        placeholder="Mínimo 8 caracteres, con letras y números"
        :error="fieldErrors.usuPassword"
        autocomplete="new-password"
        @blur="validarCampo('usuPassword')"
    />

    <div class="form-group">
      <label>Ingresos Mensuales Estimados (S/)</label>
      <input
          v-model="form.usuPerfilSe" type="number" min="0" step="any" class="input"
          :class="{ 'input-error': fieldErrors.usuPerfilSe }"
          placeholder="Ej. 3500"
          @blur="validarCampo('usuPerfilSe')"
      />
      <p v-if="fieldErrors.usuPerfilSe" class="error-text">{{ fieldErrors.usuPerfilSe }}</p>
    </div>

    <p v-if="errorGeneral" class="error-text general-error">{{ errorGeneral }}</p>

    <button class="btn btn-primary" style="width:100%;" :disabled="cargando" type="submit">
      {{ cargando ? 'Creando cuenta...' : 'Completar Registro →' }}
    </button>

    <div class="divider"><span>O CONTINUAR CON</span></div>

    <div class="grid-2">
      <button type="button" class="btn btn-outline" @click="proximamente">
        <span>🌐</span> Google
      </button>
      <button type="button" class="btn btn-outline" @click="proximamente">
        <span>📱</span> Apple
      </button>
    </div>

    <p class="muted" style="margin-top:16px; text-align:center;">
      ¿Ya tienes una cuenta? <router-link to="/login">Iniciar sesión</router-link>
    </p>
  </form>
</template>

<style scoped>
.input-error { border-color: var(--red); }
.general-error { text-align: center; margin-bottom: 12px; }
.divider {
  display: flex; align-items: center; text-align: center;
  margin: 20px 0; color: var(--muted); font-size: 12px;
}
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); }
.divider span { padding: 0 10px; }
</style>