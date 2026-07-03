<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../../services/authService'
import { authStore } from '../../store/authStore'
import { esCorreoValido } from '../../utils/validators'
import PasswordField from '../shared/PasswordField.vue'

const router = useRouter()
const form = reactive({ usuCorreo: '', usuPassword: '' })
const fieldErrors = reactive({ usuCorreo: '', usuPassword: '' })
const errorGeneral = ref('')
const cargando = ref(false)

function validarCorreo() {
  if (!form.usuCorreo.trim()) {
    fieldErrors.usuCorreo = 'El correo es obligatorio.'
  } else if (!esCorreoValido(form.usuCorreo)) {
    fieldErrors.usuCorreo = 'Ingresa un correo válido (ej: nombre@correo.com).'
  } else {
    fieldErrors.usuCorreo = ''
  }
  return !fieldErrors.usuCorreo
}

function validarPassword() {
  fieldErrors.usuPassword = form.usuPassword ? '' : 'Ingresa tu contraseña.'
  return !fieldErrors.usuPassword
}

function validarFormulario() {
  const correoOk = validarCorreo()
  const passOk = validarPassword()
  return correoOk && passOk
}

async function enviar() {
  errorGeneral.value = ''
  if (!validarFormulario()) return

  cargando.value = true
  try {
    const usuario = await authService.login(form)
    authStore.setUsuario(usuario)
    router.push({ name: 'catalogo' })
  } catch (e) {
    errorGeneral.value = e.message || 'Credenciales inválidas. Verifica tu correo y contraseña.'
  } finally {
    cargando.value = false
  }
}

function proximamente() {
  errorGeneral.value = 'Esta opción estará disponible próximamente.'
}
</script>

<template>
  <form class="card" style="max-width: 380px; width: 100%;" @submit.prevent="enviar" novalidate>
    <h2>Iniciar sesión</h2>
    <p class="muted">Ingresa tus datos para acceder a tu cuenta.</p>

    <div class="form-group">
      <label>Correo electrónico</label>
      <input
          v-model.trim="form.usuCorreo"
          type="email"
          class="input"
          :class="{ 'input-error': fieldErrors.usuCorreo }"
          placeholder="ejemplo@correo.com"
          autocomplete="email"
          @blur="validarCorreo"
      />
      <p v-if="fieldErrors.usuCorreo" class="error-text">{{ fieldErrors.usuCorreo }}</p>
    </div>

    <PasswordField
        v-model="form.usuPassword"
        label="Contraseña"
        :error="fieldErrors.usuPassword"
        autocomplete="current-password"
        @blur="validarPassword"
    />

    <div class="forgot-row">
      <a href="#" class="link-muted" @click.prevent="proximamente">¿Olvidaste tu contraseña?</a>
    </div>

    <p v-if="errorGeneral" class="error-text general-error">{{ errorGeneral }}</p>

    <button class="btn btn-primary" style="width:100%;" :disabled="cargando" type="submit">
      {{ cargando ? 'Ingresando...' : 'Ingresar →' }}
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
      ¿No tienes una cuenta? <router-link to="/registro">Crea una aquí</router-link>
    </p>
  </form>
</template>

<style scoped>
.input-error { border-color: var(--red); }
.forgot-row { display: flex; justify-content: flex-end; margin: -8px 0 16px; }
.link-muted { color: var(--blue); font-size: 13px; text-decoration: none; }
.link-muted:hover { text-decoration: underline; }
.general-error { text-align: center; margin-bottom: 12px; }
.divider {
  display: flex; align-items: center; text-align: center;
  margin: 20px 0; color: var(--muted); font-size: 12px;
}
.divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid var(--border); }
.divider span { padding: 0 10px; }
</style>