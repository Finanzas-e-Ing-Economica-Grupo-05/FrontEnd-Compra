<script setup>
import { useRouter } from 'vue-router'
import heroAuto from '../assets/images/hero-auto.jpg'

const router = useRouter()
function irSimulador() { router.push({ name: 'catalogo' }) }
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>El camino a tu próximo auto empieza con transparencia</h1>
      <p class="muted">Descubre una experiencia de financiamiento diseñada para ti. Institucional, regulada y con la flexibilidad que necesitas para tomar la mejor decisión hoy mismo.</p>
      <button class="btn btn-primary" @click="irSimulador">Simular mi crédito</button>
    </div>
    <div class="hero-image">
      <img :src="heroAuto" alt="Vehículo en financiamiento" />
    </div>
  </section>

  <section class="pillars">
    <h2 style="text-align:center;">Respaldo y flexibilidad en cada paso</h2>
    <p class="muted" style="text-align:center;">Conoce los pilares de nuestro modelo de Compra Inteligente, estructurado para brindar seguridad financiera a nuestros clientes corporativos y particulares.</p>

    <div class="grid-3">
      <div class="card">
        <div class="icon-circle navy">🔄</div>
        <h3>Simulación Instantánea</h3>
        <p class="muted">Obtén un panorama claro de tus finanzas al instante. Nuestra tecnología te permite proyectar cuotas y plazos sin compromisos ni esperas.</p>
      </div>
      <div class="card">
        <div class="icon-circle blue">🛡️</div>
        <h3>Regulación SBS</h3>
        <p class="muted">Operamos bajo los más estrictos estándares de la Superintendencia de Banca, Seguros y AFP, garantizando la total protección de tus operaciones.</p>
      </div>
      <div class="card">
        <div class="icon-circle cyan">📋</div>
        <h3>Cuota Balón Flexible</h3>
        <p class="muted">Optimiza tu flujo de caja mensual difiriendo un porcentaje del valor de tu vehículo para el pago final. Estructuras inteligentes a tu medida.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { display: flex; align-items: center; gap: 32px; padding: 32px 0; }
.hero-text { flex: 1; }
.hero-text h1 { font-size: 32px; margin-bottom: 12px; line-height: 1.2; }
.hero-text p { margin-bottom: 20px; }
.hero-image { flex: 1; }
.hero-image img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: var(--radius);
}
.pillars { margin-top: 48px; }
.pillars h2 { margin-bottom: 4px; }
.pillars > p { margin-bottom: 24px; }
@media (max-width: 768px) { .hero { flex-direction: column; } }
</style>