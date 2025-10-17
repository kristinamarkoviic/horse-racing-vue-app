import { Module } from "vuex";
import { RaceHorse, RoundResult } from "@/ts";

interface RaceState {
  raceResults: RoundResult[];
  currentRoundResult: RoundResult;
}

const state: RaceState = {
  raceResults: [] as RoundResult[],
  currentRoundResult: {} as RoundResult,
};

const getters = {
  getRaceResults: (state: RaceState) => state.raceResults,
  getCurrentRoundResult: (state: RaceState) => state.currentRoundResult,
};

const mutations = {
  ADD_ROUND_RESULT(state: RaceState, roundResult: RoundResult) {
    state.raceResults.push(roundResult);
  },

  CLEAR_RACE_RESULTS(state: RaceState) {
    state.raceResults = [] as RoundResult[];
    state.currentRoundResult = {} as RoundResult;
  },
};

const actions = {
  addRoundResult({ commit }: any, roundResult: RoundResult) {
    roundResult.horses.sort(
      (a: RaceHorse, b: RaceHorse) =>
        b.currentRacePosition - a.currentRacePosition
    );
    commit("ADD_ROUND_RESULT", roundResult);
  },

  resetRaceResults({ commit }: any) {
    commit("CLEAR_RACE_RESULTS");
  },
};

const raceModule: Module<RaceState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default raceModule;
