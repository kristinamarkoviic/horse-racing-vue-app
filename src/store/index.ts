import { createStore } from "vuex";
import raceModule from "./modules/race";
import horsesModule from "./modules/horses";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    race: raceModule,
    horses: horsesModule,
  },
});
