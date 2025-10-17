<template>
  <div class="w-full max-w-6xl mx-auto">
    <div class="bg-defaultBgColor rounded-xl p-6 shadow-2xl">
      <div class="flex items-center justify-center gap-4 mb-6">
        <h2 class="text-white text-xl font-bold">Race</h2>
      </div>
      <div class="space-y-4">
        <RaceLine
          v-for="(horse, index) in currentRoundHorses"
          :key="Math.random() + index"
          :horse="horse"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RaceLine from "@/components/race/RaceLine.vue";
import { useRaceGame } from "@/composables/useRaceGame";

const { currentRoundHorses } = useRaceGame();
</script>
