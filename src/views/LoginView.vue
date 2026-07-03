<script setup>
import LoginForm from '../components/auth/LoginForm.vue'
</script>

<template>
  <div class="auth-layout">
    <div class="auth-side">
      <span class="brand-icon-big">⌁</span>
      <h1>Compra Inteligente</h1>
      <p>Gestión financiera clara y transparente. Toma el control de tus créditos y simulaciones con herramientas institucionales.</p>
    </div>
    <div class="auth-form">
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
.auth-layout { display: flex; min-height: 70vh; gap: 0; }
.auth-side {
  flex: 1; background: var(--navy); color: #fff; border-radius: var(--radius) 0 0 var(--radius);
  padding: 48px; display: flex; flex-direction: column; justify-content: center;
}
.auth-side h1 { margin-bottom: 12px; }
.brand-icon-big { font-size: 36px; margin-bottom: 16px; }
.auth-form { flex: 1; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 0 var(--radius) var(--radius) 0; }
@media (max-width: 768px) { .auth-layout { flex-direction: column; } .auth-side { border-radius: var(--radius) var(--radius) 0 0; } .auth-form { border-radius: 0 0 var(--radius) var(--radius); } }
</style>