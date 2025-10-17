<template>
  <button
    @click="onClick"
    class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
  >
    <slot name="icon"></slot>
    <span class="text-sm">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");
</script>
