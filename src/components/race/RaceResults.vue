<template>
  <div class="bg-white/10 rounded-xl p-6 border border-white/10">
    <div v-if="raceResults.length">
      <div class="flex flex-wrap gap-4">
        <RoundResults
          v-for="result in raceResults"
          :key="result.roundNumber"
          :round-result="result"
        />
      </div>
    </div>

    <div v-else class="text-gray-300">
      <p class="text-sm">
        Race results will appear here after the race finishes...
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import RoundResults from "./RoundResults.vue";
import { useRaceGame } from "@/composables/useRaceGame";

const { raceResults } = useRaceGame();
</script>
