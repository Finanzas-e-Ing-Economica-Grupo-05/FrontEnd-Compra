<script setup>
import { ref } from 'vue'

const seccionActiva = ref('manual')

const pasos = [
  {
    icono: '👤',
    titulo: '1. Crea tu cuenta',
    descripcion: 'Entra a "Crea tu cuenta" desde la pantalla de inicio de sesión y completa el formulario de registro.',
    detalle: [
      'Nombre y Apellidos: escribe solo letras, sin números.',
      'DNI (8 dígitos): tu documento de identidad, solo números.',
      'Teléfono Móvil: tu número de celular a 9 dígitos.',
      'Correo electrónico: debe tener un formato válido (ejemplo@correo.com), lo usarás para iniciar sesión.',
      'Ingresos Mensuales Estimados: selecciona el rango que más se acerque a tu situación; esto ayuda al sistema a calibrar la simulación a tu perfil.',
      'Presiona "Completar Registro" para crear tu cuenta.'
    ]
  },
  {
    icono: '🔐',
    titulo: '2. Inicia sesión',
    descripcion: 'Si ya tienes una cuenta, ingresa con tu correo y contraseña desde la pantalla "Iniciar sesión".',
    detalle: [
      'Correo electrónico: el mismo con el que te registraste.',
      'Contraseña: mínimo 8 caracteres, alfanumérica.',
      'Si olvidaste tu contraseña, usa el enlace "¿Olvidaste tu contraseña?".',
      'También puedes ingresar con Google o Apple.'
    ]
  },
  {
    icono: '🚗',
    titulo: '3. Elige tu vehículo',
    descripcion: 'En el "Catálogo de Vehículos" explora las unidades disponibles y elige la que quieras financiar.',
    detalle: [
      'Usa los filtros de Marca, Precio Estimado y Tipo de Vehículo (Sedán, SUV, Pick-up) para encontrar el auto que buscas.',
      'Cada tarjeta muestra el modelo, especificaciones y el precio base.',
      'Presiona "Simular este modelo" en el auto elegido para pasar al simulador; el precio se carga automáticamente.'
    ]
  },
  {
    icono: '⚙️',
    titulo: '4. Configura tu crédito',
    descripcion: 'En "Configura tu Crédito Vehicular" completa cada campo para armar tu simulación.',
    detalle: [
      'Marca del vehículo y Precio del auto: se completan solos si vienes del catálogo, o los puedes ingresar manualmente.',
      'Porcentaje de Cuota Balón: mueve el control entre 20% y 50%. Es la parte del precio que se paga al final del crédito.',
      'Moneda: elige Soles (S/) o Dólares ($).',
      'Fecha de inicio: la fecha en que empezaría el crédito.',
      'Plazo (meses): la duración total del crédito, por ejemplo 24 o 36 meses.',
      'Tipo de Tasa: elige "Tasa Efectiva Anual (TEA)" o "Tasa Nominal Anual (TNA)".',
      'Valor de la Tasa (%): el número de la tasa que te dio la entidad financiera.',
      'Frecuencia de capitalización: solo si elegiste tasa Nominal (Mensual, Trimestral, Semestral, Anual).',
      'Tipo de periodo de gracia: "Sin Gracia", "Parcial" (solo pagas intereses) o "Total" (no pagas nada, pero la deuda crece).',
      'Meses de gracia: cuántos meses quieres de alivio de pago.',
      'Seguro Desgravamen (%) y Seguro Vehicular (%): las tasas de los seguros obligatorios.',
      'Comisión por Portes: el gasto administrativo fijo mensual.',
      'Revisa el "Resumen Preliminar" a la derecha y presiona "Generar Cronograma de Pagos".'
    ]
  },
  {
    icono: '📅',
    titulo: '5. Revisa tu cronograma',
    descripcion: 'El "Cronograma Detallado de Pagos" te muestra mes a mes cómo se compone tu crédito.',
    detalle: [
      'Columnas: Saldo Inicial, Amortización, Interés, Seguro Desgravamen, Seguro Vehicular, Cuota Fija, Portes, Pago Total y Saldo Final.',
      'Puedes exportar la tabla completa a PDF o Excel con los botones de arriba.',
      'Usa "Cargar más cuotas" para ver el resto de meses.'
    ]
  },
  {
    icono: '📊',
    titulo: '6. Revisa tu resumen financiero',
    descripcion: '"Tu Resumen Financiero" reúne los indicadores clave para decidir si el crédito te conviene.',
    detalle: [
      'TCEA: el costo real total del crédito, incluyendo seguros y comisiones.',
      'VAN: el Valor Actual Neto del préstamo desde tu perspectiva como deudor.',
      'TIR: la Tasa Interna de Retorno, el costo efectivo real del financiamiento.',
      'Resumen de Montos: monto a financiar, intereses totales, seguros y el total a pagar.',
      'Distribución de Costos: gráfico con el peso de capital, intereses y seguros.'
    ]
  },
  {
    icono: '📁',
    titulo: '7. Administra tus simulaciones',
    descripcion: 'En "Mis Créditos" encuentras el historial de todas tus simulaciones guardadas.',
    detalle: [
      'Cada tarjeta resume el vehículo, el monto a financiar y la TCEA estimada.',
      'Presiona "Abrir Detalle" para volver a ver el cronograma completo de esa simulación.',
      'Usa el ícono de copiar para duplicar una simulación o el de la papelera para eliminarla.'
    ]
  }
]

const preguntas = [
  {
    q: '¿Qué diferencia hay entre gracia Total y gracia Parcial?',
    a: 'En la gracia Parcial solo pagas los intereses del mes, y el capital no baja. En la gracia Total no pagas nada durante esos meses, pero los intereses se suman al saldo, por lo que la deuda crece.'
  },
  {
    q: '¿Qué es la Cuota Balón?',
    a: 'Es el porcentaje del precio del vehículo (entre 20% y 50%) que se difiere hasta la última cuota, en lugar de pagarse durante todo el crédito. Esto reduce tus cuotas mensuales, pero implica un pago final más grande.'
  },
  {
    q: '¿Cómo sé si el crédito me conviene?',
    a: 'Revisa la TCEA (costo real anual), el VAN y la TIR en tu "Resumen Financiero". Si el VAN es negativo desde tu perspectiva, significa que el costo del crédito supera tu costo de oportunidad (COK).'
  }
]
</script>

<template>
  <section class="ayuda">
    <h1>Ayuda y asistencia técnica</h1>
    <p class="muted">Encuentra la guía completa para usar Compra Inteligente o comunícate con nuestro equipo de soporte.</p>

    <div class="tabs">
      <button
          class="tab-btn"
          :class="{ active: seccionActiva === 'manual' }"
          @click="seccionActiva = 'manual'"
      >
        📖 Manual de usuario
      </button>
      <button
          class="tab-btn"
          :class="{ active: seccionActiva === 'contacto' }"
          @click="seccionActiva = 'contacto'"
      >
        🛠️ Contactos de asistencia técnica
      </button>
    </div>

    <!-- MANUAL DE USUARIO -->
    <div v-if="seccionActiva === 'manual'" class="seccion">
      <div class="card intro-card">
        <h2>Guía paso a paso</h2>
        <p class="muted">Desde crear tu cuenta hasta revisar el resultado de tu simulación. Sigue el orden para no perderte ningún paso.</p>
      </div>

      <div class="pasos">
        <div v-for="(paso, i) in pasos" :key="i" class="card paso-card">
          <div class="paso-header">
            <div class="icon-circle navy">{{ paso.icono }}</div>
            <h3>{{ paso.titulo }}</h3>
          </div>
          <p class="muted">{{ paso.descripcion }}</p>
          <ul class="detalle-list">
            <li v-for="(d, j) in paso.detalle" :key="j">{{ d }}</li>
          </ul>
        </div>
      </div>

      <div class="card faq-card">
        <h2>Preguntas frecuentes</h2>
        <div v-for="(item, i) in preguntas" :key="i" class="faq-item">
          <h4>{{ item.q }}</h4>
          <p class="muted">{{ item.a }}</p>
        </div>
      </div>
    </div>

    <!-- CONTACTOS DE ASISTENCIA TECNICA -->
    <div v-else class="seccion">
      <div class="card contacto-card">
        <div class="icon-circle blue">🧑‍💻</div>
        <h2>Soporte técnico</h2>
        <p class="muted">Si tienes algún problema con la aplicación, un error en la simulación o dudas sobre tu cuenta, comunícate directamente con nosotros.</p>

        <div class="contacto-info">
          <div class="contacto-row">
            <span class="contacto-label">Nombre</span>
            <span class="contacto-valor">Ysaac Villanueva</span>
          </div>
          <div class="contacto-row">
            <span class="contacto-label">Celular / WhatsApp</span>
            <a class="contacto-valor" href="tel:969644648">969 644 648</a>
          </div>
        </div>

        <a class="btn btn-primary" href="https://wa.me/51969644648" target="_blank" rel="noopener">
          💬 Escribir por WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ayuda h1 { margin-bottom: 4px; }
.ayuda > p { margin-bottom: 20px; }

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
}
.tab-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 16px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14px;
  color: var(--muted);
  border-bottom: 3px solid transparent;
}
.tab-btn.active {
  color: var(--navy);
  border-bottom-color: var(--blue);
}

.intro-card { margin-bottom: 20px; }
.intro-card h2 { margin-bottom: 6px; }

.pasos { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.paso-card { }
.paso-header { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.paso-header .icon-circle { margin-bottom: 0; }
.paso-header h3 { margin: 0; }
.detalle-list { margin: 10px 0 0; padding-left: 20px; }
.detalle-list li { margin-bottom: 6px; font-size: 14px; color: var(--text); }

.faq-card h2 { margin-bottom: 12px; }
.faq-item { padding: 12px 0; border-top: 1px solid var(--border); }
.faq-item:first-of-type { border-top: none; }
.faq-item h4 { margin: 0 0 6px; }

.contacto-card { max-width: 480px; margin: 0 auto; text-align: center; }
.contacto-card .icon-circle { margin: 0 auto 12px; }
.contacto-card h2 { margin-bottom: 8px; }
.contacto-card > p { margin-bottom: 20px; }

.contacto-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--bg);
  border-radius: var(--radius);
  padding: 16px;
  margin-bottom: 20px;
  text-align: left;
}
.contacto-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.contacto-label { color: var(--muted); font-weight: 600; }
.contacto-valor { color: var(--navy); font-weight: 700; text-decoration: none; }

@media (max-width: 768px) {
  .tabs { flex-direction: column; border-bottom: none; }
  .tab-btn { border-bottom: none; border-left: 3px solid transparent; text-align: left; }
  .tab-btn.active { border-left-color: var(--blue); border-bottom-color: transparent; }
}
</style>