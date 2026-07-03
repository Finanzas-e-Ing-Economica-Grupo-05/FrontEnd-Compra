<script setup>
import Navbar from './components/shared/Navbar.vue'
import Footer from './components/shared/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="page-container">
    <router-view />
  </main>
  <Footer />
</template>