<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-defaultBgColor to-raceLineColorDark flex items-center justify-center"
  >
    <div class="text-center max-w-4xl mx-auto px-6">
      <div class="mb-8">
        <h1 class="text-6xl font-bold text-white mb-4">
          Welcome to
          <span class="text-green-400">Horse Racing</span>
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Experience the thrill of horse racing with Vue 3
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <Tile
          title="Fast Racing"
          description="Watch horses compete in real-time races"
          icon-bg-color="green"
        >
          <template #icon>
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </template>
        </Tile>

        <Tile
          title="Random Selection"
          description="10 horses randomly selected from 20 available"
          icon-bg-color="blue"
        >
          <template #icon>
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </template>
        </Tile>

        <Tile
          title="Interactive"
          description="Start races and select new horses anytime"
          icon-bg-color="purple"
        >
          <template #icon>
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </template>
        </Tile>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <div class="w-fit">
          <page-button label="Let's Begin!" @click="navigateToRace" />
        </div>
        <p class="text-gray-400">Click "Let's Begin!" to start racing!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tile from "@/components/shared/Tile.vue";
import PageButton from "@/components/shared/PageButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToRace = () => {
  router.push("/race");
};
</script>
