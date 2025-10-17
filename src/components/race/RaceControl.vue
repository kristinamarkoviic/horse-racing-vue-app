<template>
  <div class="bg-white/10 rounded-xl p-6 border border-white/10">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-center md:text-left">
        <h2 class="text-2xl font-bold text-white mb-2">Race Control</h2>
        <p class="text-gray-300">
          {{
            raceStatus === "idle"
              ? "Ready to start the race!"
              : raceStatus === "running"
              ? `Round ${currentRound} of ${TOTAL_ROUNDS} (${currentRoundDistance}m) in progress...`
              : raceStatus === "paused"
              ? `Round ${currentRound} (${currentRoundDistance}m) paused`
              : "All rounds finished! Race completed!"
          }}
        </p>
      </div>
      <div class="flex gap-3">
        <PageButton
          v-if="raceStatus === 'idle' || raceStatus === 'paused'"
          :label="raceStatus === 'idle' ? 'Start Race' : 'Resume'"
          @click="handleStartRace"
        />
        <PageButton
          v-if="raceStatus === 'running'"
          label="Pause"
          @click="pauseRace"
        />
        <PageButton
          v-if="raceStatus === 'running' || raceStatus === 'paused'"
          label="Stop"
          @click="resetRace"
        />
        <PageButton
          v-if="raceStatus === 'finished'"
          label="New Race"
          @click="resetRace"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageButton from "@/components/shared/PageButton.vue";
import { useRaceGame } from "@/composables/useRaceGame";

const {
  raceStatus,
  TOTAL_ROUNDS,
  currentRound,
  currentRoundDistance,
  startRace,
  pauseRace,
  resumeRace,
  resetRace,
} = useRaceGame();

const handleStartRace = () => {
  if (raceStatus.value === "paused") {
    resumeRace();
  } else {
    startRace();
  }
};
</script>
