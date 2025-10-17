<template>
  <div class="h-full">
    <div class="bg-defaultBgColor rounded-xl p-4 shadow-2xl">
      <div class="flex justify-between gap-4 pb-2">
        <h2 class="text-white text-left text-xl font-bold">Race</h2>
        <div class="w-80 flex-shrink-0">
          <race-control />
        </div>
      </div>
      <div class="space-y-2">
        <race-line
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
import RaceControl from "@/components/race/RaceControl.vue";
import { useRaceGame } from "@/composables/useRaceGame";

const { currentRoundHorses } = useRaceGame();
</script>
