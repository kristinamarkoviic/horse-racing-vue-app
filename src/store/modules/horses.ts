import { Module } from "vuex";
import { Horse, RaceHorse } from "@/ts";

interface HorsesState {
  allHorses: Horse[];
  currentRoundHorses: RaceHorse[];
}

const state: HorsesState = {
  allHorses: [
    {
      id: 1,
      name: "Thunder",
      color: "#8B4513",
      conditionScore: 85,
    },
    {
      id: 2,
      name: "Lightning",
      color: "#FFD700",
      conditionScore: 92,
    },
    {
      id: 3,
      name: "Storm",
      color: "#2F4F4F",
      conditionScore: 78,
    },
    {
      id: 4,
      name: "Blaze",
      color: "#DC143C",
      conditionScore: 88,
    },
    {
      id: 5,
      name: "Shadow",
      color: "#696969",
      conditionScore: 82,
    },
    {
      id: 6,
      name: "Spirit",
      color: "#9370DB",
      conditionScore: 90,
    },
    {
      id: 7,
      name: "Phoenix",
      color: "#FF6347",
      conditionScore: 95,
    },
    {
      id: 8,
      name: "Comet",
      color: "#00CED1",
      conditionScore: 75,
    },
    {
      id: 9,
      name: "Aurora",
      color: "#FF69B4",
      conditionScore: 87,
    },
    {
      id: 10,
      name: "Nova",
      color: "#32CD32",
      conditionScore: 83,
    },
    {
      id: 11,
      name: "Eclipse",
      color: "#4B0082",
      conditionScore: 80,
    },
    {
      id: 12,
      name: "Frost",
      color: "#87CEEB",
      conditionScore: 93,
    },
    {
      id: 13,
      name: "Ember",
      color: "#FF4500",
      conditionScore: 76,
    },
    {
      id: 14,
      name: "Mystic",
      color: "#8A2BE2",
      conditionScore: 89,
    },
    {
      id: 15,
      name: "Ranger",
      color: "#228B22",
      conditionScore: 84,
    },
    {
      id: 16,
      name: "Viper",
      color: "#556B2F",
      conditionScore: 81,
    },
    {
      id: 17,
      name: "Falcon",
      color: "#4682B4",
      conditionScore: 94,
    },
    {
      id: 18,
      name: "Titan",
      color: "#A0522D",
      conditionScore: 77,
    },
    {
      id: 19,
      name: "Zephyr",
      color: "#DDA0DD",
      conditionScore: 86,
    },
    {
      id: 20,
      name: "Orion",
      color: "#B0C4DE",
      conditionScore: 91,
    },
  ],
  currentRoundHorses: [],
};

const getters = {
  getAllHorses: (state: HorsesState) => state.allHorses,
  getCurrentRoundHorses: (state: HorsesState) => state.currentRoundHorses,
};

const mutations = {
  SET_CURRENT_ROUND_HORSES(state: HorsesState, horses: RaceHorse[]) {
    state.currentRoundHorses = horses;
  },

  CLEAR_CURRENT_ROUND_HORSES(state: HorsesState) {
    state.currentRoundHorses = [];
  },
};

const actions = {
  selectRandomHorsesForRound({ commit, state }: any, count = 10) {
    const shuffled = [...state.allHorses].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count).map((horse) => ({
      ...horse,
      currentRacePosition: 0,
      rank: 0,
    }));
    commit("SET_CURRENT_ROUND_HORSES", selected);
    return selected;
  },

  clearCurrentRoundHorses({ commit }: any) {
    commit("CLEAR_CURRENT_ROUND_HORSES");
  },
};

const horsesModule: Module<HorsesState, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default horsesModule;
