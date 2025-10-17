<template>
  <div class="h-[calc(100vh-68px)] overflow-hidden bg-gray-900">
    <div class="container mx-auto py-4 h-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 h-full gap-4">
        <div class="lg:col-span-3 h-full overflow-scroll">
          <race-horse-table />
        </div>

        <div class="lg:col-span-6 h-full overflow-scroll">
          <race-track />
        </div>

        <div class="lg:col-span-3 h-full overflow-scroll">
          <race-results />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RaceTrack from "@/components/race/RaceTrack.vue";
import RaceHorseTable from "@/components/race-horse/RaceHorseTable.vue";
import RaceResults from "@/components/race/RaceResults.vue";
</script>
