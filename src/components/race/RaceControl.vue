<template>
  <div>
    <div class="flex flex-col items-end justify-between gap-1">
      <div class="text-center">
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
        <page-button
          v-if="raceStatus === 'idle' || raceStatus === 'paused'"
          :label="raceStatus === 'idle' ? 'Start Race' : 'Resume'"
          @click="handleStartRace"
        />
        <page-button
          v-if="raceStatus === 'running'"
          label="Pause"
          @click="pauseRace"
        />
        <page-button
          v-if="raceStatus === 'running' || raceStatus === 'paused'"
          label="Stop"
          @click="resetRace"
        />
        <page-button
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
