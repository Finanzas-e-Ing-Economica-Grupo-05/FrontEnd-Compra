<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: 'Contraseña' },
  placeholder: { type: String, default: '••••••••' },
  error: { type: String, default: '' },
  autocomplete: { type: String, default: 'current-password' }
})
const emit = defineEmits(['update:modelValue', 'blur'])

const visible = ref(false)
const tipo = computed(() => (visible.value ? 'text' : 'password'))
</script>

<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div class="password-wrap">
      <input
          :type="tipo"
          class="input"
          :class="{ 'input-error': error }"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          @blur="emit('blur')"
      />
      <button
          type="button"
          class="toggle-eye"
          :aria-label="visible ? 'Ocultar contraseña' : 'Mostrar contraseña'"
          @click="visible = !visible"
          tabindex="-1"
      >
        <svg v-if="visible" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.7 18.7 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 5c7 0 11 7 11 7a18.7 18.7 0 0 1-2.16 3.19M1 1l22 22" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
    </div>
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<style scoped>
.password-wrap { position: relative; }
.password-wrap .input { padding-right: 40px; }
.toggle-eye {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  background: none; border: none; cursor: pointer; color: var(--muted);
  display: flex; align-items: center; justify-content: center; padding: 4px;
}
.toggle-eye:hover { color: var(--text); }
.input-error { border-color: var(--red); }
</style>