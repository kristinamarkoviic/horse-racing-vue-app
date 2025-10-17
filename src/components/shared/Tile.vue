<template>
  <div
    class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
  >
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
      :class="iconBgClass"
    >
      <slot name="icon">
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
      </slot>
    </div>
    <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults, defineProps } from "vue";
import { TILE_ICON_COLORS, type TileIconColor } from "@/ts";

interface Props {
  title: string;
  description: string;
  iconBgColor?: TileIconColor;
}

const props = withDefaults(defineProps<Props>(), {
  iconBgColor: "green",
});

const iconBgClass = computed(() => TILE_ICON_COLORS[props.iconBgColor]);
</script>
