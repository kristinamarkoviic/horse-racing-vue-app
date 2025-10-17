<template>
  <div class="min-h-screen bg-gray-900">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
