import { RoundDistance } from "@/ts/types/enums/RoundDistance";
import { RaceHorse } from "@/ts/interfaces/Horse";

export interface Round {
  id: number;
  name: string;
  roundDistance: RoundDistance;
  horses: RaceHorse[];
}

export interface RoundResult {
  roundNumber: number;
  distance: number;
  horses: RaceHorse[];
}
