<script setup>
import { useRouter } from 'vue-router'
import { authStore } from '../../store/authStore'

const router = useRouter()

function cerrarSesion() {
  authStore.logout()
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="navbar">
    <router-link to="/" class="brand">Compra Inteligente</router-link>

    <nav class="nav-links">
      <router-link to="/catalogo">Simulador</router-link>
      <router-link to="/mis-creditos">Mis Créditos</router-link>
      <router-link to="/ayuda">Ayuda</router-link>
    </nav>

    <div class="nav-actions">
      <template v-if="authStore.estaAutenticado">
        <button class="icon-btn" title="Notificaciones">🔔</button>
        <button class="icon-btn" title="Mi perfil">👤</button>
        <button class="btn btn-outline" @click="cerrarSesion">Salir</button>
      </template>
      <template v-else>
        <router-link class="btn btn-outline" to="/login">Iniciar sesión</router-link>
        <router-link class="btn btn-primary" to="/registro">Crear cuenta</router-link>
      </template>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 28px;
  background: #fff;
  border-bottom: 1px solid var(--border);
}
.brand {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 18px;
  color: var(--navy);
  text-decoration: none;
}
.nav-links { display: flex; gap: 22px; }
.nav-links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  font-size: 14px;
}
.nav-links a.router-link-active { color: var(--blue); font-weight: 700; }
.nav-actions { display: flex; align-items: center; gap: 10px; }
.icon-btn {
  background: none; border: none; cursor: pointer; font-size: 16px;
  width: 34px; height: 34px; border-radius: 50%; display: flex;
  align-items: center; justify-content: center;
}
.icon-btn:hover { background: #eef1f7; }
</style>