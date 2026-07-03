<script setup>
import RegisterForm from '../components/auth/RegisterForm.vue'
</script>

<template>
  <div class="auth-layout">
    <div class="auth-side">
      <span class="brand-icon-big">⌁</span>
      <h1>Compra Inteligente</h1>
      <p>Descubre las mejores opciones de financiamiento vehicular adaptadas a tu perfil. Un proceso transparente y 100% digital.</p>
    </div>
    <div class="auth-form">
      <RegisterForm />
    </div>
  </div>
</template>

<style scoped>
.auth-layout { display: flex; min-height: 70vh; }
.auth-side {
  flex: 1; background: var(--navy); color: #fff; border-radius: var(--radius) 0 0 var(--radius);
  padding: 48px; display: flex; flex-direction: column; justify-content: center;
}
.auth-side h1 { margin-bottom: 12px; }
.brand-icon-big { font-size: 36px; margin-bottom: 16px; }
.auth-form { flex: 1; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 0 var(--radius) var(--radius) 0; padding: 24px; }
@media (max-width: 768px) { .auth-layout { flex-direction: column; } }
</style>