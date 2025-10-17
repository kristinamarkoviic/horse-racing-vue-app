<template>
  <div
    class="inline-block"
    :style="{ color, width: `${size}px`, height: `${size}px` }"
    v-html="processedSvg"
  />
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";
import horseSvgRaw from "!!raw-loader!@/assets/galloping-horse.svg";

interface Props {
  color?: string;
  size?: number;
}

const props = withDefaults(defineProps<Props>(), {
  color: "#8B4513",
  size: 128,
});

const color = computed(() => props.color);
const size = computed(() => props.size);

// List of horse body hex fills to convert to currentColor
const BODY_HEXES = ["AE7029", "925624", "DBAB3A", "5B401F", "573E1A", "070909"];

// Computed SVG string with body colors replaced
const processedSvg = computed(() => {
  let svg = horseSvgRaw;

  // Add scaling style if missing
  svg = svg.replace(/<svg(\s[^>]*)?>/i, (match) =>
    /style=/i.test(match)
      ? match
      : match.replace(">", ' style="width:100%;height:100%" >')
  );

  // Replace horse body fills with currentColor
  const re = new RegExp(`fill="#(?:${BODY_HEXES.join("|")})"`, "gi");
  svg = svg.replace(re, 'fill="currentColor"');

  return svg;
});
</script>

<style scoped>
:deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
