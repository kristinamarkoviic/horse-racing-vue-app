export type TileIconColor =
  | "green"
  | "blue"
  | "purple"
  | "red"
  | "yellow"
  | "orange"
  | "pink"
  | "indigo";

export const TILE_ICON_COLORS: Record<TileIconColor, string> = {
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  indigo: "bg-indigo-500",
} as const;
