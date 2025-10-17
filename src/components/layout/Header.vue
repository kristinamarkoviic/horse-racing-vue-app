<template>
  <header
    class="bg-gradient-to-r from-defaultBgColor to-raceLineColorDark shadow-lg"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <logo />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import Logo from "@/components/layout/Logo.vue";
defineEmits<{
  startGame: [];
}>();
</script>
