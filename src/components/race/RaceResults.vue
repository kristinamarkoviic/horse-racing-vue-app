<template>
  <div
    class="bg-white/10 rounded-xl p-4 border border-white/10 h-full flex flex-col"
  >
    <div class="flex items-center justify-between mb-1">
      <h3 class="text-white font-bold">Race Results</h3>
      <div class="flex gap-2">
        <button
          @click="previousRound"
          :disabled="currentIndex === 0"
          class="px-2 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed rounded text-white text-sm"
        >
          ‹
        </button>
        <button
          @click="nextRound"
          :disabled="currentIndex >= maxIndex"
          class="px-2 py-1 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed rounded text-white text-sm"
        >
          ›
        </button>
      </div>
    </div>

    <div
      v-if="displayResults.length > 0"
      class="overflow-hidden h-full flex flex-col"
    >
      <div
        class="flex transition-transform duration-300 ease-in-out flex-1"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="result in displayResults"
          :key="result.roundNumber"
          class="w-full flex-shrink-0 flex flex-col"
        >
          <div class="h-full overflow-y-auto">
            <round-results :round-result="result" />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-gray-300 text-center py-8">
      <p class="text-sm">Race results will appear here...</p>
    </div>

    <div
      v-if="displayResults.length > 1"
      class="flex justify-center gap-1 mt-4"
    >
      <button
        v-for="(_, index) in displayResults"
        :key="index"
        @click="goToRound(index)"
        :class="[
          'w-2 h-2 rounded-full transition-colors',
          index === currentIndex ? 'bg-green-500' : 'bg-gray-600',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import RoundResults from "./RoundResults.vue";
import { useRaceGame } from "@/composables/useRaceGame";

const { raceResults } = useRaceGame();

const currentIndex = ref(0);

const displayResults = computed(() => {
  return raceResults.value || [];
});

const maxIndex = computed(() => Math.max(0, displayResults.value.length - 1));

const nextRound = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const previousRound = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToRound = (index: number) => {
  currentIndex.value = index;
};

watch(displayResults, () => {
  currentIndex.value = 0;
});
</script>
