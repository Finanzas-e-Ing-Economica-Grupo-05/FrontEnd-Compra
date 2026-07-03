<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  moneda: { type: String, default: 'S/' },
  placeholder: { type: String, default: '0.00' }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <div class="currency-wrap">
      <span class="prefix">{{ moneda }}</span>
      <input
          class="input currency-input"
          type="number"
          step="0.01"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped>
.currency-wrap { display: flex; align-items: center; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.prefix { padding: 0 10px; background: #eef1f7; font-weight: 600; color: var(--muted); }
.currency-input { border: none; border-radius: 0; }
.currency-input:focus { outline: none; }
</style>