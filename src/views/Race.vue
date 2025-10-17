<template>
  <div class="min-h-screen bg-gray-900">
    <div class="container mx-auto py-4">
      <!-- Game Controls -->
      <div class="mb-6">
        <race-control />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        <div class="lg:col-span-3">
          <race-horse-table />
        </div>

        <div class="lg:col-span-9">
          <race-track />
        </div>
      </div>

      <RaceResults />
    </div>
  </div>
</template>

<script setup lang="ts">
import RaceTrack from "@/components/race/RaceTrack.vue";
import RaceHorseTable from "@/components/race-horse/RaceHorseTable.vue";
import RaceControl from "@/components/race/RaceControl.vue";
import RaceResults from "@/components/race/RaceResults.vue";
</script>
