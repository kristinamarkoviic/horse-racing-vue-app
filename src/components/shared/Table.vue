<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden">
    <div
      v-if="!hideTitle"
      class="table-header bg-gradient-to-r from-defaultBgColor to-raceLineColorDark p-4"
    >
      <h2 class="text-white text-left text-l font-bold">{{ title }}</h2>
      <p v-if="subtitle" class="text-green-200 text-sm">{{ subtitle }}</p>
    </div>

    <div>
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-1 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(row, index) in data"
            :key="index"
            class="hover:bg-gray-50 transition-colors"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              class="text-center px-1 py-2 whitespace-nowrap"
            >
              <slot
                :name="column.key"
                :row="row"
                :column="column"
                :index="index"
              >
                <p class="text-sm text-gray-700">
                  {{ row[column.key] }}
                </p>
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Column, TableRow } from "@/ts";

defineProps({
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  hideTitle: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array as PropType<Column<TableRow>[]>,
    required: true,
  },
  data: {
    type: Array as PropType<TableRow[]>,
    required: true,
  },
});
</script>
