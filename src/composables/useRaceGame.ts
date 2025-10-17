import { ref, computed } from "vue";
import { useStore } from "vuex";
import { RaceStatus } from "@/ts/types/Race";
import { RoundDistance, type RoundResult } from "@/ts";

const raceStatus = ref<RaceStatus>("idle");
const currentRound = ref(1);
const TOTAL_ROUNDS = 6;

export const useRaceGame = () => {
  const store = useStore();

  const currentRoundDistance = computed(
    () => roundDistances[currentRound.value - 1]
  );
  const raceResults = computed(() => store.getters["race/getRaceResults"]);

  const currentRoundHorses = computed(
    () => store.getters["horses/getCurrentRoundHorses"]
  );

  const allHorses = computed(() => store.getters["horses/getAllHorses"]);

  const roundDistances = [
    RoundDistance.ROUND_1,
    RoundDistance.ROUND_2,
    RoundDistance.ROUND_3,
    RoundDistance.ROUND_4,
    RoundDistance.ROUND_5,
    RoundDistance.ROUND_6,
  ];

  const startRace = async () => {
    raceStatus.value = "running";
    // Start the first round
    await startRound();
  };

  const resumeRace = () => {
    if (raceStatus.value === "paused") {
      raceStatus.value = "running";
    }
  };

  const pauseRace = () => {
    if (raceStatus.value === "running") {
      raceStatus.value = "paused";
    }
  };

  const resetRace = async () => {
    raceStatus.value = "idle";
    currentRound.value = 1;

    store.dispatch("race/resetRaceResults");
    store.dispatch("horses/clearCurrentRoundHorses");
  };

  const startRound = async () => {
    if (currentRound.value > TOTAL_ROUNDS) {
      completeRace();
      return;
    }
    await store.dispatch("horses/selectRandomHorsesForRound", 10);

    await simulateRound();
  };

  const completeRound = async () => {
    const roundResult: RoundResult = {
      roundNumber: currentRound.value,
      distance: currentRoundDistance.value,
      horses: [...currentRoundHorses.value],
    };

    await store.dispatch("race/addRoundResult", roundResult);

    currentRound.value++;

    return await startRound();
  };

  const completeRace = async () => {
    raceStatus.value = "finished";
  };

  const simulateRound = async () => {
    const updateHorseRacePosition = async () => {
      if (raceStatus.value === "idle") {
        return;
      }
      if (raceStatus.value === "paused") {
        return setTimeout(updateHorseRacePosition, 300);
      }

      let horsesFinishCount = 0;

      for (const horse of currentRoundHorses.value) {
        const horseIterationDistance =
          (horse.conditionScore * 100) / currentRoundDistance.value;
        horse.currentRacePosition =
          horse.currentRacePosition + horseIterationDistance;

        if (horse.currentRacePosition >= 100) {
          horsesFinishCount++;
        }
      }

      if (horsesFinishCount !== currentRoundHorses.value.length) {
        return setTimeout(updateHorseRacePosition, 300);
      }

      return await completeRound();
    };

    return setTimeout(updateHorseRacePosition, 300);
  };

  return {
    raceStatus,
    currentRound,
    roundDistances,
    currentRoundDistance,
    TOTAL_ROUNDS,
    raceResults,
    currentRoundHorses,
    allHorses,
    startRace,
    pauseRace,
    resumeRace,
    resetRace,
  };
};
