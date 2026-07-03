<script setup>
const props = defineProps({ marcas: Array, modelValue: Object })
const emit = defineEmits(['update:modelValue'])

function actualizar(campo, valor) {
  emit('update:modelValue', { ...props.modelValue, [campo]: valor })
}

function limpiar() {
  emit('update:modelValue', { marca: '', precioMin: '', precioMax: '' })
}
</script>

<template>
  <div class="card filtros">
    <div class="filtros-header">
      <strong>Filtros</strong>
      <button class="btn-link" @click="limpiar">Limpiar</button>
    </div>

    <div class="form-group">
      <label>Marca</label>
      <select class="input" :value="modelValue.marca" @change="actualizar('marca', $event.target.value)">
        <option value="">Todas</option>
        <option v-for="m in marcas" :key="m" :value="m">{{ m }}</option>
      </select>
    </div>

    <div class="form-group">
      <label>Precio Estimado</label>
      <div class="grid-2">
        <input class="input" type="number" placeholder="Min" :value="modelValue.precioMin"
               @input="actualizar('precioMin', $event.target.value)" />
        <input class="input" type="number" placeholder="Max" :value="modelValue.precioMax"
               @input="actualizar('precioMax', $event.target.value)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.filtros { width: 240px; }
.filtros-header { display: flex; justify-content: space-between; margin-bottom: 16px; }
.btn-link { background: none; border: none; color: var(--blue); cursor: pointer; font-size: 13px; }
</style>