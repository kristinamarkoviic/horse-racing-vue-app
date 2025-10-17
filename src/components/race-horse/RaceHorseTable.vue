<template>
  <div class="h-full">
    <Table :title="title" :columns="columns" :data="tableRows">
      <template #color="{ row }">
        <race-horse-svg :color="row.color" :size="32" />
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, type ComputedRef } from "vue";
import { useStore } from "vuex";
import Table from "@/components/shared/Table.vue";
import RaceHorseSvg from "@/components/race-horse/RaceHorseSvg.vue";
import { Column, Horse, TableRow } from "@/ts";

const store = useStore();

defineProps({
  title: {
    type: String,
    required: false,
    default: "Horse List",
  },
});

const horseList = computed(() => store.getters["horses/getAllHorses"]);

const columns: Column<TableRow>[] = [
  { key: "name", label: "Horse Name" },
  { key: "conditionScore", label: "Horse Condition" },
  { key: "color", label: "Horse Color" },
];

const tableRows: ComputedRef<TableRow[]> = computed(() =>
  horseList.value.map((horse: Horse) => ({
    name: horse.name,
    conditionScore: horse.conditionScore,
    color: horse.color,
  }))
);
</script>
