<template>
  <div
    class="relative w-full h-12 bg-gradient-to-r from-raceLineColorDark to-raceLineColorLight border border-gray-600 rounded-lg overflow-hidden"
  >
    <div class="absolute inset-0 flex items-center px-3">
      <div
        class="horse-svg-container"
        v-if="horse"
        :style="{
          '--horse-position': `${Math.min(
            100,
            horse?.currentRacePosition || 0
          )}%`,
        }"
      >
        <race-horse-svg :color="horse?.color" :size="64" />
      </div>
      <div class="horse-name">
        {{ horse?.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RaceHorse } from "@/ts";
import RaceHorseSvg from "@/components/race-horse/RaceHorseSvg.vue";

interface Props {
  horse: RaceHorse;
}

defineProps<Props>();
</script>

<style scoped>
.horse-svg-container {
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 64px);
  height: 100%;
  transform: translateX(var(--horse-position));
  transition: transform 0.55s ease;
}
</style>
