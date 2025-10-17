<template>
  <div
    class="bg-white/10 rounded-xl p-4 border border-white/10 flex-shrink-0 w-full sm:w-auto sm:min-w-[300px]"
  >
    <h4 class="text-lg font-semibold text-white">
      Race Results: Round {{ roundResult.roundNumber }}
    </h4>
    <p class="text-green-400 text-sm mb-4">{{ roundResult.distance }}m</p>

    <Table :columns="columns" hide-title :data="roundResult.horses">
      <template #position="{ index }">
        <span
          v-if="index === 0"
          class="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold"
        >
          🏆 WINNER
        </span>
        <span v-else class="text-center text-gray-700">{{ index + 1 }} </span>
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import Table from "@/components/shared/Table.vue";
import type { RoundResult } from "@/store/modules/race";
import type { Column, TableRow } from "@/ts";

defineProps({
  roundResult: {
    type: Object as PropType<RoundResult>,
    required: true,
  },
});

const columns: Column<TableRow>[] = [
  { key: "position", label: "Position" },
  { key: "name", label: "Horse Name" },
];
</script>
